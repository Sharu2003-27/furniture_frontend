import { useState, useCallback } from 'react'

export default function useLocalStorage(key, initialValue) {
    const [storage, setStorage] = useState(() => {
        try {
            const savedData = localStorage.getItem(key)
            if (!savedData || savedData === "undefined") {
                return initialValue
            }
            return savedData ? JSON.parse(savedData) : initialValue
        } catch (error) {    
            console.error('Error loading data from localStorage:', error)
            return initialValue
        }  
    })

    const updateStorage = useCallback((newValue) => {
        try {
            // Handle function updates (like setState)
            const valueToStore = typeof newValue === 'function' ? newValue(storage) : newValue
            setStorage(valueToStore)
            localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
           console.error("Error in updating data from localStorage", error) 
        }
    }, [key])

    const removeStorage = useCallback(() => {
        try {
           setStorage(initialValue)
           localStorage.removeItem(key) 
        } catch (error) {
            console.error("Error in removing data from localStorage", error)
        }
    }, [key, initialValue])
    
    return [storage, updateStorage, removeStorage]
}
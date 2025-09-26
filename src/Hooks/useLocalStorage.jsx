import { useState } from 'react'

export default function useLocalStorage(key, initialValue) {

    const [storage, setStorage] = useState(() => {
       try {
        const savedData = localStorage.getItem(key)
        return savedData ? JSON.parse(savedData) : []
       } catch (error) {    
         console.error('Error loading data from localStorage:', error)
         return initialValue
       }  
    })

    const updateStorage = (newValue) => {
        try {
            setStorage(newValue)
            localStorage.setItem(key, JSON.stringify(newValue))
        } catch (error) {
           console.error("Error in updating data from localStorage", error) 
        }
    }

    const removeStorage = () => {
        try {
           setStorage(initialValue)
           localStorage.removeItem(key) 
        } catch (error) {
            console.error("Error in removing data from localStorage", error)
        }
    }

    return [ storage, updateStorage, removeStorage ]

}
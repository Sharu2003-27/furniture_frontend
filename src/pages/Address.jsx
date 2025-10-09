import { useContext, useState } from "react"
import ProductsContext from "../contexts/ProductsContext"
import { Link } from "react-router-dom"

export default function Address() {
  const { 
    addresses, 
    setAddresses, 
    selectedAddressId, 
    setSelectedAddressId, 
    setAlertMessage
  } = useContext(ProductsContext)

  const [form, setForm] = useState({
    id: null,
    name: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: ""
  })

  function resetForm() {
    setForm({
      id: null,
      name: "",
      phone: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      zip: ""
    })
  }

  function saveAddress(e) {
    e.preventDefault() 

    if (!form.name || !form.phone || !form.line1 || !form.city || !form.state || !form.zip) {
      setAlertMessage("Please fill all required address fields")
      return 
    }
    
    if (form.id) {
      const updatedAddresses = addresses.map(address => {
        if (address.id === form.id) {
          return form 
        }
        return address 
      })
      setAddresses(updatedAddresses)
      setAlertMessage("Address updated")
    } 
   
    else {
      const newId = Date.now().toString() 
      const newAddress = { ...form, id: newId }
      setAddresses([...addresses, newAddress]) 
      setAlertMessage("Address added")
    }
    
    resetForm() 
  }

  function editAddress(address) {
    setForm(address)
  }

  function deleteAddress(id) {
    const filteredAddresses = addresses.filter(address => address.id !== id)
    setAddresses(filteredAddresses)

    if (selectedAddressId === id) {
      setSelectedAddressId(null)
    }
    setAlertMessage("Address deleted")
  }

  function selectAddress(id) {
    setSelectedAddressId(id)
    setAlertMessage("Address selected")
  }

  return (
    <div className="container py-4">
      <h2>My Addresses</h2>
      
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={saveAddress} className="card p-3 mb-3">
            <h5>{form.id ? "Update Address" : "Add New Address"}</h5>
            
            <input 
              className="form-control mb-2" 
              placeholder="Full Name" 
              value={form.name} 
              onChange={e => setForm({...form, name: e.target.value})} 
            />
            
            <input 
              className="form-control mb-2" 
              placeholder="Phone Number" 
              value={form.phone} 
              onChange={e => setForm({...form, phone: e.target.value})} 
            />
            
            <input 
              className="form-control mb-2" 
              placeholder="Address Line 1" 
              value={form.line1} 
              onChange={e => setForm({...form, line1: e.target.value})} 
            />
            
            <input 
              className="form-control mb-2" 
              placeholder="Address Line 2 (Optional)" 
              value={form.line2} 
              onChange={e => setForm({...form, line2: e.target.value})} 
            />
            
            <div className="d-flex gap-2">
              <input 
                className="form-control mb-2" 
                placeholder="City" 
                value={form.city} 
                onChange={e => setForm({...form, city: e.target.value})} 
              />
              
              <input 
                className="form-control mb-2" 
                placeholder="State" 
                value={form.state} 
                onChange={e => setForm({...form, state: e.target.value})} 
              />
              
              <input 
                className="form-control mb-2" 
                placeholder="ZIP Code" 
                value={form.zip} 
                onChange={e => setForm({...form, zip: e.target.value})} 
              />
            </div>
            
            <div className="d-flex gap-2">
              <button className="btn btn-primary" type="submit">
                {form.id ? "Update Address" : "Add Address"}
              </button>
              <button type="button" className="btn btn-secondary" onClick={resetForm}>
                Clear Form
              </button>
            </div>
          </form>
        </div>
        
        <div className="col-md-6">
          <div className="row">
            {addresses.map(address => (
              <div className="col-12 mb-3" key={address.id}>
                <div className={`card p-3 ${selectedAddressId === address.id ? 'border-primary' : ''}`}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="mb-1">{address.name} ({address.phone})</h6>
                      <div className="text-muted">
                        {address.line1}{address.line2 ? `, ${address.line2}` : ''}
                      </div>
                      <div className="text-muted">
                        {address.city}, {address.state} {address.zip}
                      </div>
                    </div>
                    
                    <div className="d-flex flex-column gap-2">
                      <Link 
                        className="btn btn-outline-primary btn-sm" 
                        onClick={() => selectAddress(address.id)}
                        to="/checkout">Select</Link>
                        
                      <button 
                        className="btn btn-outline-secondary btn-sm" 
                        onClick={() => editAddress(address)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-outline-danger btn-sm" 
                        onClick={() => deleteAddress(address.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {addresses.length === 0 && (
              <p className="text-muted">No addresses saved yet. Add one above!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
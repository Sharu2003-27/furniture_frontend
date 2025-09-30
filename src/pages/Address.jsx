import { useContext, useState } from "react"
import ProductsContext from "../contexts/ProductsContext"

export default function Address() {
  const { addresses, setAddresses, selectedAddressId, setSelectedAddressId } = useContext(ProductsContext)
  const [form, setForm] = useState({ id: null, name: "", phone: "", line1: "", line2: "", city: "", state: "", zip: "" })

  function resetForm() {
    setForm({ id: null, name: "", phone: "", line1: "", line2: "", city: "", state: "", zip: "" })
  }

  function saveAddress(e) {
    e.preventDefault()
    if (!form.name || !form.phone || !form.line1 || !form.city || !form.state || !form.zip) return
    if (form.id) {
      setAddresses(addresses.map(a => a.id === form.id ? form : a))
    } else {
      const id = Date.now().toString()
      setAddresses([ ...addresses, { ...form, id } ])
    }
    resetForm()
  }

  function editAddress(a) {
    setForm(a)
  }

  function deleteAddress(id) {
    setAddresses(addresses.filter(a => a.id !== id))
    if (selectedAddressId === id) setSelectedAddressId(null)
  }

  function selectAddress(id) {
    setSelectedAddressId(id)
  }

  return (
    <div className="container py-4">
      <h2>Addresses</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={saveAddress} className="card p-3 mb-3">
            <h5>{form.id ? "Update Address" : "Add Address"}</h5>
            <input className="form-control mb-2" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
            <input className="form-control mb-2" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            <input className="form-control mb-2" placeholder="Address Line 1" value={form.line1} onChange={e=>setForm({...form, line1:e.target.value})} />
            <input className="form-control mb-2" placeholder="Address Line 2" value={form.line2} onChange={e=>setForm({...form, line2:e.target.value})} />
            <div className="d-flex gap-2">
              <input className="form-control mb-2" placeholder="City" value={form.city} onChange={e=>setForm({...form, city:e.target.value})} />
              <input className="form-control mb-2" placeholder="State" value={form.state} onChange={e=>setForm({...form, state:e.target.value})} />
              <input className="form-control mb-2" placeholder="ZIP" value={form.zip} onChange={e=>setForm({...form, zip:e.target.value})} />
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-primary" type="submit">{form.id ? "Update" : "Add"}</button>
              <button type="button" className="btn btn-secondary" onClick={resetForm}>Clear</button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="row">
            {addresses.map(a => (
              <div className="col-12 mb-3" key={a.id}>
                <div className={`card p-3 ${selectedAddressId === a.id ? 'border-primary' : ''}`}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="mb-1">{a.name} ({a.phone})</h6>
                      <div className="text-muted">{a.line1}{a.line2 ? `, ${a.line2}` : ''}</div>
                      <div className="text-muted">{a.city}, {a.state} {a.zip}</div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <button className="btn btn-outline-primary btn-sm" onClick={() => selectAddress(a.id)}>Select</button>
                      <button className="btn btn-outline-secondary btn-sm" onClick={() => editAddress(a)}>Edit</button>
                      <button className="btn btn-outline-danger btn-sm" onClick={() => deleteAddress(a.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {addresses.length === 0 && <p className="text-muted">No addresses yet.</p>}
          </div>
        </div>
      </div>
    </div>
  )
}




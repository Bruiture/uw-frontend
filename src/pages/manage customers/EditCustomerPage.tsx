import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditCustomerPage = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  // 🔥 mock data (later replace with API)
  const [form, setForm] = useState({
    name: "UW",
    contact: "Uditha",
    address: "Langwarrin LPO",
    telephone: "+94748514961"
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    console.log("Updated Customer:", form)

    // TODO: call API here

    navigate("/service/customers")
  }

  return (
    <div className="space-y-4">

      {/* Header */}
      <h2 className="text-lg font-semibold text-slate-700">
        Edit Customer
      </h2>
      <div className="text-sm text-slate-500">
        Service Calls / Manage Customers / Edit
      </div>

      {/* Form Card */}
      <div className="bg-white border rounded-xl shadow p-5 space-y-4 max-w-2xl">

        {/* Name */}
        <div>
          <label className="block text-sm text-slate-600 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm text-slate-600 mb-1">
            Contact Person
          </label>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm text-slate-600 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Telephone */}
        <div>
          <label className="block text-sm text-slate-600 mb-1">
            Telephone
          </label>
          <input
            type="text"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-3">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg"
          >
            Update
          </button>

          <button
            onClick={() => navigate("/customers")}
            className="px-4 py-2 text-sm bg-slate-200 rounded-lg"
          >
            Cancel
          </button>
        </div>

      </div>

    </div>
  )
}

export default EditCustomerPage
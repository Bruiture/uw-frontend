import { useState } from "react"

const CreateService = () => {

  const today = new Date()

  const [form, setForm] = useState({
    orderNumber: "",
    customer: "",
    contactPerson: "",
    address: "",
    telephone: "",
    comments: "",
    useForTrade: "No",
    scaleCertified: "No",
    testNumber: "",
    description: "",
    signed: "No",
    loanScale: "No",
    make: "",
    model: "",
    capacity: "",
    serial: ""
  })

  const [customerSearch, setCustomerSearch] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)

  // mock data (replace with API later)
  const customers = [
    {
      id: 1,
      name: "ABC Company",
      contactPerson: "John",
      address: "Colombo",
      telephone: "0771234567"
    },
    {
      id: 2,
      name: "XYZ Traders",
      contactPerson: "Nimal",
      address: "Negombo",
      telephone: "0712345678"
    }
  ]

  const filteredCustomers = customers.filter(c =>
    c.name.toLowerCase().includes(customerSearch.toLowerCase())
  )

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex justify-center">
      <div className="space-y-2 w-full md:w-1/2">

        <h2 className="text-lg font-semibold text-slate-700">
          Create Service
        </h2>
        <div className="text-sm text-slate-500">Service Calls / Create</div>

        <div className="bg-white p-6 rounded-xl shadow border space-y-5">

          {/* Date */}
          <div>
            <label className="text-sm font-medium">Date</label>
            <input
              type="date"
              className="w-full border p-2 rounded mt-1"
              defaultValue={today.toISOString().split("T")[0]}
            />
          </div>

          {/* Order Number */}
          <div>
            <label className="text-sm font-medium">Order Number</label>
            <input
              name="orderNumber"
              value={form.orderNumber}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          {/* Customer Search */}
          <div className="relative">
            <label className="text-sm font-medium">Customer</label>

            <input
              value={customerSearch}
              onChange={(e) => {
                setCustomerSearch(e.target.value)
                setShowDropdown(true)
              }}
              placeholder="Search customer..."
              className="w-full border p-2 rounded mt-1"
            />

            {showDropdown && (
              <div className="absolute z-50 bg-white border w-full mt-1 rounded shadow max-h-40 overflow-y-auto">

                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => {
                        setCustomerSearch(c.name)
                        setForm({
                          ...form,
                          customer: c.name,
                          contactPerson: c.contactPerson,
                          address: c.address,
                          telephone: c.telephone
                        })
                        setShowDropdown(false)
                      }}
                      className="p-2 hover:bg-slate-100 cursor-pointer"
                    >
                      {c.name}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-slate-500">
                    No customer found
                  </div>
                )}

              </div>
            )}
          </div>

          {/* Contact Person */}
          <div>
            <label className="text-sm font-medium">Contact Person</label>
            <input
              name="contactPerson"
              value={form.contactPerson}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          {/* Address */}
          <div>
            <label className="text-sm font-medium">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
              rows={2}
            />
          </div>

          {/* Telephone */}
          <div>
            <label className="text-sm font-medium">Telephone</label>
            <input
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          {/* Comments */}
          <div>
            <label className="text-sm font-medium">Customer Comments</label>
            <textarea
              name="comments"
              value={form.comments}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
              rows={3}
            />
          </div>

          {/* Use for Trade */}
          <div>
            <label className="text-sm font-medium">Use for Trade</label>
            <select
              name="useForTrade"
              value={form.useForTrade}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {/* Scale Certified */}
          <div>
            <label className="text-sm font-medium">Scale Certified</label>
            <select
              name="scaleCertified"
              value={form.scaleCertified}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {/* Test Number */}
          <div>
            <label className="text-sm font-medium">Test Number</label>
            <input
              name="testNumber"
              value={form.testNumber}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
              rows={3}
            />
          </div>

          {/* Signed */}
          <div>
            <label className="text-sm font-medium">Signed</label>
            <select
              name="signed"
              value={form.signed}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {/* Signed Date */}
          <div>
            <label className="text-sm font-medium">Signed Date</label>
            <input
              type="date"
              className="w-full border p-2 rounded mt-1"
              defaultValue={today.toISOString().split("T")[0]}
            />
          </div>

          {/* Loan Scale */}
          <div>
            <label className="text-sm font-medium">Loan/Hire Scale Given?</label>
            <div className="flex gap-4 mt-2">
              <label>
                <input type="radio" name="loanScale" value="Yes" onChange={handleChange} /> Yes
              </label>
              <label>
                <input type="radio" name="loanScale" value="No" defaultChecked onChange={handleChange} /> No
              </label>
            </div>
          </div>

          {/* Make */}
          <div>
            <label className="text-sm font-medium">Make</label>
            <input name="make" onChange={handleChange} className="w-full border p-2 rounded mt-1" />
          </div>

          {/* Model */}
          <div>
            <label className="text-sm font-medium">Model</label>
            <input name="model" onChange={handleChange} className="w-full border p-2 rounded mt-1" />
          </div>

          {/* Capacity */}
          <div>
            <label className="text-sm font-medium">Capacity</label>
            <input name="capacity" onChange={handleChange} className="w-full border p-2 rounded mt-1" />
          </div>

          {/* Serial */}
          <div>
            <label className="text-sm font-medium">Serial</label>
            <input name="serial" onChange={handleChange} className="w-full border p-2 rounded mt-1" />
          </div>

          {/* Return Signed */}
          <div>
            <label className="text-sm font-medium">Return Signed</label>
            <select className="w-full border p-2 rounded mt-1">
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {/* Return Signed Date */}
          <div>
            <label className="text-sm font-medium">Return Signed Date</label>
            <input
              type="date"
              className="w-full border p-2 rounded mt-1"
              defaultValue={today.toISOString().split("T")[0]}
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Create
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CreateService
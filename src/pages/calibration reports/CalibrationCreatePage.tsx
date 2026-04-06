import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CalibrationCreatePage = () => {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    customerName: "",
    address: "",
    contactName: "",
    phone: "",

    make: "",
    model: "",
    serial: "",
    capacity: "",
    location: "",

    loads: ["", "", "", "", "", "", ""],

    mpe: "",
    frequency: "30",
    lastCalibrationDate: "",
    calibratedBy: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleLoadChange = (index: number, value: string) => {
    const updatedLoads = [...form.loads]
    updatedLoads[index] = value
    setForm(prev => ({ ...prev, loads: updatedLoads }))
  }

  const handleSubmit = () => {
    console.log("Calibration Data:", form)

    // TODO: API call

    navigate(-1)
  }

  return (
    <div className="space-y-4">

      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-slate-700">
          New Calibration Scale
        </h2>
        <div className="text-sm text-slate-500">
          Calibration / Create
        </div>
      </div>

      {/* Form */}
      <div className="bg-white border rounded-xl shadow p-5 max-w-3xl">

        {/* Customer Details */}
        <div className="mb-5">
          <h3 className="text-sm font-semibold text-slate-700 mb-2">
            Customer Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm">Customer Name</label>
              <input
                name="customerName"
                value={form.customerName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm">Contact Name</label>
              <input
                name="contactName"
                value={form.contactName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm">Address</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

          </div>
        </div>

        <hr className="my-4" />

        {/* Scale Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="text-sm">Make</label>
            <input
              name="make"
              value={form.make}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm">Model</label>
            <input
              name="model"
              value={form.model}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm">Serial</label>
            <input
              name="serial"
              value={form.serial}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm">Capacity</label>
            <input
              name="capacity"
              value={form.capacity}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm">Location</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

        </div>

        {/* Load Applied */}
        <div className="mt-5">
          <label className="text-sm font-medium">Load Applied</label>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
            {form.loads.map((l, i) => (
              <input
                key={i}
                value={l}
                onChange={(e) => handleLoadChange(i, e.target.value)}
                placeholder={`Load ${i + 1}`}
                className="border rounded px-3 py-2 text-sm"
              />
            ))}
          </div>
        </div>

        {/* Extra Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">

          <div>
            <label className="text-sm">Maximum Permissible Error</label>
            <input
              name="mpe"
              value={form.mpe}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm">Calibration Frequency (days)</label>
            <input
              name="frequency"
              value={form.frequency}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm">Last Calibration Date</label>
            <input
              type="date"
              name="lastCalibrationDate"
              value={form.lastCalibrationDate}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm">Calibrated By</label>
            <input
              name="calibratedBy"
              value={form.calibratedBy}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-slate-200 rounded"
          >
            Cancel
          </button>
        </div>

      </div>

    </div>
  )
}

export default CalibrationCreatePage
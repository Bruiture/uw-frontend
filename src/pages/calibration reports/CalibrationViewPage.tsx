import { useNavigate } from "react-router-dom"

const CalibrationViewPage = () => {

  const navigate = useNavigate()

  const customer = {
    name: "Janice AKAR (P) LTD",
    address: "33 REKWORKS ST, DARARA G.D",
    contact: "Korean Bond",
    phone: "042889193"
  }

  const reports = [
    {
      id: 1,
      make: "DANO",
      model: "A20",
      serial: "6520602",
      capacity: "2500kg x 5kg",
      location: "",
      comments: "",
      date: "2023-09-30"
    },
    {
      id: 2,
      make: "DAINO",
      model: "RWP",
      serial: "5010002",
      capacity: "2500kg x 5kg",
      location: "Orchard Road",
      comments: "",
      date: "2021-06-21"
    }
  ]

  return (
    <div className="space-y-4">

      <div className="flex justify-between items-center">

        {/* Left Title */}
        <div>
            <h2 className="text-lg font-semibold text-slate-700">
            Calibration Reports
            </h2>
            <div className="text-sm text-slate-500">
            Calibration Reports / View
            </div>
        </div>

        {/* Right Button */}
        <button
            onClick={() => navigate("/calibration-reports/create")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700 transition"
        >
            + Create Calibration Report
        </button>

        </div>

      {/* Header */}
      <div className="bg-white border rounded-xl shadow p-4">
        <div className="flex justify-between items-start">

          <div className="text-sm">
            <div className="font-bold text-lg">UNIVERSAL WEIGHING</div>
            <div>Hotline: (03) 9874 4000</div>
            <div>Tel: (03) 9874 7722</div>
            <div>Email: info@uw.com</div>
            <div>ABN: 65 123 844</div>
          </div>

          <div className="text-center font-semibold text-sm mt-4">
            CALIBRATION REPORT
          </div>

          <div className="text-sm text-right">
            <div><b>Customer Name:</b> {customer.name}</div>
            <div><b>Address:</b> {customer.address}</div>
            <div><b>Contact Name:</b> {customer.contact}</div>
            <div><b>Phone:</b> {customer.phone}</div>
          </div>

        </div>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-xl shadow overflow-x-auto">
        <table className="min-w-[1000px] w-full text-xs border border-slate-300">

          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Make</th>
              <th className="p-2 border">Model</th>
              <th className="p-2 border">Serial</th>
              <th className="p-2 border">Capacity</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Comments</th>
              <th className="p-2 border">Calib. Date</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50">

                <td className="p-2 border">{r.id}</td>
                <td className="p-2 border">{r.make}</td>
                <td className="p-2 border">{r.model}</td>
                <td className="p-2 border">{r.serial}</td>
                <td className="p-2 border">{r.capacity}</td>
                <td className="p-2 border">{r.location}</td>
                <td className="p-2 border">{r.comments}</td>
                <td className="p-2 border">{r.date}</td>

                <td className="p-2 border">
                  <div className="flex gap-2 flex-wrap">

                    <button
                      onClick={() => navigate(`/calibration-reports/view/${r.id}`)}
                      className="px-2 py-1 text-xs bg-blue-500 text-white rounded"
                    >
                      Show
                    </button>

                    <button className="px-2 py-1 text-xs bg-green-600 text-white rounded">
                      Print
                    </button>

                    <button className="px-2 py-1 text-xs bg-yellow-500 text-white rounded">
                      Edit
                    </button>

                    <button className="px-2 py-1 text-xs bg-red-500 text-white rounded">
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default CalibrationViewPage
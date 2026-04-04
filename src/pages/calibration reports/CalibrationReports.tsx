import { useNavigate } from "react-router-dom"
import { useState, useMemo } from "react"

interface Customer {
  id: number
  name: string
  contact: string
  address: string
  telephone: string
}

const CalibrationReports = () => {
  const navigate = useNavigate()

  // mock data (replace with API later)
  const customers: Customer[] = [
    { id: 1, name: "UW", contact: "Uditha", address: "Langwarrin LPO", telephone: "+94748514961" },
    { id: 2, name: "ABC Pvt Ltd", contact: "Kasun", address: "Colombo", telephone: "+94770000000" },
    { id: 3, name: "XYZ Traders", contact: "Nimal", address: "Gampaha", telephone: "+94771111111" },
    { id: 4, name: "ScaleTech", contact: "Amila", address: "Negombo", telephone: "+94772222222" },
    { id: 5, name: "WeighMaster", contact: "Saman", address: "Kandy", telephone: "+94773333333" }
  ]

  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 3

  // filter by name
  const filteredData = useMemo(() => {
    return customers.filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  // pagination logic
  const totalPages = Math.ceil(filteredData.length / pageSize)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return filteredData.slice(start, start + pageSize)
  }, [filteredData, currentPage])

  return (
    <div className="space-y-4">

      <h2 className="text-lg font-semibold text-slate-700">
        Select Customer to View Scales
      </h2>
      <div className="text-sm text-slate-500">Calibration Reports</div>

      {/* Search */}
      <div className="bg-white border rounded-xl shadow p-3">
        <input
          type="text"
          placeholder="Search by customer name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setCurrentPage(1)
          }}
          className="w-full md:w-80 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Table */}
      <div className="bg-white border rounded-xl shadow overflow-x-auto">
        <table className="min-w-[900px] w-full text-sm text-left border border-slate-300">

          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="p-3 border border-slate-300">Name</th>
              <th className="p-3 border border-slate-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-slate-500">
                  No records found
                </td>
              </tr>
            )}

            {paginatedData.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50">
                <td className="p-3 border border-slate-300">{c.name}</td>
                <td className="p-3 border border-slate-300">
                  <button
                    onClick={() => navigate(`/calibration-reports/${c.id}`)}
                    className="px-3 py-1 text-xs bg-blue-500 text-white rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm">

        <div className="text-slate-500">
          Page {currentPage} of {totalPages || 1}
        </div>

        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>

    </div>
  )
}

export default CalibrationReports
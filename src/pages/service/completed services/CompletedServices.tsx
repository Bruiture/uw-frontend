import { useNavigate } from "react-router-dom"

const CompletedServices = () => {
  const navigate = useNavigate()
  return (
    <div className="space-y-4">

      <h2 className="text-lg font-semibold text-slate-700">
        Completed Service Calls
      </h2>
      <div className="text-sm text-slate-500">Service Calls / Completed Service Calls</div>

      {/* Scroll container */}
      <div className="bg-white border rounded-xl shadow overflow-x-auto">

        <table className="min-w-[900px] w-full text-sm text-left border border-slate-300">

          {/* Header */}
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="p-3 border border-slate-300">Service No.</th>
              <th className="p-3 border border-slate-300">Date</th>
              <th className="p-3 border border-slate-300">Customer</th>
              <th className="p-3 border border-slate-300">Scale Make & Model</th>
              <th className="p-3 border border-slate-300">Customer Comments</th>
              <th className="p-3 border border-slate-300">Signed Off</th>
              <th className="p-3 border border-slate-300">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            <tr className="hover:bg-slate-50">

              <td className="p-3 border border-slate-300">14101</td>
              <td className="p-3 border border-slate-300">2026-03-30</td>
              <td className="p-3 border border-slate-300">Langwarrin LPO</td>
              <td className="p-3 border border-slate-300">Unallocated</td>
              <td className="p-3 border border-slate-300">
                QA service, calibration and calibration to scales for March 2026
              </td>
              <td className="p-3 border border-slate-300 text-red-600 font-medium">
                NO
              </td>

              <td className="p-3 border border-slate-300">
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/service-view/14101`)}
                    className="px-2 py-1 text-xs bg-blue-500 text-white rounded"
                  >
                    Show
                  </button>
                </div>
              </td>

            </tr>
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default CompletedServices
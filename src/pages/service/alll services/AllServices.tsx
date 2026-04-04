

const AllServices = () => {
  return (
    <div className="space-y-4">

      <h2 className="text-lg font-semibold text-slate-700">
        All Service Calls
      </h2>
      <div className="text-sm text-slate-500">Service Calls / All Service Calls</div>

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

            </tr>
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default AllServices
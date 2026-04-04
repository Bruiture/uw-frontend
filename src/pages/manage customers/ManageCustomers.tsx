import { useNavigate } from "react-router-dom"

const ManageCustomers = () => {
  const navigate = useNavigate()
  return (
    <div className="space-y-4">

      <h2 className="text-lg font-semibold text-slate-700">
        Manage Customers
      </h2>
      <div className="text-sm text-slate-500">Service Calls / Manage Customers</div>

      {/* Scroll container */}
      <div className="bg-white border rounded-xl shadow overflow-x-auto">

        <table className="min-w-[900px] w-full text-sm text-left border border-slate-300">

          {/* Header */}
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="p-3 border border-slate-300">Name</th>
              <th className="p-3 border border-slate-300">Contact</th>
              <th className="p-3 border border-slate-300">Address</th>
              <th className="p-3 border border-slate-300">Telephone</th>
              <th className="p-3 border border-slate-300">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            <tr className="hover:bg-slate-50">

              <td className="p-3 border border-slate-300">UW</td>
              <td className="p-3 border border-slate-300">Uditha</td>
              <td className="p-3 border border-slate-300">Langwarrin LPO</td>
              <td className="p-3 border border-slate-300">+94748514961</td>
              <td className="p-3 border border-slate-300">
                <div className="flex gap-2">
                 <button
                    onClick={() => navigate(`/customers/edit/14101`)}
                    className="px-2 py-1 text-xs bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button className="px-2 py-1 text-xs bg-red-500 text-white rounded">
                    Delete
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

export default ManageCustomers
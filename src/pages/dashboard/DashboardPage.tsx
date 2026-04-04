
const DashboardPage = () => {
  return (
    <div className="space-y-6">
      

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-slate-500">Total Orders</p>
          <h2 className="text-2xl font-semibold mt-2">1,245</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-slate-500">Customers</p>
          <h2 className="text-2xl font-semibold mt-2">320</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-slate-500">Revenue</p>
          <h2 className="text-2xl font-semibold mt-2">$12,430</h2>
        </div>

      </div>

    </div>
  )
}

export default DashboardPage
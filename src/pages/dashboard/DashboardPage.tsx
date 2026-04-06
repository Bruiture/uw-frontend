import { useNavigate } from "react-router-dom"

const DashboardPage = () => {

  const navigate = useNavigate()

  const quickSections = [
    {
      title: "Service Calls",
      links: [
        { title: "Create Service Calls", path: "/service/create" },
        { title: "All Services Calls", path: "/service/all" },
        { title: "Completed Services Calls", path: "/service/completed" },
        { title: "Unsigned Services Calls", path: "/service/unsigned" },
        { title: "Unreturned Scales Calls", path: "/service/unreturned" }
      ]
    },
    {
      title: "Calibration Reports",
      links: [
        { title: "View Calibration Reports", path: "/calibration-reports" },
         { title: "Create Calibration Report", path: "/calibration-reports/create" }
      ]
    },
    {
      title: "Customers",
      links: [
        { title: "Manage Customers", path: "/customers" }
      ]
    },
    {
      title: "Users",
      links: [
        { title: "Manage Users", path: "/users" }
      ]
    }
  ]

  return (
    <div className="space-y-6">

      {/* Stats */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-slate-500">Total Sr</p>
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

      </div> */}

      {/* Quick Sections */}
      <div className="space-y-5">

        {quickSections.map((section) => (
          <div key={section.title}>

            {/* Section Title */}
            <h3 className="text-md font-semibold text-slate-700 mb-2">
              {section.title}
            </h3>

            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">

              {section.links.map((link) => (
                <button
                  key={link.title}
                  onClick={() => navigate(link.path)}
                  className="bg-white border rounded-lg p-3 text-sm text-left shadow hover:bg-slate-50 transition"
                >
                  {link.title}
                </button>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default DashboardPage
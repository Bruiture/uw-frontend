import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "./Sidebar"

const AppLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)



  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
  }

  return (
    <div className="flex h-screen bg-slate-100">

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <header className="h-14 bg-white shadow flex items-center justify-between px-4 md:px-6 relative">

          {/* Mobile Menu */}
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          {/* Dynamic Title */}
          <h1 className="text-lg font-medium text-slate-700">
          
          </h1>

          {/* Admin Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-sm text-slate-600 hover:text-black"
            >
              Admin ⌄
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md z-50">
                <div className="px-4 py-2 hover:bg-slate-100 cursor-pointer">
                  View Profile
                </div>
                <div
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-slate-100 cursor-pointer text-red-500"
                >
                  Logout
                </div>
              </div>
            )}
          </div>

        </header>

        {/* Content */}
        <main className="p-4 md:p-6 flex-1 overflow-auto">
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default AppLayout
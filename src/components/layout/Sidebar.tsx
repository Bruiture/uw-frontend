import React, { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const menuItems = [
  { name: "Home", path: "/dashboard" },

  {
    name: "Service Calls",
    children: [
      { name: "Create a New Service", path: "/service/create" },
      { name: "View All Services", path: "/service/all" },
      { name: "Completed Services", path: "/service/completed" },
      { name: "Unsigned Services", path: "/service/unsigned" },
      { name: "Unreturned Scales", path: "/service/unreturned" }
    ]
  },

  { name: "Calibration Reports", path: "/calibration-reports" },

 /*  { name: "Repair Quotations", path: "/repair" },
  { name: "Weight Test Reports", path: "/weight-reports" },
  { name: "Reports", path: "/reports" },
  { name: "Upcoming Events", path: "/events" },
  { name: "Scales", path: "/scales" }, */
  { name: "Customers", path: "/customers" },
  { name: "Users", path: "/users" }
]

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {

  const location = useLocation()

  const [openMenu, setOpenMenu] = useState<string | null>(null)

  //  reference for dropdown
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  //  detect outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
      >
        <div className="p-4 text-lg font-semibold border-b flex justify-between items-center">
          Universal Weighing
          <button className="md:hidden" onClick={onClose}>✕</button>
        </div>

        <nav className="p-3 space-y-1 text-sm">
          {menuItems.map((item) => {

            //  Dropdown
            if (item.children) {
              const isOpen = openMenu === item.name

              return (
                <div key={item.name} ref={dropdownRef}>
                  <button
                    onClick={() =>
                      setOpenMenu(isOpen ? null : item.name)
                    }
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100"
                  >
                    {item.name}
                  </button>

                  {isOpen && (
                    <div className="ml-3 mt-1 space-y-1 border-l pl-3">
                      {item.children.map((sub) => {
                        const isActive = location.pathname === sub.path

                        return (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={onClose} //  keep dropdown open
                            className={`
                              block px-3 py-2 rounded-lg text-sm transition
                              ${isActive
                                ? "bg-blue-100 text-blue-600 font-medium"
                                : "hover:bg-slate-100 text-slate-700"}
                            `}
                          >
                            {sub.name}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }

            //  Normal menu
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.name}
                to={item.path!}
                onClick={() => {
                  onClose()
                  setOpenMenu(null) //  close dropdown if other menu clicked
                }}
                className={`
                  block px-3 py-2 rounded-lg transition
                  ${isActive
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "hover:bg-slate-100 text-slate-700"}
                `}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
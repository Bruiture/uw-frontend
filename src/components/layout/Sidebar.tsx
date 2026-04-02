import React from "react"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const menuItems = [
  "Home",
  "Service Calls",
  "Calibration Certificates",
  "Repair Quotations",
  "Weight Test Reports",
  "Reports",
  "Upcoming Events",
  "Scales",
  "Customers",
  "Users"
]

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
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
          {menuItems.map((item) => (
            <div
              key={item}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/login/LoginPage"
import DashboardPage from "./pages/dashboard/DashboardPage"

import ServiceViewPage from "./pages/service/service view page/ServiceViewPage"

// NEW pages (create these)
import ServiceCreatePage from "./pages/service/create service/CreateService"
import ServiceAllPage from "./pages/service/alll services/AllServices"
import ServiceCompletedPage from "./pages/service/completed services/CompletedServices"
import ServiceUnsignedPage from "./pages/service/unsigned services/UnsignedServices"
import ServiceUnreturnedPage from "./pages/service/unreturned services/UnreturnedServices"
import ServiceCustomersPage from "./pages/manage customers/ManageCustomers"
import EditCustomerPage from "./pages/manage customers/EditCustomerPage"
import CalibrationReports from "./pages/calibration reports/CalibrationReports"
import CalibrationViewPage from "./pages/calibration reports/CalibrationViewPage"
import CalibrationCertificateView from "./pages/calibration reports/CalibrationCertificateView"
import CalibrationCreatePage from "./pages/calibration reports/CalibrationCreatePage"

import AppLayout from "./components/layout/AppLayout"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Login />} />

        {/* Protected */}
        <Route element={<AppLayout />}>

          <Route path="/dashboard" element={<DashboardPage />} />

          {/* OLD */}
          <Route path="/service-view/:id" element={<ServiceViewPage />} />

          {/* NEW */}
          <Route path="/service/create" element={<ServiceCreatePage />} />
          <Route path="/service/all" element={<ServiceAllPage />} />
          <Route path="/service/completed" element={<ServiceCompletedPage />} />
          <Route path="/service/unsigned" element={<ServiceUnsignedPage />} />
          <Route path="/service/unreturned" element={<ServiceUnreturnedPage />} />
          <Route path="/customers" element={<ServiceCustomersPage />} />
          <Route path="/customers/edit/:id" element={<EditCustomerPage />} />

          <Route path="/calibration-reports" element={<CalibrationReports />} />
          <Route path="/calibration-reports/:id" element={<CalibrationViewPage />} />
          <Route path="/calibration-reports/view/:id" element={<CalibrationCertificateView />} />
          <Route path="/calibration-reports/create" element={<CalibrationCreatePage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
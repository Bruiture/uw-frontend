import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/login/LoginPage"

import DashboardPage from "./pages/dashboard/DashboardPage"


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
           <Login />
          }
        />

        <Route
          path="/dashboard"
          element={
            <DashboardPage />
          }
        />
      </Routes>

    </BrowserRouter>

  )
}

export default App
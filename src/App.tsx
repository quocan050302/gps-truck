import "antd/dist/reset.css";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import VehicleRoad from "./pages/VehicleRoad";
import MainLayout from "./components/MainLayout";
import { CurrentIndexProvider } from "./context/CurrentIndexProvider";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Home />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/vehicle-road"
          element={
            <ProtectedRoute>
              <CurrentIndexProvider>
                <MainLayout>
                  <VehicleRoad />
                </MainLayout>
              </CurrentIndexProvider>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

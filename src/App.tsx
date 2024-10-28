// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Home from "./pages/Home";
// import useAuth from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // const [count, setCount] = useState(0);
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

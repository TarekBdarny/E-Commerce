import { Route, Routes } from "react-router-dom";
import MainRegister from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { TestNav } from "./components/navbar/Navbar";
function App() {
  return (
    <div className="flex flex-col h-screen items-center ">
      {/* <Navbar /> */}
      <TestNav />
      <Routes>
        <Route path="/register" element={<MainRegister />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;

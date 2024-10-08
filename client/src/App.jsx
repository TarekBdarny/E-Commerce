import { Route, Routes } from "react-router-dom";
import MainRegister from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { TestNav } from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import MobileMenu from "./components/navbar/MobileMenu";
import Settings from "./pages/Settings";
import {
  Wishlist,
  Address,
  Profile,
  Location,
  BrowsingHistory,
  Payment,
  BusinessAccount,
} from "./components/settingsNavbar/export";
function App() {
  return (
    <div className="flex flex-col h-screen items-center  ">
      <TestNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<MobileMenu />} />
        <Route path="/checkout/cart" element={<Cart />} />
        <Route path="/register" element={<MainRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />}>
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="address" element={<Address />} />
          <Route path="profile" element={<Profile />} />
          <Route path="location" element={<Location />} />
          <Route path="history" element={<BrowsingHistory />} />
          <Route path="payment" element={<Payment />} />
          <Route path="business" element={<BusinessAccount />} />
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;

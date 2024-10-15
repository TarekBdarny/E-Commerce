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
  CreditCardsDisplay,
} from "./components/settingsNavbar/export";
import { useEffect } from "react";
import { useUserContext } from "./context/UserContext";
import useGetCreditCards from "./hooks/card/useGetCreditCards";

function App() {
  const { user } = useUserContext();

  return (
    <div className="">
      <TestNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<MobileMenu />} />
        <Route path="/checkout/cart" element={<Cart />} />
        <Route path="/register" element={<MainRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main/create/card" element={<Payment />} />
        <Route path="/settings" element={<Settings />}>
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="address" element={<Address />} />
          <Route path="profile" element={<Profile />} />
          <Route path="location" element={<Location />} />
          <Route path="history" element={<BrowsingHistory />} />
          <Route path="payment" element={<CreditCardsDisplay />} />
          <Route path="business" element={<BusinessAccount />} />
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;

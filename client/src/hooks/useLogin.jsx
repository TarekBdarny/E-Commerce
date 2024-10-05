import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { toast } from "react-hot-toast";

const useLogin = (userData) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const login = async () => {
    const { username, password } = userData;
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3001/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        setLoading(false);
        return;
      } else toast.success("Logged in successfully");
      setUser(data);
      window.localStorage.setItem("user", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

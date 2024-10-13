import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";
function useRegister(userData) {
  const [loading, setLoading] = useState(false);
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const register = async () => {
    const {
      firstName,
      lastName,
      username,
      email,
      profilePic,
      password,
      confirmPassword,
      gender,
      age,
    } = userData;

    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3001/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          profilePic,
          username,
          confirmPassword,
          password,
          gender,
          age,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        return;
      } else toast.success("Registered successfully");

      setUser(data);
      window.localStorage.setItem("user", JSON.stringify(data));
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return { loading, register };
}

export default useRegister;

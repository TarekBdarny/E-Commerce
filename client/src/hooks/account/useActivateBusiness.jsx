import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";
const useActivateBusiness = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUserContext();
  const activateBusiness = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3001/api/business/activate/${user?._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        return;
      } else {
        toast.success(data.message);
        setUser(data.data);
        window.localStorage.setItem("user", JSON.stringify(data.data));
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return { loading, activateBusiness };
};

export default useActivateBusiness;

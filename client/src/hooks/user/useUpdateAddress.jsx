import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";
function useUpdateAddress({ data }) {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUserContext();
  const updateAddress = async () => {
    console.log(data);
    setLoading(true);
    try {
      setLoading(false);
      const res = await fetch(
        `http://localhost:3001/api/user/update/${user?.username}/address`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      const updatedData = await res.json();
      if (!res.ok) {
        toast.error(updatedData.message);
        return;
      }
      toast.success(updatedData.message);
      window.localStorage.setItem("user", JSON.stringify(updatedData.data));
      setUser(updatedData.data);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { updateAddress, loading };
}

export default useUpdateAddress;

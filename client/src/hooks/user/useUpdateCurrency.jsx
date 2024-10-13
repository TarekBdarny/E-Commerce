import React from "react";
import { useUserContext } from "../../context/UserContext";
import toast from "react-hot-toast";

function useUpdateCurrency({ currency }) {
  const { user, setUser } = useUserContext();
  const updateCurrency = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/user/update-currency`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ currency, id: user?._id }),
        },
      );
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message);
        return;
      }

      toast.success("Country updated successfully");
      window.localStorage.setItem("user", JSON.stringify(data.data));
      setUser(data.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { updateCurrency };
}
export default useUpdateCurrency;

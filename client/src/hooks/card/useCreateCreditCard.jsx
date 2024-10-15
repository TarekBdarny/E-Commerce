import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { toast } from "react-hot-toast";

function useCreateCreditCard({ card }) {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUserContext();
  const createCreditCard = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3001/api/card/create/${user?._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(card),
        },
      );

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        return;
      }
      toast.success(data.message);
      // setCards([...cards, data.data]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return { createCreditCard, loading };
}

export default useCreateCreditCard;

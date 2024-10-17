import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { toast } from "react-hot-toast";
import { useCreditCardsContext } from "../../context/CreditCardsContext";
const useActivateCard = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useUserContext();
  const { setCards } = useCreditCardsContext();
  const activateCard = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3001/api/card/activate/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: user?._id }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      } else {
        toast.success(data.message);
        setCards(data.data);
        console.log(data.data);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return { loading, activateCard };
};

export default useActivateCard;

import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { useCreditCardsContext } from "../../context/CreditCardsContext";
import { toast } from "react-hot-toast";

const useGetCreditCards = () => {
  const { user } = useUserContext();
  const { setCards } = useCreditCardsContext();
  const [loading, setLoading] = useState(false);
  const getCreditCards = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3001/api/card/get/cards/${user?._id}`,
      );

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        return;
      }
      setCards(data.data);
      console.log(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { getCreditCards, loading };
};

export default useGetCreditCards;

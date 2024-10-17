import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { toast } from "react-hot-toast";

const useValidateCardCvc = ({ cvc, id }) => {
  const [loading, setLoading] = useState(false);
  const validateCardCvc = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3001/api/card/validate/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cvc }),
      });
      const data = await res.json();

      if (!data.data) {
        setLoading(false);
        toast.error(data.message);
      } else {
        setLoading(false);
      }

      return data.data;
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return { loading, validateCardCvc };
};

export default useValidateCardCvc;

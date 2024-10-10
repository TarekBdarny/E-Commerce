import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import toast from "react-hot-toast";

function useUpdateProfile({ firstName, lastName, username, profilePic }) {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUserContext();
  const updateProfile = async () => {
    try {
      console.log(lastName);
      setLoading(true);
      const res = await fetch(
        `http://localhost:3001/api/user/update/profile/:${user._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            username,
            profilePic,
            id: user?._id,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        console.log(data.message);
        return;
      }
      toast.success(data.message);
      window.localStorage.setItem("user", JSON.stringify(data.data));
      setUser(data.data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return { updateProfile, loading };
}

export default useUpdateProfile;

import { useUserContext } from "../context/UserContext.jsx";
import { toast } from "react-hot-toast";
function useUpdateCountry({ country, flag }) {
  const { user, setUser } = useUserContext();
  const updateCountry = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/user/update-country`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ country, id: user?._id, flag }),
        }
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

  return { updateCountry };
}
export default useUpdateCountry;

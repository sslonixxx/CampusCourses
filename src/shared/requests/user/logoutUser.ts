import axios from "axios";
import { instance } from "../instance";

export const logoutUser = async () => {
  try {
    const response = await instance.post("logout");
    console.log("Success:", response.data);
    localStorage.clear();
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

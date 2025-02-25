import axios from "axios";
import { instance } from "../instance";

export const deleteGroup = async (id: number) => {
  try {
    const response = await instance.delete(`groups/${id}`);
    console.log("Success:", response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

import axios from "axios";
import { instance } from "../instance";

export const getTeachersList = async () => {
  try {
    const response = await instance.get(`users`);
    console.log("Success:", response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

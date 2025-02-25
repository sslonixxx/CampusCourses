import axios from "axios";
import { instance } from "../instance";

export const createGroup = async (group: { name: string }) => {
  try {
    const response = await instance.post("groups", group);
    console.log("Success:", response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

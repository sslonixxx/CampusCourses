import axios from "axios";
import { instance } from "../instance";
import { CreateCourse } from "../../../@types/CreateCourse";

export const createCourse = async (id: string, data: CreateCourse) => {
  try {
    const response = await instance.post(`groups/${id}`, data);
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

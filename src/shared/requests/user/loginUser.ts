import axios from "axios";
import { LoginForm } from "../../../pages/login/Login";
import { instance } from "../instance";

type NewType = LoginForm;

export const loginUser = async (data: NewType) => {
  try {
    const response = await instance.post("login", data);
    console.log("Success:", response.data);
    const token = response.data.token;
    localStorage.setItem("token", token);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

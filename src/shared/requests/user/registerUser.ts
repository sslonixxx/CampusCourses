import axios from "axios";
import { RegisterForm } from "../../../pages/register/Register";
import { instance } from "../instance";

export const RegisterUser = async (data: RegisterForm) => {
  try {
    const response = await instance.post("registration", data);
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

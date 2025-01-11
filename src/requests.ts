import axios from "axios";
import { LoginForm } from "./components/Login";
import { RegisterForm } from "./components/Register";

export const loginUser = async (data: LoginForm) => {
  try {
    const response = await axios.post(
      "https://camp-courses.api.kreosoft.space/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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

export const RegisterUser = async (data: RegisterForm) => {
  try {
    const response = await axios.post(
      "https://camp-courses.api.kreosoft.space/registration",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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

const token = localStorage.getItem("token");

export const GetProfile = async () => {
  try {
    const response = await axios.get(
      "https://camp-courses.api.kreosoft.space/profile",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
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

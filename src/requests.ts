import axios from "axios";
import { LoginForm } from "./components/Login";
import { RegisterForm } from "./components/Register";
import { ProfileForm } from "./components/Profile";
import Group from "./components/groups/Group";

const instance = axios.create({
  baseURL: "https://camp-courses.api.kreosoft.space/",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const loginUser = async (data: LoginForm) => {
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

export const GetProfile = async () => {
  try {
    const response = await instance.get("profile");
    console.log("Success get:", response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

export const PutProfile = async (data: ProfileForm) => {
  try {
    const response = await instance.put("profile", data);
    console.log("Success put:", response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};
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

export const getGroupList = async () => {
  try {
    const response = await instance.get("groups");
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

export const getUserRole = async () => {
  try {
    const response = await instance.get("roles");
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
export const deleteCampusGroup = async (id: number) => {
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
export const putCampusGroup = async (group: Group) => {
  try {
    const response = await instance.put(`groups/${group.id}`, {
      name: group.name,
    });
    console.log("Success:", response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      console.log(group.id);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

import axios from "axios";
import { ProfileForm } from "../../../pages/profile/Profile";
import { instance } from "../instance";

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

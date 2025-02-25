import axios from "axios";
import Group from "../../../@types/Group";
import { instance } from "../instance";

export const putGroup = async (group: Group) => {
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

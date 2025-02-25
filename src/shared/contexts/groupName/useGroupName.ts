import { useContext } from "react";
import { GroupContext } from "./GroupContext";

export const useGroupName = () => {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error("fail with group");
  }
  return context;
};

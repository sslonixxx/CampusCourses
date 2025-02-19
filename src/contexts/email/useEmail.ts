import { useContext } from "react";
import { EmailContext } from "./EmailContext";

export const useEmail = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmail must be used within an AuthProvider");
  }
  return context;
};

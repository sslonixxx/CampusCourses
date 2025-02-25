import { createContext } from "react";

interface EmailContextType {
  email: string;
  setEmail: (email: string) => void;
}

export const EmailContext = createContext<EmailContextType | null>(null);

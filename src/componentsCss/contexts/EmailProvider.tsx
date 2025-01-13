import React, { createContext, useContext, useState } from "react";

interface EmailContextType {
  email: string;
  setEmail: (email: string) => void;
}

const EmailContext = createContext<EmailContextType | null>(null);

export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [email, setEmail] = useState("");

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmail must be used within an AuthProvider");
  }
  return context;
};

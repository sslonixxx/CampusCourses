import { useState } from "react";
import { GroupContext } from "./GroupContext";

export const GroupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [group, setGroup] = useState("");

  return (
    <GroupContext.Provider value={{ group, setGroup }}>
      {children}
    </GroupContext.Provider>
  );
};

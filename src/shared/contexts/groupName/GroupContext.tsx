import { createContext } from "react";

interface GroupContextType {
  group: string;
  setGroup: (group: string) => void;
}
export const GroupContext = createContext<GroupContextType | null>(null);

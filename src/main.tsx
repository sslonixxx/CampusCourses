import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { EmailProvider } from "./contexts/email/EmailProvider.tsx";
import { GroupProvider } from "./contexts/groupName/GroupProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <EmailProvider>
        <GroupProvider>
          <App />
        </GroupProvider>
      </EmailProvider>
    </BrowserRouter>
  </StrictMode>
);

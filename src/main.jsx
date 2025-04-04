import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/authContext/authContext.jsx";
import { NavigationProvider } from "./contexts/navContext/navContext.jsx";
import { ChatProvider } from "./contexts/chatContext/chatContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext.jsx";
import { StatusProvider } from "./contexts/statusContext/statusContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <NavigationProvider>
        <StatusProvider>
          <ChatProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </ChatProvider>
        </StatusProvider>
      </NavigationProvider>
    </ThemeProvider>
    ;
  </StrictMode>
);

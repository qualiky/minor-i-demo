import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css' // Remove or comment out
import { UserProvider } from "./contexts/UserContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </UserProvider>,
);

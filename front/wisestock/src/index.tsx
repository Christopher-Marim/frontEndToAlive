import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./globalStyles";
import { StrockProvider } from "./contexts/state";
import App from "./screens/home/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StrockProvider>
      <App />
    </StrockProvider>
    <GlobalStyle />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./globalStyles";
import { ReduxProvider } from "./hooks/state";
import App from "./screens/home/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
    <GlobalStyle />
  </React.StrictMode>
);

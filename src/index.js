import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextCrypto from "./context/ContextCrypto";

ReactDOM.render(
  <React.StrictMode>
    <ContextCrypto>
      <App />
    </ContextCrypto>
  </React.StrictMode>,
  document.getElementById("root")
);

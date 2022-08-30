import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TodosContextProvider from "./store/todos-context";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement as Element);

root.render(
  <React.StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </React.StrictMode>
);

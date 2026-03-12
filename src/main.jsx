import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import "./styles/fonts.scss";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
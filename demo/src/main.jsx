import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Form from "./Form.jsx";
import Timer from './lab3/useEffect.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Timer />
    {/* <App /> */}
    {/* <Form /> */}
  </StrictMode>
);

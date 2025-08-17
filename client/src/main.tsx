import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// O Vite injeta import.meta.env.BASE_URL a partir do "base" do vite.config.
// Em produção, isso vira "/metodologoinfinity/".
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>
);

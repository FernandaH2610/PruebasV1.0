import React from "react";
import ReactDOMClient from "react-dom/client";
import { FramesListos } from "./screens/FramesListos";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<FramesListos />);

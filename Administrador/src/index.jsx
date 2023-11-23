import React from "react";
import ReactDOMClient from "react-dom/client";
import { FrameDesktop } from "./screens/FrameDesktop";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<FrameDesktop />);

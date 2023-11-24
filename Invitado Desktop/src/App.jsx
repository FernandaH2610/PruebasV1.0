import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrameDesktopScreen } from "./screens/FrameDesktopScreen";
import { FrameDesktop } from "./screens/FrameDesktop";
import { DivWrapper } from "./screens/DivWrapper";
import { Screen3 } from "./screens/Screen3";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";
import { Screen8 } from "./screens/Screen8";
import { CuentaScreen } from "./screens/CuentaScreen";
import { Screen10 } from "./screens/Screen10";
import { DesplegablesScreen } from "./screens/DesplegablesScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <FrameDesktopScreen />,
  },
  {
    path: "/frame-2-desktopu47tablets-recientes-invitado",
    element: <FrameDesktopScreen />,
  },
  {
    path: "/frame-6-desktopu47tablets-resenas-usuarios",
    element: <FrameDesktop />,
  },
  {
    path: "/frame-1-desktopu47tablets-home-invitado",
    element: <DivWrapper />,
  },
  {
    path: "/frame-5-desktopu47tablets-login-invitado",
    element: <Screen3 />,
  },
  {
    path: "/frame-5-desktopu47tablets-favoritos-usuarios",
    element: <Screen4 />,
  },
  {
    path: "/frame-8-desktopu47tablets-cambio-de-contra-invitado",
    element: <Screen5 />,
  },
  {
    path: "/frame-6-desktop-u47tablets-sing-up-invitado",
    element: <Screen6 />,
  },
  {
    path: "/frame-7-desktopu47tablets-post-invitado",
    element: <Screen7 />,
  },
  {
    path: "/frame-4-desktopu47tablets-contacto-invitado",
    element: <Screen8 />,
  },
  {
    path: "/cuenta",
    element: <CuentaScreen />,
  },
  {
    path: "/frame-3-desktopu47tablets-blog-invitado",
    element: <Screen10 />,
  },
  {
    path: "/desplegables",
    element: <DesplegablesScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DivWrapper } from "./screens/DivWrapper";
import { FrameDesktop } from "./screens/FrameDesktop";
import { FrameDesktopScreen } from "./screens/FrameDesktopScreen";
import { Screen3 } from "./screens/Screen3";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";
import { Screen8 } from "./screens/Screen8";
import { Screen9 } from "./screens/Screen9";
import { Screen10 } from "./screens/Screen10";
import { Screen11 } from "./screens/Screen11";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <DivWrapper />,
  },
  {
    path: "/frame-1-desktopu47tablets-home-usuario",
    element: <DivWrapper />,
  },
  {
    path: "/frame-2-desktopu47tablets-recientes-usuario",
    element: <FrameDesktop />,
  },
  {
    path: "/frame-6-desktopu47tablets-resenas-usuarios",
    element: <FrameDesktopScreen />,
  },
  {
    path: "/frame-5-desktopu47tablets-favoritos-usuarios",
    element: <Screen3 />,
  },
  {
    path: "/frame-2-desktopu47tablets-recientes-invitado",
    element: <Screen4 />,
  },
  {
    path: "/frame-1-desktopu47tablets-home-invitado",
    element: <Screen5 />,
  },
  {
    path: "/frame-5-desktopu47tablets-login-invitado",
    element: <Screen6 />,
  },
  {
    path: "/frame-8-desktopu47tablets-cambio-de-contra-invitado",
    element: <Screen7 />,
  },
  {
    path: "/frame-6-desktop-u47tablets-sing-up-invitado",
    element: <Screen8 />,
  },
  {
    path: "/frame-7-desktopu47tablets-post-invitado",
    element: <Screen9 />,
  },
  {
    path: "/frame-4-desktopu47tablets-contacto-invitado",
    element: <Screen10 />,
  },
  {
    path: "/frame-3-desktopu47tablets-blog-invitado",
    element: <Screen11 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

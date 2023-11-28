import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DivWrapper } from "./screens/DivWrapper";
import { Cuenta } from "./screens/Cuenta";
import { FrameDesktop } from "./screens/FrameDesktop";
import { FrameDesktopScreen } from "./screens/FrameDesktopScreen";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";
import { Screen8 } from "./screens/Screen8";
import { Screen9 } from "./screens/Screen9";
import { Screen10 } from "./screens/Screen10";
import { Screen11 } from "./screens/Screen11";
import { Screen12 } from "./screens/Screen12";
import { Screen13 } from "./screens/Screen13";
import { Screen14 } from "./screens/Screen14";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <DivWrapper />,
  },
  {
    path: "/frame-1-desktopu47tablets-home-ong",
    element: <DivWrapper />,
  },
  {
    path: "/cuenta",
    element: <Cuenta />,
  },
  {
    path: "/frame-14-desktopu47tablets-agendau47recientes-ong",
    element: <FrameDesktop />,
  },
  {
    path: "/frame-13-desktopu47tablets-informe-ong",
    element: <FrameDesktopScreen />,
  },
  {
    path: "/frame-12-desktopu47tablets-resena-ong",
    element: <Screen4 />,
  },
  {
    path: "/frame-11-desktopu47tablets-agendau47agendadas-ong",
    element: <Screen5 />,
  },
  {
    path: "/frame-10-desktopu47tablets-agendau47completados-ong",
    element: <Screen6 />,
  },
  {
    path: "/frame-2-desktopu47tablets-recientes-ong",
    element: <Screen7 />,
  },
  {
    path: "/frame-9-desktopu47tablets-agendau47pendientes-ong",
    element: <Screen8 />,
  },
  {
    path: "/frame-8-desktopu47tablets-agendau47canceladas-ong",
    element: <Screen9 />,
  },
  {
    path: "/frame-7-desktopu47tablets-post-ong",
    element: <Screen10 />,
  },
  {
    path: "/frame-6-desktopu47tablets-resenas-ong",
    element: <Screen11 />,
  },
  {
    path: "/frame-5-desktopu47tablets-favoritos-ong",
    element: <Screen12 />,
  },
  {
    path: "/frame-3-desktopu47tablets-blog-ong",
    element: <Screen13 />,
  },
  {
    path: "/frame-4-desktopu47tablets-contacto-ong",
    element: <Screen14 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

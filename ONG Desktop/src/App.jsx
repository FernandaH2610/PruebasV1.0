import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Screen8 } from "./screens/Screen8";
import { Cuenta } from "./screens/Cuenta";
import { FrameDesktop } from "./screens/FrameDesktop";
import { Desplegables } from "./screens/Desplegables";
import { FrameDesktopScreen } from "./screens/FrameDesktopScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { DesplegablesScreen } from "./screens/DesplegablesScreen";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";
import { Screen9 } from "./screens/Screen9";
import { Screen10 } from "./screens/Screen10";
import { Screen11 } from "./screens/Screen11";
import { Screen12 } from "./screens/Screen12";
import { Screen13 } from "./screens/Screen13";
import { Screen14 } from "./screens/Screen14";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Screen8 />,
  },
  {
    path: "/frame-1-desktopu47tablets-home-ong",
    element: <Screen8 />,
  },
  {
    path: "/cuenta",
    element: <Cuenta />,
  },
  {
    path: "/frame-7-desktopu47tablets-post-ong",
    element: <FrameDesktop />,
  },
  {
    path: "/desplegables-1",
    element: <Desplegables />,
  },
  {
    path: "/frame-5-desktopu47tablets-favoritos-ong",
    element: <FrameDesktopScreen />,
  },
  {
    path: "/frame-6-desktopu47tablets-resenas-ong",
    element: <DivWrapper />,
  },
  {
    path: "/desplegables-2",
    element: <DesplegablesScreen />,
  },
  {
    path: "/frame-2-desktopu47tablets-recientes-ong",
    element: <Screen6 />,
  },
  {
    path: "/frame-3-desktopu47tablets-blog-ong",
    element: <Screen7 />,
  },
  {
    path: "/frame-12-desktopu47tablets-resena-ong",
    element: <Screen9 />,
  },
  {
    path: "/frame-13-desktopu47tablets-informe-ong",
    element: <Screen10 />,
  },
  {
    path: "/frame-11-desktopu47tablets-agendau47agendadas-ong",
    element: <Screen11 />,
  },
  {
    path: "/frame-10-desktopu47tablets-agendau47completados-ong",
    element: <Screen12 />,
  },
  {
    path: "/frame-14-desktopu47tablets-agendau47recientes-ong",
    element: <Screen13 />,
  },
  {
    path: "/frame-9-desktopu47tablets-agendau47pendientes-ong",
    element: <Screen14 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrameMobiles } from "./screens/FrameMobiles";
import { FrameMobileHome } from "./screens/FrameMobileHome";
import { FrameMoile } from "./screens/FrameMoile";
import { FrameMobilesScreen } from "./screens/FrameMobilesScreen";
import { FrameMobilesPost } from "./screens/FrameMobilesPost";
import { DivWrapper } from "./screens/DivWrapper";
import { Screen6 } from "./screens/Screen6";
import { FrameMobileBlog } from "./screens/FrameMobileBlog";
import { Screen8 } from "./screens/Screen8";
import { FrameMobile } from "./screens/FrameMobile";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <FrameMobiles />,
  },
  {
    path: "/frame-10-mobiles-agendau47completadas-ong",
    element: <FrameMobiles />,
  },
  {
    path: "/frame-1-mobile-home-ong",
    element: <FrameMobileHome />,
  },
  {
    path: "/frame-2-moile-recientes-ong",
    element: <FrameMoile />,
  },
  {
    path: "/frame-9-mobiles-agendau47canceladas-ong",
    element: <FrameMobilesScreen />,
  },
  {
    path: "/frame-7-mobiles-post-ong",
    element: <FrameMobilesPost />,
  },
  {
    path: "/frame-8-mobiles-agendau47pendientes-ong",
    element: <DivWrapper />,
  },
  {
    path: "/frame-6-mobiles-resenas-ong",
    element: <Screen6 />,
  },
  {
    path: "/frame-3-mobile-blog-ong",
    element: <FrameMobileBlog />,
  },
  {
    path: "/frame-5-mobiles-favoritos-ong",
    element: <Screen8 />,
  },
  {
    path: "/frame-4-mobile-contacto-ong",
    element: <FrameMobile />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

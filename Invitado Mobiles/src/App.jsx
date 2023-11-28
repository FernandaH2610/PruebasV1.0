import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrameMobileLog } from "./screens/FrameMobileLog";
import { CuentaScreen } from "./screens/CuentaScreen";
import { FrameMobilesPost } from "./screens/FrameMobilesPost";
import { FrameMobile } from "./screens/FrameMobile";
import { DesplegablesScreen } from "./screens/DesplegablesScreen";
import { FrameMobileBlog } from "./screens/FrameMobileBlog";
import { FrameMobileScreen } from "./screens/FrameMobileScreen";
import { FrameMobileSing } from "./screens/FrameMobileSing";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <FrameMobileLog />,
  },
  {
    path: "/frame-5-mobile-log-in-invitados",
    element: <FrameMobileLog />,
  },
  {
    path: "/cuenta",
    element: <CuentaScreen />,
  },
  {
    path: "/frame-8-mobiles-post-invitados",
    element: <FrameMobilesPost />,
  },
  {
    path: "/frame-4-mobile-contacto-invitados",
    element: <FrameMobile />,
  },
  {
    path: "/desplegables",
    element: <DesplegablesScreen />,
  },
  {
    path: "/frame-3-mobile-blog-invitados",
    element: <FrameMobileBlog />,
  },
  {
    path: "/frame-6-mobile-cambiar-contra-invitados",
    element: <FrameMobileScreen />,
  },
  {
    path: "/frame-7-mobile-sing-up-invitados",
    element: <FrameMobileSing />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

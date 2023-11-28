import { Desplegables } from ".";

export default {
  title: "Components/Desplegables",
  component: Desplegables,
  argTypes: {
    property1: {
      options: ["agenda-hover", "notificaciones-hove", "contacto-hover", "agenda", "notificaciones", "contacto"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "agenda-hover",
    frame: "/img/frame.svg",
    img: "/img/frame-1.svg",
    bxX: "/img/bx-x-1.svg",
  },
};

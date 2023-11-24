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
    className: {},
    rectangleClassName: {},
    desplegableClassName: {},
    homeClassName: {},
    bxUploadClassName: {},
    frame: "/img/frame-27.svg",
    divClassName: {},
    meGustaClassName: {},
    bxMessageSquareClassName: {},
    img: "/img/frame-28.svg",
    divClassNameOverride: {},
    bxXClassName: {},
    bxX: "/img/bx-x-1-2.svg",
  },
};

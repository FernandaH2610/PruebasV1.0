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
  },
};

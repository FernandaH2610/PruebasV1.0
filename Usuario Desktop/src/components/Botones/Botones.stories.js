import { Botones } from ".";

export default {
  title: "Components/Botones",
  component: Botones,
  argTypes: {
    property1: {
      options: ["default-2", "disable", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default-2",
    className: {},
    divClassName: {},
    text: "Boton",
  },
};

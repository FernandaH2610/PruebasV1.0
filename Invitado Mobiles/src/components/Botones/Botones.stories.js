import { Botones } from ".";

export default {
  title: "Components/Botones",
  component: Botones,
  argTypes: {
    property1: {
      options: ["default-2", "disable", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default-2",
    className: {},
    text: "Boton",
    divClassName: {},
  },
};

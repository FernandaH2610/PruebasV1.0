import { Inscripcion } from ".";

export default {
  title: "Components/Inscripcion",
  component: Inscripcion,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    ellipse: "/img/ellipse-12-2.svg",
  },
};

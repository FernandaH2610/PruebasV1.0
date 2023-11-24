import { ReseA } from ".";

export default {
  title: "Components/ReseA",
  component: ReseA,
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
    ellipseClassName: {},
    ellipse: "/img/ellipse-11.png",
    divClassName: {},
    groupClassName: {},
    divClassNameOverride: {},
  },
};

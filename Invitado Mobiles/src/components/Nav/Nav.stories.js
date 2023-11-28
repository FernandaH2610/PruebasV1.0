import { Nav } from ".";

export default {
  title: "Components/Nav",
  component: Nav,
  argTypes: {
    property1: {
      options: ["variant-4", "variant-3", "default-desktop", "default-mobiles"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-4",
    className: {},
    frameClassName: {},
    frame: "/img/frame-8.svg",
    bxMessageSquare: "/img/bx-message-square-dots-2.svg",
    hasBxUserCircle: true,
  },
};

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
    hasBxMessageSquare: true,
    hasFrame: true,
    hasImg: true,
    bxUserCircleClassName: {},
    bxUserCircle: "/img/bx-user-circle-2-1.svg",
    hasDiv: true,
  },
};

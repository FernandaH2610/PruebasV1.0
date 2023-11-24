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
    bxMessageSquareClassName: {},
    bxMessageSquare: "/img/bx-message-square-dots-2.svg",
    hasFrame: true,
    hasImg: true,
    hasBxUserCircle: true,
    frameClassNameOverride: {},
    rectangleClassName: {},
    imgClassName: {},
    frame: "/img/frame-5.svg",
    rectangle: "/img/rectangle-9.svg",
    divClassName: {},
    rectangleClassNameOverride: {},
  },
};

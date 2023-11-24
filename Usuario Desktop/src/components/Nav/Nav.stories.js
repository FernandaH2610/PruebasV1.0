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
    frameClassNameOverride: {},
    frame: "/img/frame-12.svg",
    imgClassName: {},
    img: "/img/frame-4.svg",
    bxUserCircleClassName: {},
    bxUserCircle: "/img/bx-user-circle-2-1.svg",
    divClassName: {},
    rectangleClassName: {},
    imgClassNameOverride: {},
    frame1: "/img/frame-5.svg",
    rectangle: "/img/rectangle-9.svg",
    divClassNameOverride: {},
    hasFrame: true,
    hasImg: true,
    hasBxUserCircle: true,
    rectangleClassNameOverride: {},
  },
};

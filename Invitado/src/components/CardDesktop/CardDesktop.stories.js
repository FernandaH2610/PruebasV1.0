import { CardDesktop } from ".";

export default {
  title: "Components/CardDesktop",
  component: CardDesktop,
  argTypes: {
    property1: {
      options: ["click", "disable", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "click",
    className: {},
    rectangleClassName: {},
    rectangle: "/img/rectangle-5.png",
    frameClassName: {},
    divClassName: {},
    divClassNameOverride: {},
    iconClassName: {},
    overlapGroupClassName: {},
    rectangleClassNameOverride: {},
    rectangleClassName1: {},
  },
};

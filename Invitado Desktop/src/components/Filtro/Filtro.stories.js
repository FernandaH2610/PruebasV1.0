import { Filtro } from ".";

export default {
  title: "Components/Filtro",
  component: Filtro,
  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    divClassName: {},
    desdeClassName: {},
    frameClassName: {},
    frame: "/img/frame-1.svg",
    hastaClassName: {},
    frameClassNameOverride: {},
    img: "/img/frame-3.svg",
  },
};

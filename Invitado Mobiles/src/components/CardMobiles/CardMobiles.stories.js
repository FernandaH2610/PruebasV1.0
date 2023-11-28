import { CardMobiles } from ".";

export default {
  title: "Components/CardMobiles",
  component: CardMobiles,
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
  },
};

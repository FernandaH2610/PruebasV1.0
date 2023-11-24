import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,
  argTypes: {
    property1: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
  },
};

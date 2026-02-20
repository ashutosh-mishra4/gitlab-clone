import PositionedTooltips from "./Tooltip";

export default {
  title: "Atoms/Tooltip",
  component: PositionedTooltips,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const TopDefault = {
  args: {
    title: "some tooltip text",
    message: "Tooltip",
    position: "top",
    variant: "outlined",
  },
};

export const Right = {
  args: {
    title: "some tooltip text",
    message: "Tooltip",
    position: "right",
    variant: "outlined",
  },
};

export const Bottom = {
  args: {
    title: "some tooltip text",
    message: "Tooltip",
    position: "bottom",
    variant: "outlined",
  },
};

export const Left = {
  args: {
    title: "some tooltip text",
    message: "Tooltip",
    position: "left",
    variant: "outlined",
  },
};

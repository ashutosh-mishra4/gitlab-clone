import React from "react";
import CustomAlert from "./Alert";

export default {
  title: "Atoms/Alert",
  component: CustomAlert,
  argTypes: {
    severity: {
      control: {
        type: "select",
        options: ["error", "warning", "info", "success"],
      },
    },
    title: { control: "text" },
    message: { control: "text" },
    onClose: { action: "closed" },
    icon: { control: "none" },
    variant: {
      control: { type: "select", options: ["filled", "outlined", "standard"] },
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <CustomAlert {...args} />;

export const Default = Template.bind({});
Default.args = {
  severity: "info",
  message: "Lorem ipsum dolor sit amet",
};

export const TitledWarning = Template.bind({});
TitledWarning.args = {
  severity: "warning",
  title: "A warning",
  message: "Lorem ipsum dolor sit amet",
};

export const UndismissibleDangerWithActions = Template.bind({});
UndismissibleDangerWithActions.args = {
  severity: "error",
  message: "Lorem ipsum dolor sit amet",
  actions: [
    {
      label: "Primary action",
      color: "primary",
      onClick: () => alert("Primary action clicked"),
    },
    {
      label: "Secondary action",
      color: "secondary",
      onClick: () => alert("Secondary action clicked"),
    },
  ],
};

export const CustomActions = Template.bind({});
CustomActions.args = {
  severity: "info",
  message: "Lorem ipsum dolor sit amet",
  actions: [
    {
      label: "Custom action",
      color: "primary",
      onClick: () => alert("Custom action clicked"),
    },
  ],
};

export const TextLinks = Template.bind({});
TextLinks.args = {
  severity: "info",
  message: 'Lorem ipsum dolor sit <a href="#">text link</a> amet',
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  severity: "info",
  message: "Lorem ipsum dolor sit amet",
  icon: false,
};

export const Variants = Template.bind({});
Variants.args = {
  severity: "info",
  message: "Lorem ipsum dolor sit amet",
  variant: "outlined",
};

export const Sticky = Template.bind({});
Sticky.args = {
  severity: "info",
  message: "Lorem ipsum dolor sit amet",
  actions: [
    {
      label: "Primary",
      color: "primary",
      onClick: () => alert("Primary action clicked"),
    },
  ],
};

export const IncreasedSpacing = Template.bind({});
IncreasedSpacing.args = {
  severity: "info",
  message: 'Lorem ipsum dolor sit <a href="#">text link</a> amet',
  variant: "filled",
};

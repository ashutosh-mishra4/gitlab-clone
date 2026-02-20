import CustomAvatar from "./avatar";

export default {
  title: "Atoms/Avatar",
  component: CustomAvatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: [16, 24, 32, 48, 64, 96] },
    tooltip: { control: "text" },
    position: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    variant: { control: "select", options: ["circular", "rounded"] },
  },
};

export const Image = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/img/avatar_1.png",
    alt: "Jane Doe",
  },
};
export const Fallback = {
  args: {
    alt: "Jane Doe",
  },
};

export const NonSquareImage = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/img/avatar_1.png",
    alt: "Jane Doe",
    variant: "rounded",
  },
};

export const Emoji = {
  alt: "Fox Doe",
  icon: "🦊",
};

export const WithTooltip = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/img/avatar_1.png",
    alt: "Jane Doe",
    tooltip: "Jane Doe",
    position: "bottom",
  },
};

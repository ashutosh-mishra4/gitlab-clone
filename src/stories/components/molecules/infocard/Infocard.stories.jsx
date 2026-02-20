import Infocard from "./Infocard";

export default {
  title: "Molecules/Infocard",
  component: Infocard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/56c1d627f83d08d5524e.svg",
    title: "This state is empty",
    description:
      "The title and message should be clear, concise and explain why the user is seeing this screen.",
    primaryButton: "Something actionable",
    secondaryButton: "Something else",
  },
};

export const SingleButton = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/56c1d627f83d08d5524e.svg",
    title: "This state is empty",
    description:
      "The title and message should be clear, concise and explain why the user is seeing this screen",
    primaryButton: "Something actionable",
  },
};

export const NoButtons = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/56c1d627f83d08d5524e.svg",
    title: "This state is empty",
    description:
      "The title and message should be clear, concise and explain why the user is seeing this screen",
  },
};

export const NoIllustration = {
  args: {
    title: "This state is empty",
    description:
      "The title and message should be clear, concise and explain why the user is seeing this screen",
    primaryButton: "Something actionable",
    secondaryButton: "Something else",
  },
};

export const NotFullscreen = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/56c1d627f83d08d5524e.svg",
    title: "This state is empty",
    description:
      "The title and message should be clear, concise and explain why the user is seeing this screen",
    primaryButton: "Something actionable",
    secondaryButton: "Something else",
    direction: "row",
  },
};

export const CustomActions = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/56c1d627f83d08d5524e.svg",
    title: "This state is empty",
    description:
      " The title and message should be clear, concise and explain why the user is seeing this screen",
    primaryButton: "Custom button",
    secondaryButton: "Custom link",
    secondaryVariant: "text",
  },
};

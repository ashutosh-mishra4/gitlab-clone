import LabeledAvatar from "./LabeledAvatar";

export default {
  title: "Atoms/Avatar/labeled",
  component: LabeledAvatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    tooltip: { control: "text" },
    buttonContent: { control: "text" },
    description: { control: "text" },
  },
};

export const Default = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/0bdb369be89fe90bf186.png",
    name: "GitLab User",
    username: "@gitlab",
  },
};

export const WithInlineLabels = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/0bdb369be89fe90bf186.png",
    name: "GitLab User",
    username: "@gitlab",
    direction: "row",
    spacing: "2px",
  },
};

export const WithTooltip = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/0bdb369be89fe90bf186.png",
    name: "GitLab User",
    username: "@gitlab",
    tooltip: "Avatar tooltip",
  },
};

export const WithDefaultSlot = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/0bdb369be89fe90bf186.png",
    name: "GitLab User",
    username: "@gitlab",
    tooltip: "Avatar tooltip",
    buttonContent: "Follow",
    spacing: 0.1,
  },
};

export const WithLinks = {
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/0bdb369be89fe90bf186.png",
    name: "GitLab.org / GitLab",
    description:
      "GitLab is an open source end-to-end software development platform with built-in version control, issue tracking, code review, CI/CD, and more. Self-host GitLab on your own servers, in a container, or on a cloud provider.",
    spacing: "0px", // to reset the default spacing
  },
};

import AvatarLink from "./AvatarLink";

export default {
  title: "Atoms/Avatar/avatar-link",
  component: AvatarLink,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" }, 
    username: { control: "text" },
  },
  tags: ["autodocs"],
};

export const Default = {  
  args: {
    src: "https://gitlab-org.gitlab.io/gitlab-ui/0bdb369be89fe90bf186.png",
    alt: "GitLab User",
    link: "https://google.com",
  },
};

export const WithLabeledAvatar = {
  args: {
    title: "GitLab User",
    username: "@gitlab",
    src: "https://gitlab-org.gitlab.io/gitlab-ui/0bdb369be89fe90bf186.png",
    alt: "GitLab User",
    link: "https://google.com",
  },
};

export const WithoutNoImageAvatar = {
  args: {
    title: "GitLab User",
    username: "@gitlab",
    alt: "GitLab User",
    link: "https://google.com",
  },
};

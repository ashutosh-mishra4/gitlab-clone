import { CheckCircleOutline } from "@mui/icons-material";
import Banner from "./Banner";

export default {
  title: "Atoms/Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    title: "Upgrade your plan to activate Service Desk",
    message:
      "GitLab Service Desk is a simple way to allow people to create issues in your GitLab instance without needing their own user account. It provides a unique email address for end users to create issues in a project, and replies can be sent either though the GitLab interface or by email. End users will only see the thread though email.",
    primary: "Upgrade your plan",
    icon: <CheckCircleOutline sx={{ fontSize: 120 }} />,
  },
};

export const Introduction = {
  args: {
    title: "Upgrade your plan to activate Service Desk",
    message:
      "GitLab Service Desk is a simple way to allow people to create issues in your GitLab instance without needing their own user account. It provides a unique email address for end users to create issues in a project, and replies can be sent either though the GitLab interface or by email. End users will only see the thread though email.",
    primary: "Upgrade your plan",
    icon: <CheckCircleOutline sx={{ fontSize: 120 }} />,
    border: "1px solid #63a7e9",
    backgroundColor: "#e9f3fc",
  },
};

export const NoImage = {
  args: {
    title: "Upgrade your plan to activate Service Desk",
    message:
      "GitLab Service Desk is a simple way to allow people to create issues in your GitLab instance without needing their own user account. It provides a unique email address for end users to create issues in a project, and replies can be sent either though the GitLab interface or by email. End users will only see the thread though email.",
    primary: "Upgrade your plan",
    icon: false,
  },
};

export const WithActions = {
  args: {
    title: "Buttons with action banner",
    message:
      "There should be a primary button and a link button below this text.",
    primary: "Primary Button",
    secondary: "Ask again later",
    icon: false,
  },
};

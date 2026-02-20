import Token from "./Token";
import { Avatar } from "@mui/material";

export default {
  title: "Atoms/Token",
  component: Token,
  tags: ["autodocs"],
};

export const Default = {};

export const ViewOnly = {
  args: {
    onDelete: false,
  },
};

export const WithAvatar = {
  args: {
    avatar: (
      <Avatar
        alt="Token"
        src="https://gitlab-org.gitlab.io/gitlab-ui/img/avatar.png"
      />
    ),
  },
};

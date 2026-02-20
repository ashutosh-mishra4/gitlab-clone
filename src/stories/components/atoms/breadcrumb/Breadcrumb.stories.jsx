import IconBreadcrumbs from "./Breadcrumb";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { fn } from "@storybook/test";

export default {
  title: "Atoms/Breadcrumb",
  component: IconBreadcrumbs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    breadcrumbs: [
      {
        label: "MUI",
        link: "/",
        icon: HomeIcon,
      },
      {
        label: "Core",
        link: "/material-ui/getting-started/installation/",
        icon: WhatshotIcon,
      },
      {
        label: "Breadcrumb",
        icon: GrainIcon,
      },
    ],
  },
};

import DisclosureDropdown from "./DisclosureDropdown";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

export default {
  title: "Atoms/Dropdown/disclosure-dropdown",
  component: DisclosureDropdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        height: "350px",
      },
    },
  },
};

const defaultItems = [
  { id: 0, content: "Mark as draft" },
  { id: 1, content: "Create new" },
  {
    id: 2,
    content: "Edit merge request",
  },
  {
    id: 3,
    content: "Close merge request",
    dangerColor: "#dd2b0e",
  },
];

const customListItems = [
  { id: 0, content: "Assigned to you", badgeContent: 2 },
  { id: 1, content: "Review requests from you", badgeContent: "0" },
];

const groupItems = [
  { id: 0, header: "This project", variant: "subtitle1" },
  { id: 1, content: "New issue" },
  { id: 2, content: "New merge request" },
  { id: 3, content: "New snippet" },
  { id: 4, header: "GitLab", variant: "body2" },
  { id: 5, content: "New project" },
  { id: 6, content: "New group" },
  { id: 7, content: "New snippet" },
];

const dynamicWrapperItems = [
  { id: 0, content: "Checks" },
  { id: 1, content: "Projects" },
  { id: 2, content: "Standards" },
];

const miscContentItem = [
  {
    id: 0,
    content:
      "A disclosure dropdown is a button that toggles a panel containing a list of items and/or links.",
    variant: "subtitle1",
  },
];

export const Default = {
  args: {
    message: <MoreVertOutlined />,
    sx: { minWidth: 0, padding: "2px" },
    items: defaultItems,
  },
};

export const CustomListItem = {
  args: {
    message: "Merge requests",
    endIcon: <ExpandMore />,
    items: customListItems,
  },
};

export const Groups = {
  args: {
    message: [
      <AddBoxRoundedIcon sx={{ fontSize: "15px" }} />,
      <ExpandMore sx={{ fontSize: "15px" }} />,
    ],
    sx: {
      minWidth: 0,
      padding: "10px",
    },
    items: groupItems,
  },
};

export const CustomGroupsItemsAndToggles = {
  args: {
    avatarSrc: "https://gitlab-org.gitlab.io/gitlab-ui/img/avatar_1.png",
    avatarAlt: "Jane Doe",
    items: defaultItems,
    sx: { minWidth: 0, padding: 0 },
  },
};

export const WithDynamicWrapperText = {
  args: {
    startIcon: <MoreVertOutlined />,
    endIcon: <ExpandMore />,
    message: "Group by",
    items: dynamicWrapperItems,
  },
};

export const MiscellaneousContent = {
  args: {
    message: [
      <DescriptionOutlinedIcon sx={{ fontSize: "15px" }} />,
      <ExpandMore sx={{ fontSize: "15px" }} />,
    ],
    sx: {
      minWidth: 0,
      padding: "10px",
    },
    items: miscContentItem,
  },
};

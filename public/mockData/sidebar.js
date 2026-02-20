import {
  MoreVertOutlined,
  ExpandMore,
  FolderOutlined,
  GroupsOutlined,
  DnsOutlined,
  AccountTreeOutlined,
  ChecklistOutlined,
  EmojiEvents,
  EmojiEventsOutlined,
  SnippetFolderOutlined,
  DirectionsRunOutlined,
  WorkOutlineOutlined,
  KeyOutlined,
  EngineeringOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

export const addIconItems = [
  { id: 0, content: "New project/repository" },
  { id: 1, content: "New group" },
  {
    id: 2,
    content: "New snippet",
  },
];

export const avatarItems = [
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

export const mergeRequestsItems = [
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

export const sidebarMenuItems = [
  {
    id: 0,
    message: "Projects",
    startIcon: <FolderOutlined />,
    href: "/?path=/story/pages-homepage--default",
  },
  {
    id: 1,
    message: "Groups",
    startIcon: <GroupsOutlined />,
  },
  {
    id: 2,
    message: "Issues",
    startIcon: <DnsOutlined />,
  },
  {
    id: 3,
    message: "Merge Requests",
    startIcon: <AccountTreeOutlined />,
    endIcon: <ExpandMore />,
  },
  {
    id: 4,
    message: "To-Do List",
    startIcon: <ChecklistOutlined />,
    href: "/?path=/story/pages-to-do-list--default",
  },
  {
    id: 5,
    message: "Milestones",
    startIcon: <EmojiEventsOutlined />,
    href: "?path=/story/pages-milestones--default",
  },
  {
    id: 6,
    message: "Snippets",
    startIcon: <SnippetFolderOutlined />,
    href: "/?path=/story/pages-snippets--default",
  },
  {
    id: 7,
    message: "Activity",
    startIcon: <DirectionsRunOutlined />,
  },
  {
    id: 8,
    message: "Workspaces",
    startIcon: <WorkOutlineOutlined />,
    href: "/?path=/story/pages-workspaces--default",
  },
  {
    id: 9,
    message: "Environment",
    startIcon: <KeyOutlined />,
    href: "/?path=/story/pages-environments--default",
  },
  {
    id: 10,
    message: "Operations",
    startIcon: <EngineeringOutlined />,
    href: "/?path=/story/pages-operations--default",
  },
  {
    id: 11,
    message: "Security",
    startIcon: <SecurityOutlined />,
    endIcon: <ExpandMore />,
  },
];

export const helpItems = [
  { id: 0, content: "Help" },
  { id: 1, content: "Support" },
  {
    id: 2,
    content: "GitLab documentation",
  },
  {
    id: 3,
    content: "Compare GitLab plans",
  },
  {
    id: 4,
    content: "Community forum",
  },
  {
    id: 5,
    content: "Contribute to GitLab",
  },
  {
    id: 6,
    content: "Provide feedback",
  },
  {
    id: 7,
    content: "Privacy statement",
    divider: true,
  },
  {
    id: 8,
    content: "Keyboard shortcuts",
  },
  {
    id: 9,
    content: "What's new",
  },
];

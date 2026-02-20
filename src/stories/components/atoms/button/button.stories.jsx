import { Stack, Box } from "@mui/material";
import CustomButton from "./button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ExpandMoreButton from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

export default {
  title: "Atoms/Button",
  component: CustomButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
    },
    color: {
      control: "select",
      options: ["contained", "outlined", "text"],
    },
  },
};

export const Default = {
  args: {
    message: "This is a button",
    block: true,
  },
};

export const IconButton = () => {
  return (
    <Box>
      {/* First Button */}
      <Stack mb="5px">
        <CustomButton
          message={<StarBorderIcon />}
          sx={{
            backgroundColor: "#dd2b0e",
            textColor: "white",
            borderColor: "#dd2b0e",
            minWidth: 0,
            padding: "2px",
            maxWidth: "fit-content",
            "&:hover": {
              backgroundColor: "#c91d00",
              borderColor: "#8d1300",
            },
          }}
        />
      </Stack>
      {/* Second Column */}
      <Stack direction="row" mb="5px">
        <CustomButton
          message={<StarBorderIcon />}
          sx={{
            minWidth: 0,
            padding: "2px",
          }}
        />
        <CustomButton
          message={<StarBorderIcon />}
          sx={{
            minWidth: 0,
            padding: "2px",
            transform: "scale(0.8)",
          }}
        />
      </Stack>
      {/* Third Column */}
      <Stack direction="row" spacing={1} alignItems="center">
        <CustomButton
          startIcon={<StarBorderIcon />}
          message={"Icon text"}
          sx={{
            minWidth: 0,
            padding: "3px 12px 3px 12px",
          }}
        />
        <CustomButton
          startIcon={<StarBorderIcon />}
          message={"Icon text"}
          sx={{
            minWidth: 0,
            height: "25px",
          }}
        />
      </Stack>
    </Box>
  );
};

export const DropdownButton = {
  args: {
    message: "Some dropdown",
    endIcon: <ExpandMoreButton />,
    dropdown: true,
  },
};

export const DropdownIconButton = {
  args: {
    startIcon: <DownloadIcon />,
    endIcon: <ExpandMoreButton />,
    dropdown: true,
  },
};

export const DropdownIconTextButton = {
  args: {
    startIcon: <NotificationsOutlinedIcon />,
    message: "Notifications",
    endIcon: <ExpandMoreButton />,
    dropdown: true,
  },
};

export const DropdownIconOnlyButton = {
  args: {
    dropdown: true,
    message: <MoreVertOutlinedIcon />,
    sx: {
      minWidth: 0,
      padding: "3px",
    },
  },
};

export const DropdownLoadingButton = {
  args: {
    message: "Some dropdown button",
    loading: true,
    dropdown: true,
  },
};

export const LoadingButton = {
  args: {
    message: "Loading button",
    loading: true,
  },
};

export const LinkButton = {
  args: {
    message: "This is a link button",
    src: "/about",
  },
};

export const IconButtonWithOverflowedText = {
  args: {
    message: "Apply suggestion to this button",
    startIcon: <StarBorderIcon />,
    src: "/about",
    sx: { maxWidth: "150px" },
    noWrap: true,
  },
};

export const BorderlessTertiary = {
  args: {
    message: "Default borderless",
    variant: "text",
    size: "large",
  },
};

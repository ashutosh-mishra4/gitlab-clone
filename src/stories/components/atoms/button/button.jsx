import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import {
  Button,
  Typography,
  Paper,
  MenuList,
  Popper,
  MenuItem,
} from "@mui/material";

const CustomButton = ({
  message,
  variant,
  startIcon,
  endIcon,
  loading,
  dropdown,
  color,
  noWrap,
  block,
  href,
  sx,
  ...props
}) => {
  // Default styles
  const defaultColor = "#3b383f";
  const defaultBackgroundColor = "#c8c8cb";
  const defaultHoverBackgroundColor = "#ececef";
  const defaultHoverBorderColor = "#89888d";

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  // Loading Buttons
  if (loading) {
    if (loading && dropdown) {
      return (
        <LoadingButton
          loading
          loadingPosition="start"
          variant="outlined"
          endIcon={<ExpandMoreIcon />}
          sx={{
            textTransform: "unset",
            color: "#737278",
            backgroundColor: "#fbfafd",
            border: "2px solid #dcdcde",
            ...sx,
          }}
        >
          <Typography sx={{ paddingLeft: 3 }}>{message}</Typography>
        </LoadingButton>
      );
    }
    return (
      <LoadingButton
        loading
        loadingPosition="start"
        variant="outlined"
        sx={{
          textTransform: "unset",
          color: "#4c4bf1",
          backgroundColor: "#fbfafd",
          border: "2px solid #dcdcde",
          ...sx,
        }}
      >
        <Typography sx={{ paddingLeft: 3 }}>{message}</Typography>
      </LoadingButton>
    );
  }

  // Dropdown buttons
  if (dropdown) {
    return (
      <>
        <Button
          onClick={handleClick}
          variant={variant || "outlined"}
          startIcon={startIcon}
          endIcon={endIcon}
          fullWidth={block}
          width={block ? "100%" : "auto"}
          sx={{
            textTransform: "unset",
            color: sx?.color || defaultColor,
            borderColor: sx?.borderColor || defaultBackgroundColor,
            "&:hover": {
              backgroundColor:
                sx?.backgroundColor || defaultHoverBackgroundColor,
              borderColor: sx?.borderColor || defaultHoverBorderColor,
            },
            ...sx,
          }}
        >
          {message}
        </Button>
        <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
          <ClickAwayListener onClickAway={handleClose}>
            <Paper
              elevation={0}
              sx={{
                marginTop: "5px",
                border: `1px solid ${defaultBackgroundColor}`,
                minWidth: "250px",
              }}
            >
              <MenuList>
                <MenuItem
                  sx={{
                    color: sx?.color || defaultColor,
                    fontSize: "14px",
                  }}
                  onClick={handleClose}
                >
                  Dropdown item
                </MenuItem>
              </MenuList>
            </Paper>
          </ClickAwayListener>
        </Popper>
      </>
    );
  }

  if (href) {
    return (
      <Button
        variant={variant || "outlined"}
        startIcon={startIcon}
        endIcon={endIcon}
        fullWidth={block}
        href={href}
        width={block ? "100%" : "auto"}
        sx={{
          textTransform: "unset",
          color: sx?.textColor || defaultColor,
          borderColor: sx?.borderColor || defaultBackgroundColor,
          "&:hover": {
            backgroundColor: sx?.backgroundColor || defaultHoverBackgroundColor,
            borderColor: sx?.borderColor || defaultHoverBorderColor,
          },
          ...sx,
        }}
        {...props}
      >
        <Typography noWrap={noWrap}>{message}</Typography>
      </Button>
    );
  }

  return (
    <Button
      variant={variant || "outlined"}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={block}
      width={block ? "100%" : "auto"}
      sx={{
        textTransform: "unset",
        color: sx?.textColor || defaultColor,
        borderColor: sx?.borderColor || defaultBackgroundColor,
        "&:hover": {
          backgroundColor: sx?.backgroundColor || defaultHoverBackgroundColor,
          borderColor: sx?.borderColor || defaultHoverBorderColor,
        },
        ...sx,
      }}
      color={color}
      {...props}
    >
      {message}
    </Button>
  );
};

export default CustomButton;

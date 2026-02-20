import { useState } from "react";
import CustomAvatar from "../../avatar/avatar";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import {
  Button,
  Typography,
  Paper,
  MenuList,
  Popper,
  Divider,
  MenuItem,
  Badge,
} from "@mui/material";

export const DisclosureDropdown = ({
  size,
  startIcon,
  endIcon,
  block,
  message,
  variant,
  position,
  badgeContent,
  avatarSrc,
  avatarAlt,
  avatarName,
  avatarUsername,
  items,
  sx,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Default styles
  const defaultColor = "#3b383f";
  const defaultBackgroundColor = "#c8c8cb";
  const defaultHoverBackgroundColor = "#ececef";
  const defaultHoverBorderColor = "#89888d";

  return (
    <div>
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
            backgroundColor: sx?.backgroundColor || defaultHoverBackgroundColor,
            borderColor: sx?.borderColor || defaultHoverBorderColor,
          },
          ...sx,
        }}
      >
        {!avatarSrc ? (
          message
        ) : (
          <CustomAvatar src={avatarSrc} alt={avatarAlt} size={size} />
        )}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={position || "bottom-start"}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper
            elevation={2}
            sx={{
              marginTop: "5px",
              border: `1px solid ${defaultBackgroundColor}`,
              minWidth: "250px",
            }}
          >
            <MenuList>
              {/* Avatar image, name, and username*/}

              {items.map((item) => {
                return item.header ? (
                  <>
                    {item.id !== 0 && <Divider sx={{ marginTop: "8px" }} />}
                    <Typography
                      variant={item.variant}
                      sx={{
                        fontWeight: 600,
                        fontSize: "12px",
                        padding: "8px 16px",
                      }}
                    >
                      {item.header}
                    </Typography>
                  </>
                ) : (
                  <MenuItem
                    divider={item.divider}
                    key={item.id}
                    sx={{
                      color: item.dangerColor
                        ? item.dangerColor
                        : sx?.color || defaultColor,
                      fontSize: "14px",
                      userSelect: "none",
                    }}
                    onClick={handleClose}
                  >
                    <Badge
                      badgeContent={item.badgeContent}
                      color="primary"
                      sx={{ transform: `translate(0px, 0%)` }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          whiteSpace: "normal",
                          wordBreak: "break-word",
                          maxWidth: "400px",
                        }}
                        variant={item.variant}
                      >
                        {item.content}
                      </Typography>
                    </Badge>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default DisclosureDropdown;

import { useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

const BroadcastMessage = ({
  icon,
  message,
  color,
  backgroundColor,
  maxWidth,
  ...props
}) => {
  const [open, setOpen] = useState(true);

  const defaultColor = "#fff";
  const defaultBackgroundColor = "#41419f";

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          icon={icon ? icon : false}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon
                fontSize="inherit"
                sx={{ color: color || defaultColor }}
              />
            </IconButton>
          }
          sx={{
            mb: 2,
            backgroundColor: backgroundColor || defaultBackgroundColor,
            maxWidth: maxWidth,
            ...props,
          }}
        >
          <Typography sx={{ color: color || defaultColor }}>
            {message}
          </Typography>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default BroadcastMessage;

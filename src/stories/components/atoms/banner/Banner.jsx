import { useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { AlertTitle, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";

const Banner = ({
  title,
  message,
  primary,
  secondary,
  icon,
  border,
  backgroundColor,
}) => {
  const [open, setOpen] = useState(true);
  const defaultBorder = "1px solid #DCDCDE";
  const defaultBackgroundColor = "#FBFAFD";

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          sx={{
            backgroundColor: backgroundColor || defaultBackgroundColor,
            border: border || defaultBorder,
          }}
          icon={
            icon && (
              <Box
                sx={{
                  display: {
                    xs: "none", // Hide icon on extra-small screens (mobile)
                    sm: "none", // Hide icon on small screens (tablet)
                    md: "block", // Show icon on medium screens (desktop)
                    lg: "block", // Show icon on large screens
                  },
                }}
              >
                {icon}
              </Box>
            )
          }
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {title && (
            <AlertTitle
              sx={{ color: "#18171d", fontWeight: "bold", fontSize: 20 }}
            >
              {title}
            </AlertTitle>
          )}
          <Typography sx={{ color: "#3b383f" }}>{message}</Typography>
          {primary && !secondary && (
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <Button
                disableElevation
                size="small"
                sx={{
                  backgroundColor: "#1e76cb",
                  textTransform: "capitalize",
                  mt: 1,
                }}
                variant="contained"
              >
                {primary}
              </Button>
            </Stack>
          )}

          {primary && secondary && (
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <Button
                disableElevation
                variant="contained"
                sx={{ textTransform: "capitalize" }}
              >
                {primary}
              </Button>
              <Button
                variant="secondary"
                sx={{
                  textTransform: "capitalize",
                  color: "#3571b8",
                  "&:hover": {
                    textDecoration: "underline",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {secondary}
              </Button>
            </Stack>
          )}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default Banner;

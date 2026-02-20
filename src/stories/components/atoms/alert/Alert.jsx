import React from "react";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const CustomAlert = ({
  severity,
  title,
  message,
  actions,
  onClose,
  icon,
  variant,
}) => (
  <Alert
    severity={severity}
    icon={icon}
    onClose={onClose ? () => onClose() : null}
    variant={variant}
  >
    {title && <AlertTitle>{title}</AlertTitle>}
    {message}
    {actions && (
      <Stack direction="row" spacing={2} mt={2}>
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="contained"
            color={action.color}
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        ))}
      </Stack>
    )}
  </Alert>
);

CustomAlert.propTypes = {
  severity: PropTypes.oneOf(["error", "warning", "info", "success"]).isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  onClose: PropTypes.func,
  icon: PropTypes.node,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
};

CustomAlert.defaultProps = {
  title: null,
  actions: null,
  onClose: null,
  icon: null,
  variant: "standard",
};

CustomAlert.displayName = "CustomAlert";

export default CustomAlert;

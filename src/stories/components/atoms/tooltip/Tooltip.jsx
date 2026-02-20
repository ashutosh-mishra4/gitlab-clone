import * as React from "react";
import Button from "../button/button";
import Tooltip from "@mui/material/Tooltip";

const PositionedTooltips = ({ position, title, variant, message }) => {
  return (
    <Tooltip title={title} placement={position}>
      <Button variant={variant} message={message} />
    </Tooltip>
  );
};

export default PositionedTooltips;

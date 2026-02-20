import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

 const CustomAvatar = ({
  tooltip,
  src,
  variant,
  alt,
  bgColor,
  size,
  icon,
  position,
  sx,
}) => {
  return (
    <>
      {src ? (
        <Tooltip title={tooltip} placement={position}>
          <Avatar
            src={src}
            variant={variant} // circle is the default variant
            sx={{ width: size, height: size, backgroundColor: bgColor, ...sx }}
            alt={alt}
          />
        </Tooltip>
      ) : (
        <Tooltip title={tooltip}>
          <Avatar
            variant={variant}
            sx={{ width: size, height: size, backgroundColor: bgColor, ...sx }}
            alt={alt}
          >
            {icon || alt?.[0]}
          </Avatar>
        </Tooltip>
      )}
    </>
  );
 }

 export default CustomAvatar

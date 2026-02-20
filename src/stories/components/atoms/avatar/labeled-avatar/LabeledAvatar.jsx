import Button from "../../button/button";
import CustomAvatar from "../avatar";
import { Stack, Tooltip, Typography } from "@mui/material";

const LabeledAvatar = ({
  sx,
  src,
  name,
  title,
  spacing,
  maxWidth,
  username,
  placement,
  direction,
  description,
  buttonContent,
}) => {
  return (
    <>
      <Tooltip title={title} placement={placement}>
        <Stack direction="row" spacing={1} sx={{ ...sx }}>
          <CustomAvatar src={src} sx={{ border: ".5px solid #c8c8cb" }} />
          <Stack>
            <Stack direction={direction} spacing={spacing || -0.5}>
              <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
              <Typography sx={{ color: "#626168" }}>{username}</Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{ maxWidth: maxWidth || "650px", color: "#626168" }}
            >
              {description}
            </Typography>
            {buttonContent ? (
              <Button
                message={buttonContent}
                sx={{ height: "20px", minWidth: "50px", marginTop: "5px" }}
              />
            ) : null}
          </Stack>
        </Stack>
      </Tooltip>
    </>
  );
};

export default LabeledAvatar;

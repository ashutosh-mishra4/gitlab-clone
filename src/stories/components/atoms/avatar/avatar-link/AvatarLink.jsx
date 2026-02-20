import Link from "next/link";
import CustomAvatar from "../avatar";
import { Typography, Stack } from "@mui/material";

const AvatarLink = ({ src, alt, link, title, username }) => {
  return (
    <Link href={link}>
      {title && username ? (
        <Stack
          direction="row"
          spacing={1}
          sx={{
            "&:hover .MuiAvatar-root": {
              border: "1px solid #c3c3c3",
            },
            "&:hover .MuiTypography-root": {
              textDecoration: "underline",
            },
          }}
        >
          <CustomAvatar
            src={src}
            alt={alt}
            sx={{
              border: "1px solid #ebebeb",
              color: "#8d1300",
              backgroundColor: "#ffedea",
            }}
          />
          <Stack spacing={-1}>
            <Typography>{title}</Typography>
            <Typography
              sx={{
                color: "#626168",
              }}
            >
              {username}
            </Typography>
          </Stack>
        </Stack>
      ) : (
        <CustomAvatar
          src={src}
          alt={alt}
          sx={{
            border: "1px solid #ebebeb",
            "&:hover": {
              border: "1px solid #c3c3c3",
            },
          }}
        />
      )}
    </Link>
  );
};

export default AvatarLink;

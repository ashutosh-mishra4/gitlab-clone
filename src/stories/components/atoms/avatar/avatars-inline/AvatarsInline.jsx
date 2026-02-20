import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";

const AvatarsInline = ({ avatars, maxVisible, size, total }) => {
  return (
    <AvatarGroup
      max={maxVisible}
      total={total}
      sx={{
        "& .MuiAvatar-root": {
          width: size,
          height: size,
          fontSize: size / 2.5,
        },
        "& .MuiAvatarGroup-avatar": {
          width: size,
          height: size,
          fontSize: size / 2.5,
        },
      }}
    >
      {avatars.map((avatar) => {
        const avatarContent = (
          <Avatar
            alt={avatar.alt}
            src={avatar.src}
            sx={{ width: size, height: size }}
          />
        );

        return (
          <Tooltip key={avatar.alt} title={avatar.tooltip || ""}>
            {avatar.link ? (
              <Link href={avatar.link} target="_blank" underline="none">
                {avatarContent}
              </Link>
            ) : (
              avatarContent
            )}
          </Tooltip>
        );
      })}
    </AvatarGroup>
  );
};

export default AvatarsInline;

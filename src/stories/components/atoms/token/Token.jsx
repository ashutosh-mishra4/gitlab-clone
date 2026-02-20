import Chip from "@mui/material/Chip";
import CloseIcon from "@mui/icons-material/Close";

const Token = ({ avatar, ...props }) => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Chip
      sx={{ borderRadius: 0 }}
      avatar={avatar}
      label="Token"
      onDelete={handleDelete}
      {...props}
      deleteIcon={<CloseIcon sx={{ color: "blue" }} />}
    />
  );
};

export default Token;

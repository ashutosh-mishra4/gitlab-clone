import { Container, Typography } from "@mui/material";
import CustomButton from "../../atoms/button/button";

const Infocard = ({
  sx,
  src,
  size,
  title,
  description,
  direction,
  alignment,
  primaryHref,
  secondaryHref,
  primaryVariant,
  secondaryVariant,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: direction || "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        ...sx,
      }}
    >
      {src ? <img src={src} width={size} height={size} /> : null}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: alignment || "center",
        }}
      >
        <Typography align={alignment || "center"} variant="h5">
          {title}
        </Typography>
        <Typography align={alignment || "center"} variant="body2">
          {description}
        </Typography>
        <div style={{ display: "flex", gap: "5px" }}>
          {primaryButton ? (
            <CustomButton
              disableElevation
              href={primaryHref}
              message={primaryButton}
              variant={primaryVariant || "contained"}
            />
          ) : null}
          {secondaryButton ? (
            <CustomButton
              href={secondaryHref}
              message={secondaryButton}
              variant={secondaryVariant}
            />
          ) : null}
        </div>
      </div>
    </Container>
  );
};

export default Infocard;

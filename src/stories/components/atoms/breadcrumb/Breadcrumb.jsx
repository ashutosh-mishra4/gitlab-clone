import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const IconBreadcrumbs = ({ breadcrumbs, sx }) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((item, index) => {
          return item.link ? (
            <Link
              key={index}
              underline="hover"
              sx={{ display: "flex", alignItems: "center", ...sx }}
              color="inherit"
              href={item.link}
            >
              {item.icon && <item.icon sx={{ mr: 0.5 }} fontSize="inherit" />}
              {item.label}
            </Link>
          ) : (
            <Typography
              key={index}
              sx={{ display: "flex", alignItems: "center", ...sx }}
              color="text.primary"
            >
              {item.icon && <item.icon sx={{ mr: 0.5 }} fontSize="inherit" />}
              {item.label}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default IconBreadcrumbs;

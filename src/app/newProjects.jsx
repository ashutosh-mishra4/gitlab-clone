import IconBreadcrumbs from "@/stories/components/atoms/breadcrumb/Breadcrumb";
import Sidebar from "@/stories/components/molecules/sidebar/sidebar";
import { newProjectsType } from "../../public/mockData/newProjects";
import { Divider, Typography } from "@mui/material";
import Infocard from "@/stories/components/molecules/infocard/Infocard";

export default function NewProjects() {
  const breadcrumbs = [
    { label: "Your work", link: "/" },
    {
      label: "Projects / New Project",
      link: "/material-ui/getting-started/installation/",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ width: "100%", backgroundColor: "#fff" }}>
        <div style={{ margin: "15px" }}>
          <IconBreadcrumbs
            breadcrumbs={breadcrumbs}
            sx={{ fontSize: "13px" }}
          />
        </div>
        <Divider fullWidth />
        <main
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Create new project
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {newProjectsType.map((project) => {
              return (
                <>
                  <Infocard
                    src={project.src}
                    title={project.title}
                    description={project.description}
                    spacing={project.spacing}
                    direction="row"
                    alignment="left"
                    size="100px"
                    sx={{
                      margin: "10px",
                      border: "1px solid #c8c8cb",
                      borderRadius: "10px",
                      width: "600px",
                      height: "250px",
                      "&:hover": {
                        cursor: "pointer",
                        backgroundColor: "#fbfafd",
                      },
                    }}
                  />
                </>
              );
            })}
          </div>
          <Typography variant="body2">
            You can also create a project from the command line.
          </Typography>
        </main>
      </div>
    </div>
  );
}

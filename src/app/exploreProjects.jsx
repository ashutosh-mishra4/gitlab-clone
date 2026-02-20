import LabeledAvatar from "@/stories/components/atoms/avatar/labeled-avatar/LabeledAvatar";
import IconBreadcrumbs from "@/stories/components/atoms/breadcrumb/Breadcrumb";
import Sidebar from "@/stories/components/molecules/sidebar/sidebar";
import { projectsData } from "../../public/mockData/exploreProjects";
import { Divider, Typography, Stack } from "@mui/material";
import Button from "../stories/components/atoms/button/button";

export default function ExploreProjects() {
  const breadcrumbs = [
    { label: "Your work", link: "/" },
    {
      label: "Projects",
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
        <main style={{ margin: "20px 200px 0 200px" }}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", marginBottom: "50px" }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Explore Projects
            </Typography>
            <Button
              message="New Project"
              variant="contained"
              disableElevation
              href="/?path=/story/pages-new-project--default"
            />
          </Stack>
          {projectsData.map((project) => {
            return (
              <>
                <LabeledAvatar
                  src={project.src}
                  name={project.name}
                  username={project.username}
                  description={project.description}
                  spacing={project.spacing}
                  direction={project.direction}
                  sx={{ margin: "10px" }}
                />
                <Divider />
              </>
            );
          })}
        </main>
      </div>
    </div>
  );
}

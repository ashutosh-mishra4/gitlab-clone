import { useState } from "react";
import Button from "@/stories/components/atoms/button/button";
import IconBreadcrumbs from "@/stories/components/atoms/breadcrumb/Breadcrumb";
import Infocard from "@/stories/components/molecules/infocard/Infocard";
import Sidebar from "@/stories/components/molecules/sidebar/sidebar";
import { Divider, Typography, Stack } from "@mui/material";

export default function Workspaces() {
  //  const [activeTab, setActiveTab] = useState("Yours");

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
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: "25px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Projects
          </Typography>{" "}
          <Stack direction="row" gap="5px">
            <Button
              variant="text"
              message="Explore Projects"
              href="/?path=/story/pages-explore-projects--default"
            />
            <Button
              variant="contained"
              message="New Project"
              href="/?path=/story/pages-new-project--default"
              disableElevation
            />
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

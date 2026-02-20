import IconBreadcrumbs from "@/stories/components/atoms/breadcrumb/Breadcrumb";
import Infocard from "@/stories/components/molecules/infocard/Infocard";
import Sidebar from "@/stories/components/molecules/sidebar/sidebar";
import { Divider } from "@mui/material";
import { useState } from "react";

export default function Workspaces() {
  const breadcrumbs = [
    { label: "Your work", link: "/" },
    {
      label: "Workspaces",
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
        <Infocard
          src="https://gitlab.com/assets/illustrations/empty-state/empty-workspaces-md-180f51c9985dff995d5339c0cd8848c4da154335e713707c6de500056a966a1e.svg"
          title="Instant development environments"
          description="Each workspace is a secure cloud environment for your GitLab project. Quickly switch between projects, live preview, and compile code on any device."
          primaryButton="New workspace"
          size="150px"
          sx={{ paddingTop: "30px" }}
        />
      </div>
    </div>
  );
}

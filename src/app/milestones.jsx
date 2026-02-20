import IconBreadcrumbs from "@/stories/components/atoms/breadcrumb/Breadcrumb";
import Infocard from "@/stories/components/molecules/infocard/Infocard";
import Sidebar from "@/stories/components/molecules/sidebar/sidebar";
import { Divider } from "@mui/material";

export default function Milestones() {
  const breadcrumbs = [
    { label: "Your work", link: "/" },
    {
      label: "Milestones",
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
          src="https://gitlab.com/assets/illustrations/empty-state/empty-milestone-md-b4b3e5ef6501d1056e71bb80700a15a8a15e8e3220e9fd27316dba5d847ad67a.svg"
          title="Use milestones to track issues and merge requests over a fixed period of time"
          description="Organize issues and merge requests into a cohesive group, and set optional start and due dates."
          size="150px"
          sx={{ paddingTop: "30px" }}
        />
      </div>
    </div>
  );
}

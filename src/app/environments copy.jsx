import IconBreadcrumbs from "@/stories/components/atoms/breadcrumb/Breadcrumb";
import Infocard from "@/stories/components/molecules/infocard/Infocard";
import Sidebar from "@/stories/components/molecules/sidebar/sidebar";
import { Divider } from "@mui/material";

export default function Environments() {
  const breadcrumbs = [
    { label: "Your work", link: "/" },
    {
      label: "Environments",
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
          src="https://gitlab.com/assets/illustrations/empty-state/empty-radar-md-d56b572f9e16b03254561768f0c3fa43ae34712a4af585f3e33e45d2a123e938.svg"
          title="Add a project to the dashboard"
          description="The environments dashboard provides a summary of each project's environments' status, including pipeline and alert statuses."
          primaryButton="Add projects"
          secondaryButton="View documentation"
          secondaryHref="https://docs.gitlab.com/ee/ci/environments/environments_dashboard.html"
          size="150px"
          sx={{ paddingTop: "30px" }}
        />
      </div>
    </div>
  );
}

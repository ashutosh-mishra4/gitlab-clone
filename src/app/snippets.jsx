import IconBreadcrumbs from "@/stories/components/atoms/breadcrumb/Breadcrumb";
import Infocard from "@/stories/components/molecules/infocard/Infocard";
import Sidebar from "@/stories/components/molecules/sidebar/sidebar";
import { Divider } from "@mui/material";

export default function Snippets() {
  const breadcrumbs = [
    { label: "Your work", link: "/" },
    {
      label: "Snippets",
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
          src="https://gitlab.com/assets/illustrations/empty-state/empty-snippets-md-d20205283228c928b8b18735eaf426fa897c45b0d6fe47e337aff38ae591c28c.svg"
          title="Code snippets"
          description="Store, share, and embed small pieces of text."
          primaryButton="New snippet"
          secondaryButton="Explore snipppets"
          size="150px"
          sx={{ paddingTop: "30px" }}
        />
      </div>
    </div>
  );
}

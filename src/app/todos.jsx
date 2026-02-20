import IconBreadcrumbs from "@/stories/components/atoms/breadcrumb/Breadcrumb";
import Infocard from "@/stories/components/molecules/infocard/Infocard";
import Sidebar from "@/stories/components/molecules/sidebar/sidebar";
import { Divider } from "@mui/material";

export default function Todos() {
  const breadcrumbs = [
    { label: "Your work", link: "/" },
    {
      label: "To-Do List",
      link: "/material-ui/getting-started/installation/",
    },
  ];

  const inforcardData = {
    src: "https://gitlab.com/assets/illustrations/empty-todos-md-8d41734db5791e0917bc4835fab2ff4aa363ce4effbcd6e61daca3fde714fd50.svg",
    title: "Your To-Do List shows what to work on next",
    description: [
      "When an issue or merge request is assigned to you, or when you receive a @mention in a comment, this automatically triggers a new item in your To-Do List.",
      <br />,
      <br />,
      "It's how you always know what to work on next.",
    ],
    size: "150px",
    sx: "30px",
  };

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
          src={inforcardData.src}
          title={inforcardData.title}
          description={inforcardData.description}
          size={inforcardData.size}
          sx={{ paddingTop: inforcardData.sx }}
        />
      </div>
    </div>
  );
}

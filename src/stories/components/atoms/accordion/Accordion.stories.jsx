import Accordion from "./Accordion";

export default {
  title: "Atoms/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    items: [
      {
        title: "Accordion 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
      {
        title: "Accordion 2",
        content:
          "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
      },
      {
        title: "Accordion 3",
        content:
          "Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat.",
      },
    ],
  },
};

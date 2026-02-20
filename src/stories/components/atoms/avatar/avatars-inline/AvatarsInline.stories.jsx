import AvatarsInline from "./AvatarsInline";

export default {
  title: "Atoms/Avatar/avatars-inline",
  component: AvatarsInline,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: [16, 24, 32] },
  },
};

export const Default = {
  args: {
    maxVisible: 3,
    size: 32,
    avatars: [
      {
        alt: "John Doe",
        src: "https://cdn.prod.website-files.com/66851ff5597edd9f7c0cbe05/66851ff5597edd9f7c0cc558_6679398ec4f742444d043f91_66791587970034c694df33fb_templates-summer-fasion-mid-summer-blowout.png",
      },
      {
        alt: "Jane Doe",
        src: "/guoogle.jpg",
      },
      {
        alt: "Joe Dane",
        src: "/goyogle.jpg",
      },
      {
        alt: "Johnny Don",
        src: "/sdfgsdf.jpg",
      },
    ],
  },
};

export const WithLinksAndTooltips = {
  args: {
    maxVisible: 3,
    size: 32,
    avatars: [
      {
        alt: "John Doe",
        src: "https://cdn.prod.website-files.com/66851ff5597edd9f7c0cbe05/66851ff5597edd9f7c0cc558_6679398ec4f742444d043f91_66791587970034c694df33fb_templates-summer-fasion-mid-summer-blowout.png",
        link: "google.com",
        tooltip: "John Doe",
      },
      {
        alt: "Jane Doe",
        src: "/guoogle.jpg",
        link: "doodle.com",
        tooltip: "Jane Doe",
      },
      {
        alt: "Joe Dane",
        src: "/goyogle.jpg",
        link: "loodle.com",
        tooltip: "Joe Dane",
      },
      {
        alt: "Johnny Don",
        src: "/sdfgsdf.jpg",
        link: "boogle.com",
        tooltip: "Johnny Don",
      },
    ],
  },
};

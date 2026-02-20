import CampaignIcon from "@mui/icons-material/Campaign";
import BroadcastMessage from "./BroadcastMessage";

export default {
  title: "Atoms/Broadcast Message",
  component: BroadcastMessage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    icon: <CampaignIcon sx={{ color: "white" }} />,
    message:
      "Tuesday June 12th, at 14:30 UTC we will perform database maintenance that will require up to 1 minute of downtime.",
  },
};

export const Notification = {
  args: {
    icon: <CampaignIcon sx={{ color: "#28272D" }} />,
    message:
      "Tuesday June 12th, at 14:30 UTC we will perform database maintenance that will require up to 1 minute of downtime.",
    maxWidth: 325,
    color: "#28272D",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
};

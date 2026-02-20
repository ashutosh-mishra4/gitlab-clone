import CustomButton from "../../atoms/button/button";
import AvatarLink from "../../atoms/avatar/avatar-link/AvatarLink";
import DisclosureDropdown from "../../atoms/dropdown/disclosure-dropdown/DisclosureDropdown";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import AddIcon from "@mui/icons-material/Add";
import MergeIcon from "@mui/icons-material/Merge";
import { HelpOutlineOutlined, PlaylistAddCheck } from "@mui/icons-material";
import {
  addIconItems,
  avatarItems,
  sidebarMenuItems,
  mergeRequestsItems,
  helpItems,
} from "../../../../../public/mockData/sidebar";

const Sidebar = () => {
  return (
    <aside
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#fbfafd",
      }}
    >
      {/* Account Info */}

      <div style={{ backgroundColor: "#f1f0f3", padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 10px",
            marginBottom: "10px",
          }}
        >
          <AvatarLink
            src="https://gitlab-org.gitlab.io/gitlab-ui/0bdb369be89fe90bf186.png"
            alt="Gitlab"
            link="https://kombai.com"
          />
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <DisclosureDropdown
              message={<AddIcon />}
              sx={{ minWidth: 0, padding: "2px", borderColor: "transparent" }}
              items={addIconItems}
            />
            <DisclosureDropdown
              avatarSrc="https://secure.gravatar.com/avatar/c0da24f775fc01e73ff20e9cefcd4d2bd5dd4d7495fb5aab4bd66126843715c2?s=80&d=identicon"
              avatarAlt="GitLab"
              items={avatarItems}
              size="30px"
              sx={{
                minWidth: 0,
                padding: "2px",
                borderColor: "transparent",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DisclosureDropdown
            message={<SplitscreenIcon sx={{ fontSize: "15px" }} />}
            items={mergeRequestsItems}
          />
          <DisclosureDropdown
            message={<MergeIcon sx={{ fontSize: "15px" }} />}
            items={mergeRequestsItems}
          />
          <DisclosureDropdown
            message={<PlaylistAddCheck sx={{ fontSize: "15px" }} />}
            items={mergeRequestsItems}
          />
        </div>
      </div>

      {/* Menu Items */}

      <div style={{ padding: "0px" }}>
        <p style={{ fontWeight: 900, fontSize: "15px", margin: "18px" }}>
          Your work
        </p>
        {sidebarMenuItems.map((item) => {
          return (
            <CustomButton
              key={item.id}
              message={item.message}
              startIcon={item.startIcon}
              endIcon={item.endIcon}
              href={item.href}
              fullWidth
              sx={{
                fontSize: "15px",
                marginBottom: "5px",
                paddingLeft: "18px",
                display: "flex",
                justifyContent: "flex-start",
                border: "none",
                fontWeight: "semi-bold",
                "&:hover": {
                  border: "none",
                },
              }}
            />
          );
        })}
        <DisclosureDropdown
          message="Help"
          startIcon={<HelpOutlineOutlined />}
          items={helpItems}
          sx={{
            position: "absolute",
            bottom: "10px",
            border: "none",
            "&:hover": {
              border: "none",
            },
          }}
        />
      </div>
    </aside>
  );
};

export default Sidebar;

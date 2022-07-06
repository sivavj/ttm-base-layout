import { ReactNode } from "react";

import DesignServicesTwoToneIcon from "@mui/icons-material/DesignServicesTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import DevicesOtherTwoToneIcon from "@mui/icons-material/DevicesOtherTwoTone";
import CellWifiTwoToneIcon from "@mui/icons-material/CellWifiTwoTone";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import CodeOffTwoToneIcon from "@mui/icons-material/CodeOffTwoTone";
import CampaignTwoToneIcon from "@mui/icons-material/CampaignTwoTone";
import FontDownloadOffTwoToneIcon from "@mui/icons-material/FontDownloadOffTwoTone";
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode | any;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: "",
    items: [
      {
        name: "Overview",
        icon: DesignServicesTwoToneIcon,
        link: "/",
      },
    ],
  },
  {
    heading: "Console",
    items: [
      {
        name: "Channels",
        icon: DevicesOtherTwoToneIcon,
        link: "/console/channels",
      },
      {
        name: "Gateways",
        icon: CellWifiTwoToneIcon,
        link: "/console/gateways",
      },
    ],
  },
  {
    heading: "Applications",
    items: [
      {
        name: "Dashboards",
        icon: DashboardTwoToneIcon,
        link: "/applications/dashboards",
      },
      {
        name: "Queries",
        icon: CodeOffTwoToneIcon,
        link: "/applications/queries",
      },
      {
        name: "Alerts",
        icon: CampaignTwoToneIcon,
        link: "/applications/alerts",
      },
      {
        name: "Commands",
        icon: FontDownloadOffTwoToneIcon,
        link: "/applications/commands",
      },
    ],
  },
  {
    heading: "User Details",
    items: [
      {
        name: "User Profile",
        icon: AccountCircleTwoToneIcon,
        link: "/management/profile",
        items: [
          {
            name: "Profile Details",
            icon: ContactMailTwoToneIcon,
            link: "/management/profile/details",
          },
          {
            name: "User Settings",
            icon: EngineeringTwoToneIcon,
            link: "/management/profile/settings",
          },
        ],
      },
    ],
  },
];

export default menuItems;

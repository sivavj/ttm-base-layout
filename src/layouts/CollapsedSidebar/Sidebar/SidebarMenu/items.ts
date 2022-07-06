import { ReactNode } from "react";

import DesignServicesTwoToneIcon from "@mui/icons-material/DesignServicesTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import DevicesOtherTwoToneIcon from "@mui/icons-material/DevicesOtherTwoTone";
import CellWifiTwoToneIcon from "@mui/icons-material/CellWifiTwoTone";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import CodeOffTwoToneIcon from "@mui/icons-material/CodeOffTwoTone";
import CampaignTwoToneIcon from "@mui/icons-material/CampaignTwoTone";
import FontDownloadOffTwoToneIcon from "@mui/icons-material/FontDownloadOffTwoTone";
import GamepadTwoToneIcon from '@mui/icons-material/GamepadTwoTone';
import MobileScreenShareTwoToneIcon from '@mui/icons-material/MobileScreenShareTwoTone';
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import DnsTwoToneIcon from '@mui/icons-material/DnsTwoTone';


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
       items: [
         {
           name: "Overview",
           icon: DnsTwoToneIcon,
           link: "/"
         }
       ]
      },
    ],
  },
  {
    heading: "Console",
    items: [
      {
        
        name: "Console",
        icon: GamepadTwoToneIcon,
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
      }
    ]
  },
  {
    heading: "Applications",
    items: [
      {
        name: "Applications",
        icon: MobileScreenShareTwoToneIcon,
        items: [
          {
            name: "Dashboards",
            icon: DashboardTwoToneIcon,
            link: "/applications/dashboard",
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

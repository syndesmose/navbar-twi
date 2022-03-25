import "./sidebar.css";
import SidebarLink from "./SidebarLink";

import HomeIcon from "@material-ui/icons/Android";
import SearchIcon from "@material-ui/icons/Spa";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/Pets";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import AccessibilityNewOutlinedIcon from '@material-ui/icons/AccessibilityNewOutlined';
import { Button } from "@material-ui/core";
import {useState} from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Sidebar(){

  const options = [
    { link: 'Pancréas', icon: <BookmarkBorderOutlinedIcon fontSiz0px/> },
    { link: 'Rein', icon: <ListAltOutlinedIcon/> },
    { link: 'Surrénale', icon: <ChatOutlinedIcon/> },
    { link: 'Hypophyse', icon: <OfflineBoltOutlinedIcon/> },
    { link: 'Rate', icon: <PostAddOutlinedIcon/> },
    { link: 'Foie', icon: <CallMadeOutlinedIcon/> },
    { link: 'Peau', icon: <BarChartOutlinedIcon/> },
    { link: 'Utérus', icon: <SettingsOutlinedIcon/> },
    { link: 'Estomac', icon: <HelpOutlineOutlinedIcon/> },
    { link: 'Diaphragme', icon: <BrushOutlinedIcon/> },
    { link: 'Vessie', icon: <AccessibilityNewOutlinedIcon/> },

  ];

  const [open, setOpen] = useState(false);
  const handleClose = () => {
  setOpen(false);
  };
  const handleClick = (event) => {
  setOpen(true);
  };

  return(
    <div className="sidebar">
        <SidebarLink text="Raton ! 🔥" Icon={HomeIcon} />
        <SidebarLink text="Antoin ❤️‍🔥🦝🌸😳😩" Icon={SearchIcon} />
        <SidebarLink text="Sara 🕵️" Icon={NotificationsNoneIcon} />
        <SidebarLink text="Jean 🤔" Icon={MailOutlineIcon} />
        <SidebarLink text="César 😎" Icon={BookmarkBorderIcon} />
        <SidebarLink text="Sophie 😏" Icon={ListAltIcon} />
        <SidebarLink text="Raton²" Icon={PermIdentityIcon} />
        <Button onClick={handleClick} id="moreLinks">
        <MoreHorizIcon/> Simon :)
        </Button>
        <Button id="tweet">
            🦋 A2Stup 🦋
        </Button>
        <Menu
          id="long-menu"
          open={open}
          onClose={handleClose}
        >

        {options.map((option) => (
      <MenuItem key={option.link} onClick={handleClose}>
        {option.icon} {option.link}
      </MenuItem>
    ))}
        </Menu>
    </div>
  );
}
export default Sidebar;

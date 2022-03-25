import "./sidebar.css";
import SidebarLink from "./SidebarLink";

import HomeIcon from "@material-ui/icons/FilterVintage";
import SearchIcon from "@material-ui/icons/GitHub";
import NotificationsNoneIcon from "@material-ui/icons/Brightness7";
import MailOutlineIcon from "@material-ui/icons/Android";
import BookmarkBorderIcon from "@material-ui/icons/Reddit";
import ListAltIcon from "@material-ui/icons/Pets";
import PermIdentityIcon from "@material-ui/icons/BugReport";
import MoreHorizIcon from "@material-ui/icons/BeachAccess";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/EmojiEmotions';
import ListAltOutlinedIcon from '@material-ui/icons/FavoriteBorder';
import ChatOutlinedIcon from '@material-ui/icons/Flare';
import OfflineBoltOutlinedIcon from '@material-ui/icons/Spa';
import PostAddOutlinedIcon from '@material-ui/icons/Palette';
import CallMadeOutlinedIcon from '@material-ui/icons/LocalBar';
import BarChartOutlinedIcon from '@material-ui/icons/Fingerprint';
import SettingsOutlinedIcon from '@material-ui/icons/LocalFlorist';
import HelpOutlineOutlinedIcon from '@material-ui/icons/BubbleChart';
import BrushOutlinedIcon from '@material-ui/icons/AcUnit';
import AccessibilityNewOutlinedIcon from '@material-ui/icons/InsertEmoticon';
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
        <SidebarLink text="Simon :)" Icon={MoreHorizIcon} />
        <Button onClick={handleClick} id="moreLinks">
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

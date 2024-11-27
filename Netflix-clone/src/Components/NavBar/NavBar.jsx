import React from 'react'
import "../NavBar/NavBar.css"
import NetflixLogo from "../../assets/Images/logo/Netflix-logo.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


function NavBar() {
  return (
    <div className="nav-container">
      <div className="navContent">
        <div className="nav-left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Nlogo" width="110" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />{" "}
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar

//  <FontAwesomeIcon icon="fa-sharp fa-regular fa-magnifying-glass" /> 
{/* <FontAwesomeIcon icon="fa-sharp fa-thin fa-image-portrait" />; */}
{/* <FontAwesomeIcon icon="fa-sharp fa-thin fa-bell" />; */}
{/* <i class="fa-thin fa-caret-down"></i>; */}
{/* <FontAwesomeIcon icon="fa-sharp-duotone fa-solid fa-caret-down" />; */}
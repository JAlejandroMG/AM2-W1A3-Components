import React from "react";

/* Importar los componentes */
import Logo from "./logo";
import SearchBar from "./search-bar";
import Icon from "./icon";
import Login from "./login";

/* Importar los iconos */
import Youtube from "../icons/iconfinder_youtube_294703.png";
import Videocam from "../icons/iconfinder_ic_videocam_48px_3669181.png";
import Module from "../icons/iconfinder_ic_view_module_48px_3669149.png";
import Bell from "../icons/iconfinder_icon-ios7-bell_211694.png";


export default function Navbar(props) {
  return <div className="navbar">
    <Logo logo={Youtube} />
    <SearchBar />
    <Icon iconUrl={Videocam} />
    <Icon iconUrl={Module} />
    <Icon iconUrl={Bell}/>
    <Login />
  </div>;
};

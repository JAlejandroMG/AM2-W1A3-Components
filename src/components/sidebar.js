import React from "react";

/* Importar los componentes */
import Icon from "./icon";

/* Importar los iconos */
import Home from "../icons/iconfinder_ic_home_48px_3669170.png";
import Fire from "../icons/iconfinder_Icon_Element_Fire_03_513726.png";
import Suscriptions from "../icons/iconfinder_ic_subscriptions_48px_3669213.png";
import Playlist from "../icons/iconfinder_ic_playlist_play_48px_3669290.png";


export function Sidebar(props) {
  return <div className="sidebar">
    <Icon iconUrl={Home} title="Principal" />
    <Icon iconUrl={Fire} title="Tendencias" />
    <Icon iconUrl={Suscriptions} title="Suscripciones" />
    <Icon iconUrl={Playlist} title="Biblioteca" />
  </div>;
};

import React from "react";

/* Importar los componentes */
import VideoThumbnail from "./video-thumbnail";

/* Importar las imágenes */
import Image1 from "../images/video1.jpg";
import Image2 from "../images/video2.jpg";
import Image3 from "../images/video3.jpg";
import Image4 from "../images/video4.jpg";
import Image5 from "../images/video5.jpg";
import Image6 from "../images/video6.jpg";
import Image7 from "../images/video7.jpg";
import Image8 from "../images/video8.jpg";


export function ThumbContainer() {
  return <div className="thumb-container">
    <VideoThumbnail image={Image1} />
    <VideoThumbnail image={Image2} />
    <VideoThumbnail image={Image3} />
    <VideoThumbnail image={Image4} />
    <VideoThumbnail image={Image5} />
    <VideoThumbnail image={Image6} />
    <VideoThumbnail image={Image7} />
    <VideoThumbnail image={Image8} />
  </div>;
};

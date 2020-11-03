import React from "react";

export default function Icon(props) {
  return (
    <div className="icon">
      <img src={props.iconUrl} alt={props.title} />
      <p>{props.title}</p>
    </div>
  );
}

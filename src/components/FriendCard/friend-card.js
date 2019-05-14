import React from "react";
import "./FriendCard.css"

function FriendCard(props) {
  return (
    <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
    </div>
  );
}

export default FriendCard;

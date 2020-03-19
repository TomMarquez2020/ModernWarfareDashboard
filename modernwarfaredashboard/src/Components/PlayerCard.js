/*
    This component displays info about a player
*/

import React from "react";

function PlayerCard(props) {
  return (
    <div>
      <div className="jumbotron">
        <h1>{props.data.username}</h1>
        <p>Level: {props.data.level}</p>
      </div>
      <p>Kill/Death Ratio: {props.properties.kdRatio}</p>
    </div>
  );
}

export default PlayerCard;

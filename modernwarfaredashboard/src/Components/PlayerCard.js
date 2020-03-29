/*
    This component displays info about a player
*/

import React from "react";
import Card from 'react-bootstrap/Card';
import MmwImage from "../assets/mwImageCropped.jpg";
import styled from "styled-components";


const Styles = styled.div`
.jumbotron {
background: url(${MmwImage});
background-size: cover;
color: #ccc;
height: 500px;
position: relative;
z-index: -2;
}

.overlay {
background-color: #000;
opacity: 0.6;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: -1;
}
`;

function PlayerCard(props) {
  return (
    <Styles>
      <Card className="jumbotron">
        <div className="overlay">
          <Card.Title>{props.data.username}</Card.Title>
          <p>Level: {props.data.level}</p>
        </div>
        <p>Kill/Death Ratio: {props.properties.kdRatio}</p>
      </Card>
    </Styles>

  );
}

export default PlayerCard;

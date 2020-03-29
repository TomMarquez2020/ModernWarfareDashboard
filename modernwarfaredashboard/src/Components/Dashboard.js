import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";

function Dashboard(props) {
  const [data, setData] = useState([]);
  const [properties, setProperties] = useState([]);
  // const [playerId, setPlayerId] = useState("");
  // const [platform, setPlatform] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/${props.platform}/gamer/${props.playerID}/profile/type/mp`
      )
      .then(res => {
        console.log(res.data.data);
        // setData(res.data.posts);
        setData(res.data.data);
        setProperties(res.data.data.lifetime.all.properties);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); //second parameter to prevent infinite calls

  return (
    <>
      <PlayerCard data={data} properties={properties} />
    </>
  );
}

export default Dashboard;

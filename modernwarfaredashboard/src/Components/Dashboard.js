import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";

/*
  usernames that work:  MrSchreinerK10, shel-stein, Sgt_Odd-Ballx, thefruitpacker, AYellowSnowball (platform: xbl)
                        kodiak429, marlat1

*/

function Dashboard() {
  const [data, setData] = useState([]);
  const [properties, setProperties] = useState([]);
  const [playerId, setPlayerId] = useState("");
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/psn/gamer/kodiak429/profile/type/mp"
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
    <div>
      <PlayerCard data={data} properties={properties} />
    </div>
  );
}

export default Dashboard;

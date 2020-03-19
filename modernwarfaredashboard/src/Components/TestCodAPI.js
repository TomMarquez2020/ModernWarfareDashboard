import React, { useState, useEffect } from "react";
import CallOfDutyAPI from "call-of-duty-api";

function TestCodAPI() {
  const [data, setData] = useState([]);
  const API = require("call-of-duty-api")({ platform: "psn" });

  useEffect(() => {
    API.MWstats("thefruitpacker%231987773", API.platforms.psn)
      .then(output => {
        console.log(output);
        setData(output.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  //   useEffect = (dataApi, []);

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
}

export default TestCodAPI;

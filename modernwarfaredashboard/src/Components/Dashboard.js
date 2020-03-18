import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/TomMarquez2020/ModernWarfareDashboard/db"
      )
      .then(res => {
        console.log(res);
        setData(res.data.posts);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); //second parameter to prevent infinite calls

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default Dashboard;

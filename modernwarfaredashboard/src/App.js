import React, { useState } from 'react';
import "./App.css";
import Dashboard from "./Components/Dashboard";
import FindPlayer from "./Components/FindPlayer";
import Container from "react-bootstrap/Container";

/*

  usernames that work:  MrSchreinerK10, shel-stein, Sgt_Odd-Ballx, thefruitpacker, AYellowSnowball (platform: xbl)
                        kodiak429, marlat1

*/

function App() {
  const [playerID, setPlayerID] = useState("marlat1");
  const [platform, setPlatform] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlatform(e.target.value);
    console.log(e.target.value);
  }

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setPlatform(e.target.value);
  }

  return (
    <div fluid="true" className="App">
      <Container className="overlay">
        <header className="App-header"></header>
        <FindPlayer platform={platform}
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          playerID={playerID}
          setPlayerID={setPlayerID} />
        {/* <Dashboard playerID={playerID} platform={platform} /> */}
      </Container>

    </div>

  );
}

export default App;

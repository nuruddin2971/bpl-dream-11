import React, { use } from "react";
import AvailablePlayers from "./availablePlayers/AvailablePlayers";

const Players = ({ playersPromise }) => {
  console.log(playersPromise);
  const players = use(playersPromise);
  console.log(players);
  return (
    <div className="w-11/12 mx-auto">
      Players : {players.length}
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;

import React from "react";
import Player from "./Player";
import players from "./Players";
import "./PlayersList.css";

const PlayersList = () => {
  return (
    <div className="players-grid">
      {players.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;

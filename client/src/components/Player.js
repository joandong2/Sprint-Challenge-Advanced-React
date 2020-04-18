import React from "react";

const Player = (props) => {
    return (
        <div className="player">
            <p>Rank: {props.player.id + 1}</p>
            <p>Player: {props.player.name}</p>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    );
};

export default Player;

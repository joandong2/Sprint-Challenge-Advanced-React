import React from "react";
import axios from "axios";

import Player from "./Player.js";

class Players extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [],
        };
    }

    componentDidMount() {
        console.log("component did mount");

        axios
            .get("http://localhost:5000/api/players")
            .then((res) => {
                //console.log(res);
                this.setState({
                    players: res.data,
                });
            })
            .catch((err) => console.log(err, "err:"));
    }

    render() {
        return (
            <div className="container">
                <h1 className="title" data-testid="title">
                    World Cup Players
                </h1>
                <span className="font-italic">
                    * players ranked by search interest from Google Trends
                </span>

                <div className="row players">
                    {this.state.players.map((player, index) => {
                        return (
                            <div className="col-sm-3" key={player.id}>
                                <Player
                                    key={player.id}
                                    player={player}
                                    data-testid="player"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Players;

import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header.js";
import Players from "./components/Players.js";

function App() {
    return (
        <div className="App">
            <Header />
            <Players />
        </div>
    );
}

export default App;

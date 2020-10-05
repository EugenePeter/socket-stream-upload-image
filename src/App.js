import React from "react";
import "./App.css";
import UploadImage from "./pages/UploadImage";
import ImageViewer from "./pages/ViewImages";

import { Switch, Route } from "react-router-dom";

import io from "socket.io-client";
import ss from "socket.io-stream";

import Tabs from "./components/navigation/Tabs";

function App() {
    // const socket = io("http://10.111.2.88:8865")
    const socket = io("http://localhost:8865");

    return (
        <>
            <header className="App-header">
                <Tabs />
                <Switch>
                    <Route exact path="/">
                        <UploadImage socket={socket} ss={ss} />
                    </Route>
                    <Route path="/image-viewer">
                        <ImageViewer />
                    </Route>
                </Switch>
            </header>
        </>
    );
}

export default App;

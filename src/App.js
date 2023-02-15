import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routing from "./Components/Routing";

function App() {
    return (
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    );
}

export default App;

/*jshint esversion:11 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialScreen from "./components/InitialScreen";
import MainScreen from "./components/MainScreen";
import './css/reset.css';
import './css/style.css';
import './css/utils.css';

export default function App(){
    
    return (
        <>
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<InitialScreen />} />
                    <Route path="/start" element={<MainScreen />} />
                </Routes>
            </BrowserRouter>
        </>
    );

}
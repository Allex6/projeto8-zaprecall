/*jshint esversion:11 */

import { Link } from "react-router-dom";

export default function InitialScreen(){
    
    return (
        <div className="app-screen initial-screen">

            <img src="./img/logo.png" alt="Logo do Zap Recall" />
            <h1 className="app-title">ZapRecall</h1>
            <Link to="/start">
                <button className="bg-white">Iniciar Recall</button>
            </Link>

        </div>
    );

}
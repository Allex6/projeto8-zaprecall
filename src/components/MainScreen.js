/*jshint esversion:11 */

import react from "react";
import getQuestions from "../data/getQuestions";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import ItemsWrapper from "./questions/ItemsWrapper";

export default function MainScreen(){

    const questions = getQuestions();

    let [answers, setAnswers] = react.useState([]);
    let [userScore, setUserScore] = react.useState(0);
    
    const increaseAnswers = (score, icon)=>{
        const newList = [...answers];
        newList.push({ score, icon });
        setAnswers(newList);
    };
    const increaseUserScore = ()=>{ setUserScore(userScore + 1) };

    return (
        <div className="app-screen main-screen">

            <AppHeader />
            <ItemsWrapper questions={questions} increaseUserScore={increaseUserScore} increaseAnswers={increaseAnswers} />
            <AppFooter totalQuestions={questions.length} answers={answers} userScore={userScore} />

        </div>
    );

}
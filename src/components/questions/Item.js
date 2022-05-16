/*jshint esversion:11 */

import react from "react";
import ItemActive from "./ItemActive";
import ItemAnswering from "./ItemAnswering";
import ItemInitial from "./ItemInitial";

export default function Item({ text, answer, savedScore, itemIndex, increaseUserScore, increaseAnswers }){

    let [score, setScore] = react.useState(savedScore);
    let [step, setStep] = react.useState('initial');

    const addAnswer = (score, icon)=>{
        setScore(score);
        setStep('initial');
        increaseAnswers(score, icon);
        if(score === 2 || score === 3) increaseUserScore();
    };

    const correctGuess = () => addAnswer(3, 'checkmark-circle');
    const delayedGuess = () => addAnswer(2, 'help-circle');
    const wrongGuess = () => addAnswer(1, 'close-circle');
    const activateItem = () => setStep('active');
    const answerItem = () => setStep('answering');

    let componentToRender;

    switch (step) {

        case 'active':
            componentToRender = <ItemActive text={text} answerItem={answerItem} />;
            break;

        case 'answering':
            componentToRender = <ItemAnswering answer={answer} correctGuess={correctGuess} delayedGuess={delayedGuess} wrongGuess={wrongGuess} />;
            break;
    
        default:
            componentToRender = <ItemInitial score={score} itemIndex={itemIndex} activateItem={activateItem} />;
            break;
            
    }

    return (
        <div className="item">
            {componentToRender}
        </div>
    );

}
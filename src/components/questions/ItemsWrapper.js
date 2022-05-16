/*jshint esversion:11 */

import Item from "./Item";

export default function ItemsWrapper({ questions, increaseUserScore, increaseAnswers }){

    return (
        <div className="items-wrapper">
            { questions.map((question, questionIndex) => <Item text={question.text} answer={question.answer} savedScore={question.score} itemIndex={questionIndex} increaseUserScore={increaseUserScore} increaseAnswers={increaseAnswers} />) }
        </div>
    );

}
/*jshint esversion:11 */

import SuccessMessage from './SuccessMessage';
import FailureMessage from './FailureMessage';
import { Link } from 'react-router-dom';

export default function AppFooter({ totalQuestions, answers, userScore }){

    let componentToRender;

    if(answers.length === totalQuestions){
        componentToRender = (userScore === totalQuestions) ? <SuccessMessage /> : <FailureMessage />;
    }

    return (
        <div className="app-footer">
            <div className="current-score">
                { componentToRender }
                <p>{answers.length}/{totalQuestions} Concluídos</p>
                <div>
                    { answers.map(answer => <ion-icon name={answer.icon}></ion-icon>) }
                </div>
                { totalQuestions === answers.length ? <Link to="/"><button>Reiniciar Recall</button></Link> : '' }
            </div>

        </div>
    );

}
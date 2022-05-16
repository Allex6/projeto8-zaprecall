/*jshint esversion:11 */

export default function ItemAnswering({ answer, correctGuess, delayedGuess, wrongGuess }){
    
    return (
        <div className="answer-state active-item">

            <p>{answer}</p>
            <div className="buttons-wrapper">
                <button className="bg-danger" onClick={wrongGuess}>Não lembrei</button>
                <button className="bg-warning" onClick={delayedGuess}>Quase não lembrei</button>
                <button className="bg-success" onClick={correctGuess}>Zap!</button>
            </div>

        </div>
    );

}
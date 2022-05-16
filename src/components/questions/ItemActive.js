/*jshint esversion:11 */

export default function ItemActive({ text, answerItem }){

    return (
        <div className="question-state active-item">

            <p>{text}</p>
            <ion-icon name="repeat-outline" onClick={answerItem}></ion-icon>

        </div>
    );

}
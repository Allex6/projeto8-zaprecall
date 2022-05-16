/*jshint esversion:11 */

export default function ItemInitial({ score, itemIndex, activateItem }){

    let additionalClasses, icon;
    
    switch (score) {

        case 1:
            additionalClasses = 'answered with-error';
            icon = 'close-circle';
            break;

        case 2:
            additionalClasses = 'answered with-warning';
            icon = 'help-circle';
            break;

        case 3:
            additionalClasses = 'answered with-success';
            icon = 'checkmark-circle';
            break;
    
        default:
            additionalClasses = '';
            icon = 'play-outline';
            break;
    }

    return (
        <div className={`initial-state ${additionalClasses}`} onClick={ (score === 0) ? activateItem : ()=>{} }>
            <p>Pergunta {itemIndex + 1}</p>
            <ion-icon name={icon}></ion-icon>
        </div>
    );

}
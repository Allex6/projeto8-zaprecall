/*jshint esversion:11 */

export default function getQuestions(){

    const questions = [
        {
            text: 'O que é JSX ?',
            answer: 'Uma extensão de linguagem do JavaScript',
            score: 0
        },
        {
            text: 'O React é __',
            answer: 'uma biblioteca JavaScript para construção de interfaces',
            score: 0
        },
        {
            text: 'Componentes devem iniciar com __',
            answer: 'letra maiúscula',
            score: 0
        },
        {
            text: 'Podemos colocar __ dentro do JSX',
            answer: 'expressões',
            score: 0
        },
        {
            text: 'O ReactDOM nos ajuda __',
            answer: 'interagindo com a DOM para colocar componentes React na mesma',
            score: 0
        },
        {
            text: 'Usamos o npm para __ ',
            answer: 'gerenciar os pacotes necessários e suas dependências',
            score: 0
        },
        {
            text: 'Usamos props para __',
            answer: 'passar diferentes informações para componentes',
            score: 0
        },
        {
            text: 'Usamos estado (state) para __',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
            score: 0
        }
    ];

    questions.sort((a, b) => Math.random() - 0.5);
    
    return questions;

}
const agenda = document.querySelector('.dias');

const date = new Date();
const today = new Date();
date.setDate(1);
const month = date.getMonth();
const dayTime = 60 * 60 * 24 * 1000;

tituloAgenda( date );

let week = 0;
while( date.getMonth() == month && week <= 6 ) {
    if( (date.getDate() == 1 && date.getDay() != week) || ( date.getMonth() !=  month ) ) {
        elementDay();
    } else {
        elementDay(date);
        date.setTime( date.getTime() + dayTime );
    }
    week++;
    if(week > 6) {
        week = 0;
    }
}

function elementDay( date ) {
    const el = document.createElement('div');
    el.className = 'day';
    if(date){
        el.innerHTML = date.getDate();
        if( today.getDate() == date.getDate() ) {
            el.className = 'day today';
        }
    }
    
    agenda.appendChild( el );
}

function tituloAgenda( date ){
    const mesString = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novenbro",
        "Desembro"
    ]
    const titulo = document.querySelector('.titulo');
    titulo.innerHTML = mesString[date.getMonth()]  + " de " + date.getFullYear();
}
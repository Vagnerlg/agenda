const agenda = document.querySelector('.dias');

const date = new Date();
const today = new Date();
date.setDate(1);
const month = date.getMonth();
const dayTime = 60 * 60 * 24 * 1000;

tituloAgenda( date );

let week = 0;
while( date.getMonth() == month || week <= 6) {
    if( (date.getDate() == 1 && date.getDay() != week) || ( date.getMonth() !=  month ) ) {
        elementWeek( week );
    } else {
        elementWeek( week, date );
        date.setTime( date.getTime() + dayTime );
    }
    week++;
    if(week > 6 && date.getMonth() == month ) {
        week = 0;
    }
}



var elweek;
function elementWeek( weekNumber, date ) {
    if(weekNumber == 0){
        elweek = document.createElement('div');
        elweek.className = "week"; 
    }
    elweek.appendChild( elementDay( date ) );
    if(weekNumber == 6){
        agenda.appendChild( elweek );
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
    } else {
        el.className = 'day void';
    }
    return el;
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
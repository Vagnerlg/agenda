const agenda = document.querySelector('.dias');

const today = new Date();
const dayTime = 60 * 60 * 24 * 1000;

const btnAfter = document.querySelector('.btn-alter-month');
btnAfter.addEventListener('click',changeMonth);
const btnBefore = document.querySelector('.btn-before-month');
btnBefore.addEventListener('click',changeMonth);

function elementMonth( date ){
    agenda.innerHTML = '';
    const month = date.getMonth();
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
        if( today.getDate() == date.getDate() && today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth() ) {
            el.className = 'day today';
        } else if( today.getTime() > date.getTime() ) {
            el.className = 'day after';
        }
    } else {
        el.className = 'day void';
    }
    if(el.className == 'day' || el.className == 'day today'){
        el.addEventListener('click', elHours );
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
    const titulo = document.querySelector('.titulo-head');
    const alterDate = new Date(date.getFullYear(),date.getMonth());
    alterDate.setMonth(date.getMonth() - 1);
    const beforeDate = new Date(date.getFullYear(),date.getMonth());
    beforeDate.setMonth(date.getMonth() + 1);
    btnAfter.value = alterDate.getFullYear() + '-' + alterDate.getMonth();
    btnBefore.value = beforeDate.getFullYear() + '-' + beforeDate.getMonth();
    titulo.innerHTML = mesString[date.getMonth()]  + " de " + date.getFullYear();
}

function elHours(ev){
    let divHoras = document.querySelector('.horas');
    let horasTitulo = document.querySelector('.horas-titulo');
    horasTitulo.innerHTML = "Horas do dia "+ev.target.innerHTML;
    horasTitulo.style.display = 'block';
    divHoras.innerHTML = '';
    divHoras.innerHTML0= ev.target.innerHTML;
    for (var i = 0; i < 24; i++) {
        elHour( divHoras, i );
    }
}

function elHour( el, hour ){
    const elHour = document.createElement('div');
    elHour.className = 'hour';
    elHour.innerHTML = hour+':00';
    el.appendChild(elHour);
}

function changeMonth(ev) {
    
    if(!ev) {
        const date = new Date();
        date.setDate(1);
        tituloAgenda( date );
        elementMonth( date );
    } else {
        let stringDate = ev.target.value;
        let strDate = stringDate.split('-');
        const date = new Date(strDate[0],strDate[1],1);
        tituloAgenda( date );
        elementMonth( date );
    }
}

changeMonth();
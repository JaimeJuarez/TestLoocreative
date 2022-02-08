import React, {useState} from 'react';

export default function Timer() {
    var [TimerActives, setTimerActive] = useState('0');
        const getTime = () =>{
            var hoy = new Date();
            var hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
            console.log(hora);
            TimerActives = hora
            return TimerActives
        }
        ;
        return(
            <div className="timer">
                <h1>
                   {getTime()}
                </h1>
            </div>
        )

}

import React from 'react';

export default function Timer() {
        const getTime = () =>{
            var hoy = new Date();
            var hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
            return  hora
        }
        
        ;
        return(
            <div className="timer">
                <h1> 
                   {setInterval(getTime(),1000)} 
                </h1>
            </div>
        )

}

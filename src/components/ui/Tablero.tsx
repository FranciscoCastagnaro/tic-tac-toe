import { useState } from "react";
import { Square } from "./Square";
/* eslint-disable @typescript-eslint/no-unused-vars */


export const Tablero = () => {

    const Players = {
        X: 'X',
        O: 'O'
    };

    const [tablero, setTablero] = useState([[null, null, 'X'], [null, null, null], [null, null, null]]);

    return (

            <section className="w-full h-64 grid grid-cols-3 grid-rows-3 gap-3" >
                {
                    tablero.map((fila, index) => (
                        
                        fila.map((square, index) => (

                            <Square val={square} index={index} />

                        ))

                    ))
                }
            </section>

    )

}
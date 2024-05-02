import { useState, useEffect } from "react"
import { Square } from "./Square"

export const Tablero = () => {

    const Players = {

        X: 'X',
        O: 'O'

    }
    
    const [tablero, setTablero] = useState([
                                            ['', '', ''], 
                                            ['', '', ''], 
                                            ['', '', '']
                                            ])

    const [jugador, setJugador] = useState(Players.O)

    const [partidaActiva, setPartida] = useState(true);

    const [ganador, setGanador] = useState('');

    const handleTablero = (filaIndex, columnaIndex) => {

        if(tablero[filaIndex][columnaIndex] != '') return

        const newTablero = tablero.map((fila) => [...fila]);
        newTablero[filaIndex][columnaIndex] = jugador;

        setTablero(newTablero);

    }

    const juegoTerminado = () => {

        // Verificar si hay un ganador en las filas
        for (let i = 0; i < 3; i++) {
            if (tablero[i][0] === tablero[i][1] && tablero[i][0] === tablero[i][2] && tablero[i][0] !== '') {
                return tablero[i][0];
            }
        }
    
        // Verificar si hay un ganador en las columnas
        for (let j = 0; j < 3; j++) {
            if (tablero[0][j] === tablero[1][j] && tablero[0][j] === tablero[2][j] && tablero[0][j] !== '') {
                return tablero[0][j];
            }
        }
    
        // Verificar si hay un ganador en las diagonales
        if ((tablero[0][0] === tablero[1][1] && tablero[0][0] === tablero[2][2]) || 
            (tablero[0][2] === tablero[1][1] && tablero[0][2] === tablero[2][0])) {
            return tablero[1][1];
        }
    
        // Si no hay ganador, verificar si el tablero está lleno (empate)
        let tableroLleno = true;
        for (let fila of tablero) {
            for (let valor of fila) {
                if (valor === '') {
                    tableroLleno = false;
                    break;
                }
            }
        }
        if (tableroLleno) {
            return 'empate';
        }
    
        // Si no hay ganador ni empate, devolver false
        return false;
    };
    
    const clearTablero = () => {

        setTablero([
                    ['', '', ''], 
                    ['', '', ''], 
                    ['', '', '']
                    ])

        setGanador('')

        setPartida(true)

        setJugador(Players.O)

    }

    useEffect(() => {
        
        setJugador(jugador === Players.X ? Players.O : Players.X);
        
        const newGanador = juegoTerminado();
        if (newGanador) {
            setPartida(false)
            if(newGanador == 'empate'){
                setGanador('Hubo un empate!')
            }else{
                setGanador(`Felicidades al jugador ${newGanador}!`)
            }
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tablero])

    return(
        <main className="w-96 h-[30rem] px-9 py-16 bg-slate-800 rounded-md grid grid-cols-1 grid-rows-3 shadow-2xl">
            
            <header className="text-center colspan-1 self-center mb-12">
                <h1 className="text-2xl font-bold text-emerald-300">Tic-Tac-Toe</h1>
                <h3 className="text-md text-white">A ReactJS learning proyect</h3>
                <button 
                    className="mt-3 bg-emerald-600 p-2 text-white rounded-md hover:700"
                    onClick={clearTablero}
                >
                    Reiniciar
                </button>

                <h3 className="m-3 text-2xl font-bold text-white">
                    {ganador ? 
                        ganador 
                        : ''}
                </h3>

            </header>

            <div className="row-span-2 grid grid-cols-3 grid-rows-3 gap-2">
                {tablero.map((fila, filaIndex) =>

                    fila.map((valor, columnaIndex) => {

                        //Calculo del indice de cada Square
                        const index = filaIndex * 3 + columnaIndex;

                        return (
                            <Square
                                key={index}
                                value={valor}
                                filaIndex={filaIndex}
                                columnaIndex={columnaIndex}
                                onclick={handleTablero}
                                partidaActiva={partidaActiva}
                            />
                        );

                    })

                )}
            </div>

        </main>
    )

}
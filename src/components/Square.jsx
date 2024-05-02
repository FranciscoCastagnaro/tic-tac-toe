import PropTypes from 'prop-types';

export const Square = ({value, filaIndex, columnaIndex, onclick, partidaActiva}) => {

    const handleClick = () => {
        onclick(filaIndex, columnaIndex);
    };

    return(

            <button 
            className="w-full h-full m-auto bg-emerald-600 rounded-md hover:bg-emerald-700 text-xl font-bold text-white"
            onClick={handleClick}
            disabled={!partidaActiva}
            >
                {value}
            </button>

    )

}

Square.propTypes = {
    value: PropTypes.string.isRequired,
    filaIndex: PropTypes.number.isRequired,
    columnaIndex: PropTypes.number.isRequired,
    onclick: PropTypes.func.isRequired,
    partidaActiva: PropTypes.bool.isRequired
};
// imr Para importar react
import React from 'react';

// sfc importar  Stateless Function Component
const Resultado = (props) => {
    return ( 
        <div className="u-full-width resultado">
            <h2>Resultados</h2>
            <p>La Cantidad solicitada fue: ${props.cantidad}</p>
            <p> A pagar en: {props.plazo} Meses</p>
            <p> Total a pagar: ${props.total} Meses</p>
            <p> Su pago mensual es de: $ { (props.total / props.plazo).toFixed(2) }</p>
        </div>
     );
}
 
export default Resultado;
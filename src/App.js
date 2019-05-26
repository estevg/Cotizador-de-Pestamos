import React, { Component, Fragment } from 'react';
import './normalize.css';
import './skeleton.css';

import Formulario from './componente/Formulario';
import { calcularTotal } from './helpers';
import Resultado from './componente/Resultado';
import Mensaje from './componente/Mensaje';
import Spinner from './componente/Spinner';

class App extends Component {
  state = { 
    total: '',
    cantidad: '',
    plazo: '',
    cargando: false
  }

  

  datosPrestamos = (cantidad, plazo) => {

    const total = calcularTotal(cantidad, plazo);
    // console.log(total);

    // Colocar el resultado en el State Total Cantidad y el plazo
    this.setState({
        cargando: true
    }, () => {
      setTimeout(() =>{
          this.setState({
            total,
            cantidad,
            plazo,
            cargando: false
          })
      }, 3000)
    })
  }

  render() { 
    const { total, plazo, cantidad, cargando } = this.state;

    // Cragar el componente condicionalmente
    let componente;
    if(total === '' && !cargando){
      componente =  <Mensaje />
    } else if(cargando){
      componente = <Spinner />
    } else {
      componente = <Resultado 
                    total={total}
                    plazo={plazo}
                    cantidad={cantidad}
                  />
    }

    return ( 
      <Fragment>
        <h1>Cotizador de Prestamos</h1>
        <div className="container">
            <Formulario 
              datosPrestamos={this.datosPrestamos}
            />
            <div className="mensajes">
              {componente}

            </div>
        </div>
      </Fragment>
     );
  }
}
 
export default App;

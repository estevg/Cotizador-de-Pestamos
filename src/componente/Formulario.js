// imrc Para importar react component
import React, { Component } from 'react';


// cc Para crear el class Component
class Formulario extends Component {
    state = { 
        cantidad: '',
        plazo: ''
     }
     
     calcularPrestamo = (e) => {
        e.preventDefault();
        // Aplicar Destructuring
        const {cantidad, plazo } = this.state;

        // Pasar al elemento padre
        this.props.datosPrestamos(cantidad, plazo);
     }

    //  De esta forma se crean los metodos con un arrow Funtion
     actualizarState = (e) => {
         // Leer los datos del formulario
        //  console.log( e.target.value );
        
         // Crear un distructuring
         const {name, value} = e.target;

         // No actualizar el State de esta forma
            // this.state.cantidad = e.target.value;


        this.setState({
            [name] : Number(value)
        })
     }

     habilitarSubmit = () =>{
         // Aplicar destructuring 
        const { cantidad, plazo} = this.state;
        // Lerr las Variables
        const noValido = !cantidad || !plazo;

        // console.log(noValido);

        return noValido;

     }


    render() { 
        return ( 
            <form onSubmit={this.calcularPrestamo}>
                <div>
                    <label>Cantidad del prestamo:</label>
                    {/* Se coloca a cada input un evento y los eventos en React empiezan por On por ejemplo onChange, onClick */}
                    <input  onChange={ this.actualizarState }
                            type="number" 
                            name="cantidad" 
                            className="u-full-width" 
                            placeholder="Ejemplo: 3000" />
                </div>
                <div>
                    <label>Plazo para pagar:</label>
                    <select onChange={ this.actualizarState }
                            name="plazo" className="u-full-width">
                        <option value="">Seleccionar..</option>
                        <option value="3"> 3 Meses</option>
                        <option value="6"> 6 Meses</option>
                        <option value="12"> 12 Meses</option>
                        <option value="24"> 24 Meses</option>
                    </select>
                </div>
                <div>
                    <input  disabled={this.habilitarSubmit()}
                            type="submit" 
                            value="Calcular" 
                            className="u-full-width button-primary" />
                </div>
            </form>
         );
    }
}
 
export default Formulario;
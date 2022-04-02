import React, { Component } from "react";

//Componente de clase // Cada componente maneja su estado
export default class Recordatorio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const { opcionesAnteriores } = this.props;

    return (
      <div className="recordatorio">
        <h3>Selección anterior:{opcionesAnteriores}</h3>
        <h4>Historial de opciones elegidas: </h4>

        <ul>
          {this.props.arrayOpciones.map((elemento, index) => {
            return <li key={index}>{elemento}</li>;
          })}
        </ul>
      </div>
    );
  }
}

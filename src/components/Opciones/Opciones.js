import React, { Component } from "react";

//Componente de clase
export default class Opciones extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handlers, opciones } = this.props;
    //console.log(handles);
    if (this.props.identificador < 5) {
      return (
        <div className="opciones">
          <div className="opcion">
            <button id="A" className="botones" onClick={handlers.fcionA}>
              A
            </button>
            <h2>{opciones.a}</h2>
          </div>

          <div className="opcion">
            <button id="B" className="botones" onClick={handlers.fcionB}>
              B
            </button>
            <h2>{opciones.b}</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="opciones">
          <div className="opcion">
            <button
              id="A"
              className="botones"
              onClick={() => alert("Tu aventura ha finalizado")}
            >
              Finalizar tu aventura.
            </button>
          </div>

          
        </div>
      );
    }
  }
}

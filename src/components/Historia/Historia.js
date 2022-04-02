import React, { Component } from "react";
import Opciones from "../Opciones/Opciones";
import Recordatorio from "../Recordatorio/Recordatorio";
import Datos from "../../json/data.json";

//console.log(Datos);

//Componente de clase
export default class Historia extends Component {


  constructor(props) {
    super(props);
    //Creo mis estados
    this.state = {
      identificador: 1,
      id: "1",
      //En el array voy a guardar mis opciones anteriores elegidas
      arrayOpciones: [],
    };
  }
  //Metodo del ciclo de vida

  componentDidUpdate = (prevProps, prevState) => {
    const { identificador, id, arrayOpciones } = this.state;
    
    if (prevState.identificador !== identificador && identificador <= 5) {
        arrayOpciones.push(id.substring(1).toUpperCase());
    }
  };



  handleOpcionA = () => {
    const { identificador } = this.state;

    if (identificador < 5) {
      //aqui complemento el cambio de mi estado
      this.setState(
        {
        identificador: identificador + 1,
        id: identificador + 1 + "a",     
      }
      );
    }
  };


  handleOpcionB = () => {
    const { identificador } = this.state;
    if (identificador < 5) {
      //aqui complemento el cambio de mi estado
      this.setState(
        {
        identificador: identificador + 1,
        id: identificador + 1 + "b",
        
      }
      );
    }
  };

  render() {

    //comienzo a utilizar mi json
    const {id, arrayOpciones} = this.state;
    const filtrarDatos = Datos.find( (objeto) => objeto.id.includes(id))
    console.log({filtrarDatos});

    let handlers = {
      fcionA: this.handleOpcionA,
      fcionB: this.handleOpcionB,
    };

    return (
      <div className="layout">
        <h1 className="historia">{filtrarDatos.historia}</h1>

        <Opciones 
        handlers = {handlers}
        opciones ={filtrarDatos.opciones}
        identificador={this.state.identificador}
        />

        <Recordatorio 
        opcionesAnteriores = {id.substring(1).toUpperCase()}
        arrayOpciones = {arrayOpciones}
        />
      </div>
    );
  }
}


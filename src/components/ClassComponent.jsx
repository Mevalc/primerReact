import React from "react"; //esto es para que herede de react las propiedades la clase component que voy a crear
//tambien se puede poner import {Component} from 'react' y en la linea del export quedaría
//export default class ClassComponent extends Component


//hay que exportar cada vez que creamos un component
export default class ClassComponent extends React.Component {
  //render:envía todo al DOM, renderiza los elementos que retorne
  render() {
    return (
      <div>
        <h1>Buenass</h1>
      </div>
    )
  }
};

//El export default solo le puede poner a 1 componente de los que tenga en el archivo donde
//estoy trabajando
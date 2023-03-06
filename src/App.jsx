import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//hay que importar cada vez que creamos un componente
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'
import Card from './components/Card'

function App() {
  let elementos =[11,22,33]
//<> es como un div vacio y lo uso cuando quiero contener cosas que no necesitan estilos
//las propiedades van entre {} en este caso creé una propiedad llamada elemento
  return (
    <>  
        <ClassComponent/>     
        <FuncComponent/>
        <Card elemento ={elementos[0]}/>  
        <Card elemento ={elementos[1]}/>
        <Card elemento ={elementos[2]}/>


    </>
  )
}

export default App

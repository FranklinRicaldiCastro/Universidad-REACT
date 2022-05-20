import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/propiedades'
import Estado from './components/Estado'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola Soy un Componente Funcional Expresado desde una Prop"/>
          <hr/>
          <Propiedades
          cadena="Esto es una cadena de texto"
          numero={19}
          booleano={false}
          arreglo={[1,2,3]}
          objeto={{nombre:"Franklin", correo:"fricaldic@gmail.com"}}
          funcion={(num)=>num*num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={<Componente msg="Soy un componente pasado como Prop"/>}
          />
          <hr/>
          <Estado />
        </section>
      </header>
    </div>
  );
}

export default App;
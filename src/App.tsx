import React,{useState} from 'react';
import styled from '@emotion/styled';
import { Header } from './components/Header';
import Formulario, {Iseguro} from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';


interface IResumen{
  cotizacion: number,
  datos :Iseguro
}

const Contenedor = styled.div `
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div `
  background-color : #ffffff;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState <IResumen>({
    cotizacion : 0,
    datos:{
      marca: '',
      year: '',
      plan: ''
    }
  });


 const [cargando, setCargando] = useState(false);
  //extraer datos
  const {cotizacion, datos} = resumen;

  return (
    <Contenedor>
      <Header
        titulo = 'Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen = {guardarResumen}
          setCargando = {setCargando}
        />
        { cargando ? <Spinner/> : null }

        <Resumen
          datos={datos}
        />
        { !cargando
          ?
            <Resultado
                cotizacion = {cotizacion}
            />
          : null
        }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;


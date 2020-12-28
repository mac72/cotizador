import React, {useState} from 'react';
import styled from '@emotion/styled';
import {getDifYear,calcularMarca, getPlan} from '../helper';

interface IFormularioProps {
  guardarResumen : Function,
  setCargando : Function,
}

export interface Iseguro{
  marca: string,
  year : string,
  plan : string
}
const Campo = styled.div `
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label `
  flex: 0 0 100px;
`;
const Select = styled.select `
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input `
  margin: 0 1rem;
`;

const Button = styled.button `
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;
  &:hover{
    transition: background-color .3s ease;
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div `
  background-color: red;
  color : white;
  padding: 1rem;
  width:100%;
  text-align: center;
  margin-bottom:2rem;
`;

function setYears(){

  let fecha = new Date();
  let yearActual = fecha.getFullYear()
  let years:number[] = [];

  for(let i = yearActual; i > yearActual - 20; i--){
    years.push(i);
  }
  return(
    years.map(year => <option value={year} key={year}>{year}</option>)
  );

}
const Formulario = ({guardarResumen, setCargando}:IFormularioProps) : JSX.Element => {

  const[datos,guardarDatos]= useState<Iseguro>({
    marca: '',
    year: '',
    plan : ''
  });

  const [error, guardarError] = useState<boolean>(false)

  //extrae los valores del state
  const {marca, year, plan } = datos;

  //leer datos del formulario y colocarlos en el state

  const obtenerInformacion = (e:React.ChangeEvent) =>{
    const elemento = e.target as HTMLFormElement;
    guardarDatos({
      ...datos,
      [elemento.name] : elemento.value
    })
  }
  //cuando el usuario presiona submit
  const cotizarSeguro = (e:React.FormEvent) =>{
    e.preventDefault();
    if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
      guardarError(true);
      return;
    }
    guardarError(false);
    //una base de 2000
    let resultado = 2000;
    //obtener la diferencia de años
    const diferencia = getDifYear(Number(year));
    //por cada año hay que restar el 3%
    resultado -=(0.03 * resultado * diferencia);
    //americano 15% Asiatico 5% Europeo 30%
    resultado *= calcularMarca(marca);
    //basico 20% completo 50%
    resultado *= getPlan(plan);

    setCargando(true);
    setTimeout(()=>{
      setCargando(false);
      guardarResumen({
        cotizacion: parseFloat(String(resultado)).toFixed(2),
        datos
      })
    },1500)
  }

  return (
    <form
      onSubmit={(e):void => cotizarSeguro(e)}
    >
      {error ? <Error>Todos los campos son obligatorios</Error>: null}
      <Campo>
        <Label>Marca</Label>
        <Select
          name="marca"
          value={marca}
          onChange= {(e): void => obtenerInformacion(e)}
        >
          <option value="">--- Selecione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select
          name="year"
          value={year}
          onChange= {(e): void => obtenerInformacion(e)}
        >
          <option value="">--- Selecione --</option>
          {setYears()}
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type ="radio"
          name = "plan"
          value = "basico"
          checked = {plan === "basico"}
          onChange= {(e): void => obtenerInformacion(e)}
        />Básico
        <InputRadio
          type ="radio"
          name = "plan"
          value = "completo"
          checked = {plan === "completo"}
          onChange= {(e): void => obtenerInformacion(e)}
        />Completo
      </Campo>
      <Button type = "submit">Cotizar</Button>
    </form>
  );
}

export default Formulario;

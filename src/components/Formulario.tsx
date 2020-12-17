// @flow
import React, {useState} from 'react';
import styled from '@emotion/styled';

export interface IFormularioProps {

}

interface Iseguro{
  marca: string,
  year : number | string,
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

function setYears(){

  let fecha = new Date();
  let yearActual = fecha.getFullYear()
  let years:number[] = [];

  for(let i = yearActual; i > yearActual - 20; i--){
    years.push(i);
  }
  return(
    years.map(year => <option value={year}>{year}</option>)
  );

}
const Formulario = (prosp:IFormularioProps) : JSX.Element => {

  const[datos,guardarDatos]= useState<Iseguro>({
    marca: '',
    year: '',
    plan : ''
  });

  //extrae los valores del state
  const {marca, year, plan } = datos;

  //leer datos del formulario y colocarlos en el state

  const obtenerInformacion = (e:React.ChangeEvent) =>{
    const elemento = e.target as HTMLFormElement;
    console.log(elemento)
    guardarDatos({
      ...datos,
      [elemento.name] : elemento.value
    })
  }

  return (
    <form>
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
      <Button type = "button">Cotizar</Button>
    </form>
  );
}

export default Formulario;

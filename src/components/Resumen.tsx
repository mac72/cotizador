import React, {Fragment} from 'react'
import styled from '@emotion/styled';
import {Iseguro} from './Formulario'
export interface IResumenProps {
 datos  : Iseguro;
}

const ContenedorResumen = styled.div `
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;

`;

const Resumen = ({datos} : IResumenProps) => {
  const {marca, year, plan} = datos

  if(marca === '' || year === '' || plan === '') return null;
  return (
   <ContenedorResumen>
    <h2>Resumen de Cotización</h2>
    <ul>
        <li>Marca: {marca.charAt(0).toLocaleUpperCase()+marca.slice(1)}</li>
        <li>Plan: {plan.charAt(0).toLocaleUpperCase()+plan.slice(1)}</li>
        <li>Año del Auto: {year}</li>
    </ul>
   </ContenedorResumen>
  );
}

export default Resumen;

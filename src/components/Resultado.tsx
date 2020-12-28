import React from 'react'
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export interface IResultadoProps {
  cotizacion:number
}

const Mensaje = styled.p `

  background-color: rgb(127,224,237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;

`;

const ResultadoCotizacion = styled.div `
  text-align: center;
  padding: .5rem;
  border: 1px soloid #26c6da;
  background-color: rgb(127,224,237);
  margin-top: 1rem;
  position: relative;

`;

const Cotizacion = styled.p `
  color: #00838f;
  margin-top : 2rem;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-weight : bold;
  margin: 0;

`;

const Resultado =( {cotizacion} :IResultadoProps) => {

  return (
    (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
                      : (
                          <ResultadoCotizacion>
                            <TransitionGroup
                              component = "p"
                              className = "resultado"
                            >
                              <CSSTransition
                                classNames= "resultado"
                                key = {cotizacion}
                                timeout={{enter: 500, exit:500}}
                              >
                                <Cotizacion> El total es: $ {cotizacion}</Cotizacion>
                              </CSSTransition>

                            </TransitionGroup>
                          </ResultadoCotizacion>
                        )
  );
}

export default Resultado;

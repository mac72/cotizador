
// @flow
import React from 'react';
import styled from '@emotion/styled';


const ContenedorHeader = styled.header `
  background-color : #26c6da;
  padding: 10px;
  font-weight : bold;
  color : #FFFFFF;
`;

const TextoHeader = styled.h1 `
  font-size : 2 rem;
  margin: 0;
  font-family: 'Slabo 27px', serif;
  text-align: center;

`;

type HeaderProps = {
  titulo : string
};

export  const Header = ({titulo}: HeaderProps) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};

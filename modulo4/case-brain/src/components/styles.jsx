import styled from "styled-components";

export const Image = styled.img`
  max-height: 50px;
`;

export const Nomesorteio = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
`

export const ConcursoSt = styled.p`
  margin: 0;
  color:  #FFFFFF;
  font-size: 14px;
  text-transform: uppercase;
`

export const DataConc = styled.p`
  color:  #FFFFFF;
  margin: 0;
  font-weight: 900;
  font-size: 20px;
`
export const Menu = styled.div`
margin-top: 20px;
  max-width: 150px;
  display: flex;
  align-items: center;
  padding: 15px;
  background: #FFFFFF url(${'https://i.imgur.com/hDF5lcX.png'}) 100% 50% no-repeat;
  border-radius: 100px;
`
export const Opcoes = styled.select`
  text-transform: uppercase;
  width: 100%;
  font-size: 15px;
  -webkit-appearance: none;
  appearance:         none;
  background: none;
  -moz-appearance:    none;
  border: none;
`
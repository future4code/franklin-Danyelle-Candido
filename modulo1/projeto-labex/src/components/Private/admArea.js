import React from "react";
import styled from "styled-components";

const AdmContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:pink;
`


function AdmArea() {
  return (
    <AdmContainer >
      <p>Area administrativa </p>
    </AdmContainer>
  );
}

export default AdmArea;

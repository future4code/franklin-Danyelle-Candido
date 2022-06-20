import React from "react";
import styled from "styled-components";


const TravelContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color: green;
`

function TravelList() {
  return (
    <TravelContainer >
      <p>hello</p>
    </TravelContainer>
  );
}

export default TravelList;

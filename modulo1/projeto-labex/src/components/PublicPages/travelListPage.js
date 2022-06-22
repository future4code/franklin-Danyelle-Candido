import React from "react";
import styled from "styled-components";


const TravelContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color: green;
`

function TravelListPage() {
  return (
    <TravelContainer >
      <p>Travel List</p>
    </TravelContainer>
  );
}

export default TravelListPage;

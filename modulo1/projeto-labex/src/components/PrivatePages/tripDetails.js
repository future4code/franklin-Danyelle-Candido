import React from "react";
import styled from "styled-components";

const TripDetailsContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:blueviolet;
`
function TripDetails() {
  return (
    <TripDetailsContainer >
      <p>Trip Details</p>
    </TripDetailsContainer>
  );
}

export default TripDetails;

import React from "react";
import styled from "styled-components";

const CreateTripContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:blue;
`


function CreateTripPage() {
  return (
    <CreateTripContainer >
      <p>Create Trip Container</p>
    </CreateTripContainer>
  );
}

export default CreateTripPage;

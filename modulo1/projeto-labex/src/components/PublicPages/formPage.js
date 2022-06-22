import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:palevioletred;
`


function ApplicationFormPage() {
  return (
    <FormContainer >
      <p>Application Form</p>
    </FormContainer>
  );
}

export default ApplicationFormPage;

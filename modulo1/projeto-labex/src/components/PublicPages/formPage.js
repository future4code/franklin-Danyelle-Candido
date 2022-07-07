import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {goBack,goToProducts } from '../../router/coordinator'

const FormContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:palevioletred;
`


function ApplicationFormPage() {

  const navigate = useNavigate()

  return (
    <FormContainer >
      <h1>Formulário de Cadastro</h1>

      <form>
        <label>
          Escolher Viagem:<input type="text" name="name" />
        </label>
        <label>
          Nome:<input type="text" name="name" />
        </label>
        <label>
          Idade:<input type="text" name="name" />
        </label>
        <label>
          descrição:<input type="text" name="name" />
        </label>
        <label>
          profissão:<input type="text" name="name" />
        </label>
        <label>
          país:<input type="text" name="name" />
        </label>
        <div>
          <button onClick={()=>goToProducts(navigate)}>Enviar</button>
          <button onClick={()=>goBack(navigate)}>voltar</button>
        </div>
      </form>
  

    </FormContainer>
  );
}

export default ApplicationFormPage;

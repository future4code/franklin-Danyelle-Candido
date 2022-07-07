import React, { useEffect } from "react";
import styled from "styled-components";
import {useNavigate, useParams } from "react-router-dom";
import {goBack } from '../../router/coordinator'
import axios from "axios";
import { useEffect } from "react";

const TripDetailsContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:blueviolet;
`
export const TripContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
`




function TripDetailsPage() {
  useProtectedPage()
  const params = useParams()
  const trip= useRequestData([], `${BASE_URL}/{token}/trip/${params.id}`)[0]

  return (
      <TripDetailsContainer>
          {recipe ?
              <TripContainer>
                  <RecipeImage src={recipe.image} />
                  <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
                  <Typography align={'center'}>{recipe.description}</Typography>
              </TripContainer>
          :
              <Loading/>
          }
      </TripDetailsContainer>
  )
}

export default TripDetailsPage;

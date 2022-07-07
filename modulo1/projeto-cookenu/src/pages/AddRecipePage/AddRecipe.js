import React from "react";
import useProtectedPage from "../../hooks/useProtectPage";
import {RecipeContainer, ScreenContainer} from './styled'
import AddRecipeForm from "../../components/AddRecipeForm";
import { Typography } from "@mui/material";

function AddRecipe() {
    useProtectedPage()

    return (
      <ScreenContainer>
        <RecipeContainer>
          <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Receita</Typography>
          <AddRecipeForm/>
        </RecipeContainer>
      </ScreenContainer>
    )
  }

export default AddRecipe;
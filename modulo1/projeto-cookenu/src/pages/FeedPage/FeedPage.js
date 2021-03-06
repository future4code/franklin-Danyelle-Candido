import React from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useProtectedPage from "../../hooks/useProtectPage";
import { RecipeListContainer, AddRecipeButton } from './styled';
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { Add } from "@mui/icons-material";
import { goToAddRecipes, goToRecipeDetail } from "../../Router/coordinator";
import Loading from "../../components/Loading/Loading"

function FeedPage() {
  useProtectedPage()
  const navigate = useNavigate()
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

  const onClickCard = (id) => {
    goToRecipeDetail(navigate, id)
  }

  const recipeCards = recipes && recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    )
  })

  return (
    <RecipeListContainer>
      {recipeCards.length > 0 ? recipeCards : <Loading />}
      <AddRecipeButton
        color={"primary"}
        onClick={() => goToAddRecipes(navigate)}
      >
        <Add />
      </AddRecipeButton>
    </RecipeListContainer>
  )
}

export default FeedPage;
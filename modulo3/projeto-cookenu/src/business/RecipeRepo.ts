import { Recipe } from "../models/Recipe"

export interface RecipeRepository {
    createRecipe(recipe: Recipe): Promise<void>
    selectRecipeById(id: string): Promise<Recipe>
}
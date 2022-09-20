import { IRecipeDB,Recipe } from "../models/Recipe"
import { BaseDatabase } from "./BaseDatabase"

export class RecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPE = "cookenurecipe"
    
    public createRecipe = async (recipe: Recipe) => {
        const recipeDB: IRecipeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            createdAt: recipe.getCreatedAt(),
            authorId: recipe.getAuthorId()
        } 
        await BaseDatabase
        .connection(RecipeDatabase.TABLE_RECIPE)
        .insert(recipeDB)
    }

    public SelectById = async (id: string) => {
        const recipeDB: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPE)
            .select("id", "name", "email")
            .where({ id })
            .into(RecipeDatabase.TABLE_RECIPE)

        return recipeDB[0]
    }

}
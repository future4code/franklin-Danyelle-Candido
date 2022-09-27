import { Router } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { RecipeController } from "../controller/RecipeController";

export const recipeRouter = Router()
const recipeController = new RecipeController(
    new RecipeBusiness(
        new RecipeDatabase()
    )
)

recipeRouter.post("/recipe", recipeController.createRecipeController)
recipeRouter.get("/recipe/:id", recipeController.recipeByIdController)

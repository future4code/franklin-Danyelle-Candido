import moment from "moment";
import { Recipe, RecipeInputDTO } from "../models/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { RecipeRepository } from "./RecipeRepo";

export class RecipeBusiness {
    constructor(private recipeDataBase: RecipeRepository) { }

    async createRecipeBusiness(input: RecipeInputDTO) {
        try {

            const { title, description, token } = input

            if (!token) {
                console.log("token invalido")
            }

            if (!title || !description) {
                console.log("titulo e descrição invalido")
            }

            const authenticatorData = new Authenticator().getTokenPayload(token)

            if (!authenticatorData) {
               console.log ("Unauthorized user")
            }

            const id = new IdGenerator().generate()
            const createdAt = new Date() as any

            const recipe: Recipe = {
                id,
                title,
                description,
                createdAt,
                authorId: authenticatorData
            }

            await this.recipeDataBase.createRecipe(recipe)


        } catch (error: any) {
            console.log(error.statusCode, error.sqlMessage || error.message);
        }
    }

    async recipeByIdBusiness(id: string, token: string) {
        try {

            if (!token) {
                console.log("token invalido")
            }

            const authenticatorData = new Authenticator().getTokenPayload(token)

            if (!authenticatorData) {
                console.log("autenticação id")
            }

            const recipe = await this.recipeDataBase.selectRecipeById(id)

            if (!recipe) {
                console.log("receita invalida")
            }

            recipe.createdAt = moment(recipe.createdAt).format("DD/MM/YYYY")

            return recipe
        } catch (error: any) {
            console.log(error.statusCode, error.sqlMessage || error.message);
        }
    }
}
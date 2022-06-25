import React from "react";

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSingUp = (navigate) => {
    navigate("/singup")
}

export const goToAddRecipes = (navigate) => {
    navigate('recipe')
}

export const goToRecipeDetail = (navigate) => {
    navigate('recipe/id')
}

export const goToRecipesList = (navigate) => {
    navigate('/')
}

export const goBack = (navigate) => {
    navigate(-1)
}
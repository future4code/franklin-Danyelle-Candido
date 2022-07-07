export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSingUp = (navigate) => {
    navigate("/singup")
}

export const goToAddRecipes = (navigate) => {
    navigate('/recipe')
}

export const goToRecipeDetail = (navigate, id) => {
    navigate(`/recipe/${id}`)
}

export const goToRecipesList = (navigate) => {
    navigate('/')
}

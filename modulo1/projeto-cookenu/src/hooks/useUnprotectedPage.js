import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToRecipesList } from "../Router/coordinator"

const useUnprotectedPage = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            goToRecipesList(navigate)
        }
    }, [navigate])
}

export default useUnprotectedPage;
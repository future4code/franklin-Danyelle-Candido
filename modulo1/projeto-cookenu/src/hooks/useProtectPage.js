import { useNavigate } from "react-router-dom"
import { goToLogin } from "../Router/coordinator"
import { useEffect } from "react"

const useProtectedPage = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            goToLogin(navigate)

        }
    }, [navigate])
}

export default useProtectedPage;
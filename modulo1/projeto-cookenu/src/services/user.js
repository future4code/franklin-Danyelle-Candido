import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipesList } from "../Router/coordinator";

export const login = (body,clear,navigate,setRightButtonText, setIsLoading) =>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/login`,body)
    .then((resp)=>{
      localStorage.setItem("token", resp.data.token)
      clear()
      setIsLoading(false)
      goToRecipesList(navigate)
      setRightButtonText("Logout")
    })
    .catch((err) => { setIsLoading(false)
      alert(err.response.data.message)
    })
}

export const singUp= (body,clear,navigate,setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`,body)
    .then((resp)=>{
      localStorage.setItem("token", resp.data.token)
      clear()
      setIsLoading(false)
      goToRecipesList(navigate)
      setRightButtonText("Logout")

    })
    .catch((err) => {
      setIsLoading(false)
      alert(err.response.data.message)
  })
}
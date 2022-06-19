import axios from "axios";
import React, {useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const[listaDeUsuarios,setlistaDeUsuarios]=useState([])
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputNameSearch, setInputNameSearch] = useState('')

  const listarUsuarios = () => {
   axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
    headers:{
      Authorization:'danyelle-candido-franklin'
    }
   }).then((response)=>{
    console.log(response.data)
    setlistaDeUsuarios(response.data)
   }).catch((error)=>{console.log(error.code)
    console.log(error.message)})
  }

  const criarUsuario = () =>{
    const body = {
      "name": inputName,
      "email":inputEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,{
      headers:{
        Authorization:'danyelle-candido-franklin'
      }
    }).then((response)=>{
      alert('usuário criado com sucesso')
      listarUsuarios()
     }).catch((error)=>{console.log(error.code)
      console.log(error.message)
      alert('erro na criação')})

  }

   const deletarUsuario =(idUsuario) =>{

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`, {
      headers:{
        Authorization:'danyelle-candido-franklin'
      }
    }).then((response)=>{
      alert('usuário deletado com sucesso')
      listarUsuarios()
     }).catch((error)=>{console.log(error.code)
      console.log(error.message)
      alert('erro ao deletar')})

  }

  const procurarUsuario =(setInputNameSearch) =>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?${setInputNameSearch}`, {
      headers:{
        Authorization:'danyelle-candido-franklin'
      }
    }).then((response)=>{
      console.log(response)
     }).catch((error)=>{console.log(error.code)
      console.log(error.message)
      })

  }

  const handleInputName =(e) => {
    setInputName(e.target.value)
  }

  const handleInputEmail =(e) =>{
    setInputEmail(e.target.value)
  }

  const handleNameSearch =(e) =>{
    setInputNameSearch(e.target.value)
  }

  useEffect(listarUsuarios,[])

  
  return (
    <div className="App">
        <input value={inputName} onChange={handleInputName}></input>
        <input value={inputEmail} onChange={handleInputEmail}></input>
        <button onClick={criarUsuario}>send</button>

        <input value={inputNameSearch} onChange={handleNameSearch}></input>       
        <button onClick={procurarUsuario}>search</button>

        {listaDeUsuarios.map((usuario) =>{
          return (
            <li key={usuario.id}>{usuario.name}<button onClick={() => deletarUsuario(usuario.id)}>X</button></li>
          )
        })}
    </div>
  );
}
 
export default App;

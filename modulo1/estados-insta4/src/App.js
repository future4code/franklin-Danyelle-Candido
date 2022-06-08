import React, {useState} from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';
//importando react o styled component e o component post

const MainContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
`
//estilizando a div  main Container
function App() {
  //a lista é feita dentro do estado atual da aplicação
  const [stateUser, setStateUser] = useState({
    //dentro da lista colocamos objetos invés de usar props
    Users: [
      {
      nomeUsuario:'Du',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
      },

      {
      nomeUsuario:'DuDu',
      fotoUsuario:'https://picsum.photos/40/40',
      fotoPost:'https://picsum.photos/200/151'
      },

      {
        nomeUsuario:'EDu',
        fotoUsuario:'https://picsum.photos/60/60',
        fotoPost:'https://picsum.photos/201/150'
      }
    ]
  });

  const [valorInputUser, setvalorInputUser] = useState("");
  const [valorInputFoto, setvalorInputFoto] = useState("");
  const [valorInputPost, setvalorInputPost] = useState("");

  const adicionaUser = () => {

    const novoUser = {
      nomeUsuario:valorInputUser,
      fotoUsuario:valorInputFoto,
      fotoPost:valorInputPost
    };
    const novosUsers = [...stateUser.Users, novoUser];
    setStateUser(novosUsers);
  };

  const onChangeInputUser = (event) => {
    setvalorInputUser(event.target.value);
  };

  const onChangeInputFoto = (event) => {
    setvalorInputFoto(event.target.value);
  };

  const onChangeInputPost = (event) => {
    setvalorInputPost(event.target.value);
  };
  const listarUsers = stateUser.Users.map((user) => {
    return (
      <Post
      nomeUsuario={user.nomeUsuario}
      fotoUsuario={user.fotoUsuario}
      fotoPost={user.fotoPost}
        />
    );
  });


return(
  <MainContainer>
    <input value={valorInputUser}
    onChange={onChangeInputUser}
    placeholder={"Nome"}/>
    <input value={valorInputFoto}
    onChange={onChangeInputFoto}
    placeholder={"Foto Perfil"}/>
    <input value={valorInputPost}
      onChange={onChangeInputPost}
      placeholder={"POST"}/>
    <button onClick={adicionaUser}>Adicionar</button>
    {listarUsers}
  </MainContainer>
)}

export default App;

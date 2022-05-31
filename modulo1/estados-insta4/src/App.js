import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
`
function App() {
return(
  <MainContainer>
    <Post
        nomeUsuario={'Du'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
          />
    <Post
        nomeUsuario={'DuDu'}
        fotoUsuario={'https://picsum.photos/40/40'}
        fotoPost={'https://picsum.photos/200/151'}
          />

    <Post
        nomeUsuario={'Edu'}
        fotoUsuario={'https://picsum.photos/60/60'}
        fotoPost={'https://picsum.photos/201/150'}
          />
    </MainContainer>
)}

export default App;

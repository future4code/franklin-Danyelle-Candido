import styled from 'styled-components';
import React,{useState} from 'react';
import './App.css';

const SendBar = styled.div`
  display:flex
  flex-direction: column;
  align-items: bottom;
`

function App() {

  const [chat, setChat] = useState([
    {
      nameUser:'hr',
      messageUser:'hhjkessage'
    },
    {
      nameUser:'vjhhser',
      messageUser:'jjhsage'
    }
  ]);
  const [valueInputNameUser, setvalueInputNameUser] = useState("");
  const [valueInputMessage, setvalueInputMessage] = useState("");
 
  const clear=()=>{
    setvalueInputNameUser('');
    setvalueInputMessage('');
  }

  const sendMessage = () => {
    const newChat ={
      nameUser:valueInputNameUser,
      messageUser:valueInputMessage
    };

    const fullChat = [...chat, newChat];

    setChat(fullChat);
    clear();


  };

  const HandleInputNameUser = (event) => {
    setvalueInputNameUser(event.target.value);
  };
  
  const HandleInputMessage = (event) => {
    setvalueInputMessage(event.target.value);
  };

 const whatsLab = chat.map((byUser) => {
   return(
     <p>
       {byUser.nameUser} : {byUser.messageUser}
    </p>
   );
 });

  return (
    <div className="App">
      <div>
        {whatsLab}
      </div>
      
      <SendBar>
        <input value={valueInputNameUser}
          onChange={HandleInputNameUser}
          placeholder={"Seu Nome"}/>
        <input value={valueInputMessage}
          onChange={HandleInputMessage}
          placeholder={"Sua Mensagem"}/>
        <button onClick={sendMessage}>Enviar</button>
      </SendBar>

    </div>
  );
}

export default App;

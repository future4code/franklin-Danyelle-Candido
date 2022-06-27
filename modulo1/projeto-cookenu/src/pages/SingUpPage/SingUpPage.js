import React from "react";
import {ScreenContainer, LogoImage} from "./styled";
import SingUpForm from "../../components/SingUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


function SingUpPage({setRightButtonText}) {
  useUnprotectedPage()
  return (
    <ScreenContainer >
      <LogoImage src={'https://imgur.com/6RmVuyi.png'}/>
      <SingUpForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  );
}

export default SingUpPage;
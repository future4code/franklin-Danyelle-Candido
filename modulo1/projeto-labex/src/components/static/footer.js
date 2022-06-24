import React from "react";
import styled from "styled-components";
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  color:white
`
const SocialMidia = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;

`
const ImgMidia = styled.img`
  display: flex;
  justify-content: center; 
  width: 50px;
  margin: 10px;
`

function Footer() {
  return (
    <FooterContainer >
      <p> copy; Birdperson.Ltda</p>
      <SocialMidia>
        <ImgMidia src={linkedin}/>
        <ImgMidia src={instagram}/>
        <ImgMidia src={twitter}/>
      </SocialMidia>
    </FooterContainer>
  );
}

export default Footer;

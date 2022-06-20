import React from "react";
import styled from "styled-components";


const FooterContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color: yellow;
`

function Footer() {
  return (
    <FooterContainer >
      <p>sou o footer</p>
    </FooterContainer>
  );
}

export default Footer;

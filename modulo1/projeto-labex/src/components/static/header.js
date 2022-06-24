import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png"


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
`

const Logo = styled.img`
  align-items: left; 
  border-radius: 50%;
`

function Header() {
  return (
    <HeaderContainer >
      <Logo src={logo}/>
      <p>Space Birdperson</p>
    </HeaderContainer>
  );
}

export default Header;

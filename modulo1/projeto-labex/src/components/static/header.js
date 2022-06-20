import React from "react";
import styled from "styled-components";


const HeaderContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color: red;
`

function Header() {
  return (
    <HeaderContainer >
      <p>hello sou a header</p>
    </HeaderContainer>
  );
}

export default Header;

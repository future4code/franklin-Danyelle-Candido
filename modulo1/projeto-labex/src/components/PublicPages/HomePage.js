import React from "react";
import styled from "styled-components";



const HomeContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color: green;
`

function HomePage() {
  return (
    <HomeContainer >
      <p>Home Page</p>
    </HomeContainer>
  );
}

export default HomePage;
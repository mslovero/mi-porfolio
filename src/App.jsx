import React from 'react';
import styled from "styled-components";
import Hero from './components/Hero';
import Who from './components/Who';
 import Works from './components/Works';
import Contact from './components/Contact';
// import Test from './components/Test';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-color: #0a0909;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <Container>
      <Hero />
       <Works /> 
      <Who />
      <Contact />
      {/* <Test /> */}

    </Container>
  );
}

export default App;

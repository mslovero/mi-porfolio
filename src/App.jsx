import './App.css';
import styled from "styled-components";
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./images/bc.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
  
`;
// Establece la altura del contenedor al 100% del alto de la ventana
// Define el comportamiento de desplazamiento vertical con saltos obligatorios
// Hace que el desplazamiento dentro del contenedor sea suave y animado
// Permite el desplazamiento vertical solo cuando el contenido se desborda
// Oculta la barra de desplazamiento
// Establece el color del texto dentro del contenedor en blanco
// Establece una imagen de fondo utilizando la URL especificada
// Personaliza el estilo del scrollbar para navegadores WebKit
// Oculta el scrollbar en navegadores WebKit



function App() {
  return (
    <Container>
      <Hero />
      <Works />
      <Who />
      <Contact />
    </Container>
  );
}

export default App;

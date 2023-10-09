import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;

  &.success {
    /* Estilos para el botón de éxito aquí */
    background-color: green; /* Por ejemplo, cambia el color de fondo a verde */
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pcf2e9t",
        "template_yqlz8os",
        ref.current,
        "qz641jjelTMaidu0p"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contáctame</Title>
            <Input type="text" placeholder="Name" name="name" pattern="[A-Za-z\s]+" />
            <Input type="email" placeholder="Email" name="email" />
            <TextArea
              placeholder="Escribime un mensaje"
              name="message"
              rows={10}
            />
            <Button type="submit" className={success ? "success" : ""}>
              Enviar
            </Button>
            {success &&
              "Tu mensaje ha sido enviado. Pronto me comunicare con vos!!!"}
          </Form>
        </Left>
        <Right>
          {/* <Maps /> */}
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;

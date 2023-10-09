import React from 'react'
import { styled } from 'styled-components'




const Section = styled.div`
  display: flex;
  justify-content: center;
  
`

const Container = styled.div`
  width: 1200px;
  // background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;
const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;
`
const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
`
const ListItem = styled.li`
cursor: pointer;  
`

const Icons = styled.div`
display: flex;
align-items: center;
gap: 20px;

  
`
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

// const Logo = styled.img`
// `
const Button = styled.button`
width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  
`

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          {/* quiero crear un logo en canva */}
          <p>loogo</p>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contact</ListItem>
            {/* <ListItem></ListItem> */}
          </List>
        </Links>
        <Icons>
          <Icon src='./images/search.png'></Icon>
          <Button>Contratame</Button>
        </Icons>

      </Container>
    </Section>
  )
}

export default Navbar
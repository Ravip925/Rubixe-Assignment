import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 65px;
    text-decoration: none;
    user-select: none;
    background-color: #010101;
    color: white;
    background-position: bottom;

`
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;
const Left = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 35%;
  height: 50px;
  padding: 8px 0;

`;
const Image = styled.img`
  width: 150px;
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;

`;
const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  
`
const List = styled.li`
  margin-left: 2vw;
  cursor: pointer;
  font-size: 0.9em;
`

const NavBar = () => {
  return (
    <>
        <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Image src='https://rubixe.com/assets/img/logo/white-rubixe-logo.png' />
          </Logo>
        </Left>
        <Right>
          <MenuItems>
            <List>HOME</List>
            <List>SERVICES</List>
            <List>PRODUCTS</List>
            <List>AI INTERNSHIP</List>
            <List>CAREER</List>
            <List>BLOG</List>
            <List>ABOUT</List>
            <List>CONTACT US</List>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
    </>
  )
}

export default NavBar
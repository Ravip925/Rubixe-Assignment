import styled from "styled-components";

const Container = styled.div`
    background-color: aliceblue;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 10px 140px 10px 140px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin: 15px 20px 20px 20px;

`;
const Title = styled.h2`
    margin-top: 30px;
  margin-bottom: 10px;
`;
const Title2 = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:active {
    color: #bc0000;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-top: 15px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
        <Title>About Us</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, ipsa libero. Corrupti, reiciendis? Beatae, impedit, nam possimus ratione eligendi laudantium aliquid dolore excepturi, molestias veniam cum aspernatur error ipsam repellendus?
        </Desc>
      </Left>
      <Center>
      <Title2>MENUS</Title2>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Services</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Contacts</ListItem>
          <ListItem>Career</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Go To Top</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Info</ListItem>
        </List>
      </Center>
      <Right>
        <Title2>Address</Title2>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptate similique, iure vel id aliquid cum inventore saepe, necessitatibus, aut ducimus repellendus debitis impedit unde earum illum dolorem repudiandae! Inventore!</Desc>
        
      </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;

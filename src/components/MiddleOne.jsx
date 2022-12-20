import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  background-color: antiquewhite;
  height: 50vh;
  position: relative;
  overflow: hidden;
`;
const InnerContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  margin: 0 150px 0 150px;
`;

const Wrapper = styled.div`
  height: 40vh;
  flex: 1.5;
  box-sizing: border-box;
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  
`;
const Title = styled.h3`

  
`;
const Description = styled.p`
    overflow: hidden;
  
`;

const ImageContainer = styled.div`
height: 29vh;
margin-top: 20px;
flex: 1;
  
`;
const Image = styled.img`
width: 400px;
background-size: cover;
background-position: center;
`;


const MiddleOne = () => {
  return (
    <>
      <Container>
        <InnerContainer>
        <Wrapper>
          <Title>
            WHO WE ARE
          </Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore itaque ipsa eos modi unde, obcaecati porro nisi cupiditate consequuntur iusto sed? Quam nemo quod accusamus cupiditate aperiam debitis possimus ad?
          </Description>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit architecto a, odio magni minima assumenda natus, autem cum maiores sint corporis voluptatibus. Quis, voluptas earum corporis ab quisquam eius.
          </Description>
        </Wrapper>
        <ImageContainer>
            <Image src="https://skvindia.com/wp-content/uploads/slider/cache/16cbd77561c4f6a2dcacc9f42dfea4ee/Banner-01.png"/>
        </ImageContainer>
        </InnerContainer>
      </Container>
    </>
  );
}

export default MiddleOne
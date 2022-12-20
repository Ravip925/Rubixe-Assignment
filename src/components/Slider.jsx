import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  background-color: #1bbeff;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://housing.usc.edu/wp-content/uploads/2013/06/slider_image_2.jpg');
  background-size: cover;
  background-position: center;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
 
`;

const ImgContainer = styled.div`
  height: 50%;
  margin-top: 90px;
  margin-left: 0;

`;

const Image = styled.img`
  height: 55%;
  margin-left: 250px;
  margin-top: 0;
`;

const InfoContainer = styled.div`
  margin: -165px 0 0 270px;

`;
const Title = styled.h2`
  font-size: 27px;
  margin-bottom: -15px;
  color: white;
  box-sizing: border-box;
  background-color: transparent;
`;


const Slider = () => {

  return (
    <Container>
      <Wrapper>
          <Slide>
            <ImgContainer>
              <Image src="https://i.ibb.co/rbVYz1z/tech-CoE.png" />
            </ImgContainer>
            <InfoContainer>
              <Title>CARVING FUTURE</Title>
              <Title>TECHNOLOGY PROFESSIONALS</Title>
              <Title>OUT OF YOUNG MINDS</Title>
            </InfoContainer>
          </Slide>
      </Wrapper>
    </Container>
  );
};

export default Slider;
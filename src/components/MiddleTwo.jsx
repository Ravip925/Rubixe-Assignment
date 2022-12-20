import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #9d094b;
  height: 25vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 25vh;
  box-sizing: border-box;
  padding: 5px 0px 5px 20px;
  margin: 0px 150px 0 150px;
  color: white;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3``;
const Description = styled.p`
    margin-top: 0;
    overflow: hidden;
`;

const MiddleTwo = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>WHERE WE STARTED</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            itaque ipsa eos modi unde, obcaecati porro nisi cupiditate
            consequuntur iusto sed? Quam nemo quod accusamus cupiditate aperiam
            debitis possimus ad? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Qui nulla quidem ea voluptatibus sequi sit sunt.
            Labore iusto quo excepturi quas magni, culpa error explicabo a
            dolor, alias ipsa voluptatum?
          </Description>
        </Wrapper>
      </Container>
    </>
  );
};

export default MiddleTwo;

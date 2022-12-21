import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 72vh;
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
`;

const InnerContainer = styled.div`
  margin: 10px 150px 10px 150px;
  height: 60vh;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
    
`
const Title = styled.h3`
    margin: 30px 0px 0 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  
`;
const Items = styled.div`
    width: 15.3vw;
    height: 275px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    justify-content: space-around;
    position: relative;
    
`;

const Boxes = styled.div`
  width: 50px;
  height: 50px;
`
const P = styled.p`
  width: 100%;
  height: 50px;

`
const P1a={
  width: "100%",
  height: "50px",
  backgroundColor: "#2d2db4",
  position: "absolute",
  top: "-25px"
  
}
const P2a={
  width: "100%",
  height: "50px",
  backgroundColor: "#e99b0b",
  position: "absolute",
  bottom:"-25px"
  
}
const item1={
    borderTopLeftRadius:"20px",
    borderTopRightRadius:"20px",
    position:"relative",
    zIndex:"7",
    boxShadow:"5px -5px 5px rgba(0,0,0,0.2)",
    background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 34.48%, #f1f1f1 100%)"
}
const item2={
    marginTop:"15px",
    position:"relative",
    zIndex:"6",
    borderBottomLeftRadius:"20px",
    borderBottomRightRadius:"20px",
    boxShadow:"5px 5px 3px rgba(0,0,0,0.3)",
    background: "linear-gradient(to top, #ffffff 0%, #ffffff 34.48%, #f1f1f1 100%)"
}
const item3={
    position:"relative",
    zIndex:"5",
    borderTopLeftRadius:"20px",
    borderTopRightRadius:"20px",
    boxShadow:"5px -5px 5px rgba(0,0,0,0.2)",
    background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 34.48%, #f1f1f1 100%)"
}
const item4={
    position:"relative",
    zIndex:"4",
    marginTop:"15px",
    borderBottomLeftRadius:"20px",
    borderBottomRightRadius:"20px",
    boxShadow:"5px 5px 3px rgba(0,0,0,0.3)",
    background: "linear-gradient(to top, #ffffff 0%, #ffffff 34.48%, #f1f1f1 100%)"
}
const item5={
    position:"relative",
    zIndex:"3",
    borderTopLeftRadius:"20px",
    borderTopRightRadius:"20px",
    boxShadow:" -1px -5px 3px rgba(0,0,0,0.15)",
    background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 30%, #f1f1f1 100%)"
}

const box1={
  width:"40px",
  height:"40px",
  borderRadius:"50%",
  position:"absolute",
  top:"0px",
  zIndex:"5",
  backgroundColor:"gray",
  fontWeight:"bold",
  color:"white",
  textAlign:"center",
  paddingTop:'8px',
  boxSizing:"border-box"
}
const box2={
  marginTop:"35px",
  backgroundImage:"url('https://cdn-icons-png.flaticon.com/512/1006/1006363.png')",
  backgroundSize:"cover"
}
const box3={
  width:"80%",
  height:"80px",
  textAlign:"center"
}
const box2a={
  width:"40px",
  height:"40px",
  borderRadius:"50%",
  position:"absolute",
  bottom:"0px",
  zIndex:"5",
  backgroundColor:"gray",
  fontWeight:"bold",
  color:"white",
  textAlign:"center",
  paddingTop:'8px',
  boxSizing:"border-box"
}
const box2b={
  marginTop:"-100px",
  backgroundImage:"url('https://cdn-icons-png.flaticon.com/512/1006/1006363.png')",
  backgroundSize:"cover"
}

const MiddleThree = () => {
  return (
    <>
        <Container>
        <InnerContainer>
        <Title>TECH FOR TEENS - A RUBIXE INITIATIVE</Title>
        <Wrapper>
          <Items style={item1}>
            <P style={P1a}></P>
            <Boxes style={box1}>01</Boxes>
            <Boxes style={box2}></Boxes>
            <Boxes style={box3}>Introducing Ai to children in an age appropriate manner</Boxes>
          </Items>
          <Items style={item2}>
            <Boxes style={box2a}>02</Boxes>
            <Boxes style={box3}>Introducing Ai to children in an age appropriate manner</Boxes>
            <Boxes style={box2b}></Boxes>
            <P style={P2a}></P>
          </Items>
          <Items style={item3}>
          <P style={P1a}></P>
            <Boxes style={box1}>03</Boxes>
            <Boxes style={box2}></Boxes>
            <Boxes style={box3}>Introducing Ai to children in an age appropriate manner</Boxes>
          </Items>
          <Items style={item4}>
          <Boxes style={box2a}>04</Boxes>
            <Boxes style={box3}>Introducing Ai to children in an age appropriate manner</Boxes>
            <Boxes style={box2b}></Boxes>
            <P style={P2a}></P>
          </Items>
          <Items style={item5}>
          <P style={P1a}></P>
            <Boxes style={box1}>05</Boxes>
            <Boxes style={box2}></Boxes>
            <Boxes style={box3}>Introducing Ai to children in an age appropriate manner</Boxes>
          </Items>
        </Wrapper>
        </InnerContainer>
      </Container>
    </>
  )
}

export default MiddleThree
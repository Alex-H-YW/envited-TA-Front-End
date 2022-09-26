import styled from 'styled-components';

import { Link } from 'react-router-dom';
import LandingImage from '../../assets/landingImage.svg';


const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 850px;
  width: 100%;
  background-color: #e9dfff;
  @media (max-width: 1024px) {
    height:100%;
    width: 100%;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
  }
`;
const MobileContainer = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center; 
    align-items: center;
  }
`;

const BackgroundWrapper = styled.div`
  padding: 60px;
  img {
    height: 600px;

  }
`;

const Content = styled.div`
  max-width: 400px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1024px) {
    padding-left: 300px;
    justify-content: center;
    align-items: flex-end;
  }

`;
const Title = styled.span`
  font-size: 64px;
  font-weight: bold;
  text-align: right;
  @media (max-width: 1024px) {
    padding-top: 40px;
    text-align: center;
    font-size: 50px;
  }
 
`;

const TitleColor = styled.span`
  background: linear-gradient(to right, #8456ec, #e87bf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`;

const SubTitle = styled.span`
  font-size: 20px;
  text-align: right;
  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (min-width: 1024px) {
    padding-bottom: 40px;
  }
`;
const LaptopButton = styled.button`
  padding-top: 50px;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  width: 320px;
  background: linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);
  border: none;
  @media (max-width: 1024px) {
      display: none;
    
  }
	
`;
const MobileButton = styled.button`
  width: 300px;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  background: linear-gradient(to right, #8456ec, #e87bf8);
  border: none;
  @media (min-width: 1024px) {
    display: none;  
}
	
`;

function Home() {
  return (
    <Container>
      <MobileContainer>
      <BackgroundWrapper>
        <img src={LandingImage} alt="landing" role="landingImage"/>
      </BackgroundWrapper>
      <Content>
        <Title role="landingText">Imagine if<br/><TitleColor>Snapchat</TitleColor><br/>had events.
        </Title>
        <SubTitle>Easily host and share events with your friends across any social media.</SubTitle><br/> 
        <Link to="/create">
          <LaptopButton data-testid="homeBtn">🎉 Create my event</LaptopButton>
        </Link>
      </Content>
      </MobileContainer>
      <Link to="/create">
          <MobileButton data-testid="homeBtn">🎉 Create my event</MobileButton>
      </Link>
      </Container>      
  )
}

export default Home;
import Squares from "@/components/Background";
import { HomeContainer } from "./styled";
import Keyvisual from "./Keyvisual";
import Intro from "./Intro";
import Skill from "./Skill";
import Social from "./Social";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <HomeContainer>
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#392e4e"
        hoverFillColor="#222"
      />
      <Keyvisual />
      <Intro />
      <Skill />
      <Social />
      <Contact />
    </HomeContainer>
  );
};

export default HomePage;

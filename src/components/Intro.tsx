import Lottie from "lottie-react";
import helloAnimation from "../../src/assets/Welcome.json";
import { IntroContainer } from "./styled";

interface LoadingScreenPops {
  onComplete: () => void;
}
const Intro = ({ onComplete }: LoadingScreenPops) => {
  return (
    <IntroContainer>
      <Lottie
        animationData={helloAnimation}
        autoPlay={true}
        onLoopComplete={() => {
          onComplete();
        }}
        className="intro-image"
      />
    </IntroContainer>
  );
};

export default Intro;

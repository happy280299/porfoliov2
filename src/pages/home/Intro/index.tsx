import React from "react";
import { IntroLayoutContainer } from "./styled";
import ScrollReveal from "./showIntro";

const Intro = () => {
  return (
    <IntroLayoutContainer className="relative overflow-hidden bg-gray-900">
      <div className="wrapper">
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 md:py-20 xl:py-32">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            When does a man die? When he is hit by a bullet? No! When he suffers
            a disease? No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
        </div>
      </div>
    </IntroLayoutContainer>
  );
};

export default Intro;

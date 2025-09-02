import { Outlet } from "react-router-dom";
import { MainContainer } from "./styled";
import Intro from "src/components/Intro";
import { useState } from "react";
import Header from "@/components/Header";

const Mainlayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <MainContainer>
      {isLoading && <Intro onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </MainContainer>
  );
};

export default Mainlayout;

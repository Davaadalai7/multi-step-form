"use client";
import { useState } from "react";
import MainContainer from "@/components/main-container";
import SecondContainer from "@/components/second-container";
import ThirdContainer from "@/components/third-container"; // Import ThirdContainer
import EndContainer from "@/components/end-container"; // Import EndContainer

const Home = () => {
  const [showSecondContainer, setShowSecondContainer] = useState(false);
  const [showThirdContainer, setShowThirdContainer] = useState(false); // State for third container
  const [showEndContainer, setShowEndContainer] = useState(false); // State for EndContainer

  const handleContinue = () => {
    if (showThirdContainer) {
      setShowEndContainer(true); // Show EndContainer after the third one
    } else if (showSecondContainer) {
      setShowThirdContainer(true); // Show third container after the second one
    } else {
      setShowSecondContainer(true); // Show second container after the main one
    }
  };

  const onBack = () => {
    if (showEndContainer) {
      setShowEndContainer(false); // Go back from EndContainer
    } else if (showThirdContainer) {
      setShowThirdContainer(false); // Go back from third container
    } else if (showSecondContainer) {
      setShowSecondContainer(false); // Go back from second container
    }
  };

  return (
    <div className="justify-center flex items-center w-screen h-screen">
      {!showSecondContainer && !showThirdContainer && !showEndContainer ? (
        <MainContainer onContinue={handleContinue} />
      ) : showSecondContainer && !showThirdContainer && !showEndContainer ? (
        <SecondContainer onBack={onBack} onContinue={handleContinue} />
      ) : showThirdContainer && !showEndContainer ? (
        <ThirdContainer onBack={onBack} onContinue={handleContinue} />
      ) : (
        <EndContainer onBack={onBack} />
      )}
    </div>
  );
};

export default Home;

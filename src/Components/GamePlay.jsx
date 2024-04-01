import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";

const GamePlay = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const[error,setError]=useState("")
  

  const GenrateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  function roleDice() {
if(!selectedNumber){
  setError("Please select a number")
}
setError("")

    let random = GenrateRandomNumber(1, 7);
    setCurrentDice((prev) => random);
    if (!selectedNumber) return;
    if (selectedNumber === random) {
      setCurrentScore((prev) => prev + currentDice);
    } else {
      setCurrentScore((prev) => prev - 2);
    }

    setSelectedNumber();
    
  }

  return (
    <MainContainer>
      <div className="Top-section">
        <TotalScore currentScore={currentScore} />
        <NumberSelector
        setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        setCurrentDice={setCurrentDice}
        roleDice={roleDice}
      />
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  .Top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    padding-top: 70px;
  }
`;

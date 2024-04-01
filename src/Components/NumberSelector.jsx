import React from "react";
import styled from "styled-components";

const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
 

 function HandleChange(item){
    setSelectedNumber(item);
    setError("")
 }

  return (
    <NumberSelectorContainer>
        <p>{error}</p>
        <div className="flex">
      {arrNumber.map((item, i) => {
        return (
          <Box isselected={item === selectedNumber} key={i} onClick={()=>HandleChange(item)}>
            {item}
          </Box>
        );
      })}</div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:end;
.flex{
    display:flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight:700;
}
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${({isselected}) => (isselected ? "black" : "white")};
  color: ${({isselected}) => (isselected ? "white" : "black")};
`;

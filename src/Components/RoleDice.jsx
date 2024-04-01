import React from 'react'
import styled from 'styled-components'

const RoleDice = ({setCurrentDice,currentDice,roleDice}) => {

    
    

  
 

  return (
    <DiceContainer>
        <div onClick={roleDice}>
            <img src={`/Images/dice_${currentDice}.png`} alt="dice" />
        </div>
        <p>Click to roll Dice</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
margin-top: 48px;

p{
    font-size: 24px;
    margin:0px;
}

`
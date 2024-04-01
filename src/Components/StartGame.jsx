import React from 'react'
import styled from 'styled-components';

const StartGame = ({toggle}) => {
  return (
    <Conatainer>
      <img src='/Images/dices 1.png' alt="dice"/>
      <div className='Content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play now</Button>
      </div>
    </Conatainer>
  )
}

export default StartGame;
const Conatainer = styled.div`
max-width: 1180px;
heigth: 100vh;
display: flex;
margin:auto;
align-items: center;

.Content h1{
  font-size: 96px;
  white-space: nowrap;
}
.Content Button{
  
}

`
const Button = styled.button`
background: #000000;
color:white;
padding: 10px 20px;
border-radius:5px;
min-width: 220px;
border:none;

&:hover{
  color:black;
  background-color:white;
  border:1px solid #000000;
  transtion:  0.5s background ease-in;
  cursor:pointer;
}

`
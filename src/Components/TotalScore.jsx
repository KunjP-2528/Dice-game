import React from 'react'
import styled from 'styled-components';

const TotalScore = ({currentScore}) => {
  return (
    <ScoreConatiner>
      
        <h1>{currentScore}</h1>
        <p>Total Score</p>
      
    </ScoreConatiner>
  )
}

export default TotalScore

const ScoreConatiner = styled.div`
    max-width:200px;
    text-align:center;
h1{
    font-size: 100px;
    line-height:100px;
    margin:0;
}
p{
  font-size:24px;
}

`
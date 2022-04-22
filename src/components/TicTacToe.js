import React from 'react'
import styled from 'styled-components'

function TicTacToe() {
    let player, user, computer;
    let compWinsTotal = 0;
    let userWinsTotal = 0;
    let roundCount = 1;

    user = "x";
    computer = "o";

    const isWinner = () => {
        const AllWinOutcome = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
        for (const element in AllWinOutcome) {
            if (Object.hasOwnProperty.call(AllWinOutcome, element)) {
                const subArray = AllWinOutcome[element];
                if (document.getElementById("boardbox"+ subArray[0]).firstChild.textContent === player &&
                    document.getElementById("boardbox"+ subArray[1]).firstChild.textContent === player &&
                    document.getElementById("boardbox"+ subArray[2]).firstChild.textContent === player ) {
                    return true;
                }
            }
        }
        return false;
    }

    const isGameOver = () => {
        for (let index = 1; index <= 9; index++) {
            let idName = "boardbox" + index;
            const element = document.getElementById(idName);
            if (element.firstChild.textContent === "") {
                return false;
            }
        }
        return true;
    }

    function computerMove() {
        player = computer;
        let element;
        do {
            let idName = "boardbox" + Math.ceil(Math.random() * 9);
            element = document.getElementById(idName);
        } while (element.firstChild.textContent !== "");
        element.firstChild.textContent = player;
        console.log("comp play!")
        if (isWinner()) {
            document.getElementById("playAgain").style = "display: flex;";
            compWinsTotal++;
            document.getElementById("compTotal").innerHTML = compWinsTotal
        } 
    }

    const userMove = (e) => {
        console.log("player play!")
        player = user;
        let element = document.getElementById(e.target.id);
        element.firstChild.textContent = player;
        if (isWinner()) {
            document.getElementById("playAgain").style = "display: flex;";
            userWinsTotal++;
            document.getElementById("userTotal").innerHTML = userWinsTotal
        } else {
            if (!isGameOver()) {
                computerMove()
            } else {
                console.log("game tie!")
            }
        }

    }

    const resetGame = () => {
        for (let index = 1; index <= 9; index++) {
            let idName = "boardbox" + index;
            const element = document.getElementById(idName);
            element.firstChild.textContent = ""
        }
    }

    const newGame = () => {
        resetGame()
        compWinsTotal = 0;
        userWinsTotal = 0;
        roundCount = 1;
        document.getElementById("userTotal").innerHTML = userWinsTotal;
        document.getElementById("compTotal").innerHTML = compWinsTotal;
        document.getElementById("roundTotal").innerHTML = roundCount;
        document.getElementById("playAgain").style = "display: none;";
    }

    const nextRound = () => {
        resetGame()
        roundCount++;
        document.getElementById("roundTotal").innerHTML = roundCount;
        document.getElementById("playAgain").style = "display: none;";
    }

  return (
    <Container>
        <SubContainer>
            <GameBoard>
                <div onClick={ userMove } id='boardbox1' className='bt-0 bl-0'><span></span></div>
                <div onClick={ userMove } id='boardbox2' className='bt-0'><span></span></div>
                <div onClick={ userMove } id='boardbox3' className='bt-0 br-0'><span></span></div>
                <div onClick={ userMove } id='boardbox4' className='bl-0'><span></span></div>
                <div onClick={ userMove } id='boardbox5'><span></span></div>
                <div onClick={ userMove } id='boardbox6' className='br-0'><span></span></div>
                <div onClick={ userMove } id='boardbox7' className='bl-0 bb-0'><span></span></div>
                <div onClick={ userMove } id='boardbox8' className='bb-0'><span></span></div>
                <div onClick={ userMove } id='boardbox9' className='br-0 bb-0'><span></span></div>
            </GameBoard>
        </SubContainer>
        <SubContainer>
            <GameDetails>
                <GameInfo className='hl'>
                    Welcome to Tic Tac Toe!
                    <p className='txtl'>Round = <span id='roundTotal'>1</span></p>
                    <p className='txtl'>Player wins = <span id='userTotal'>0</span></p>
                    <p className='txtl'>Computer wins = <span id='compTotal'>0</span></p>
                </GameInfo>
                <button className='btn btn-m' onClick={ resetGame }>Reset</button>
                <button className='btn btn-m btn-outline' onClick={ newGame }>New Game</button>
            </GameDetails>
        </SubContainer>
        <PlayAgain id='playAgain'>
            <p className='hxl'>You wins! play again</p>
            <div>
                <button className='btn btn-m' onClick={ nextRound }>Next Round</button>
                <button className='btn btn-m btn-outline' onClick={ newGame }>New Game</button>
            </div>
        </PlayAgain>
    </Container>
  )
}

export default TicTacToe

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 89vh;
    padding: 5vw 2vw;
    justify-content: center;
    background-color: #fbf0a4;
    position: relative;
`

const SubContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`

const GameBoard = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 10vw);
    grid-template-columns: repeat(3, 10vw);


    div {
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid black;
        font-size: 5vw;
        cursor: pointer;

        :hover {
            background-color: #bdb476;
        }
    }
`

const GameDetails = styled.div`
    padding: 0 3rem;
    
    button {
        margin: 2rem 1vw;
    }
`

const GameInfo = styled.div`
    font-size: 3vw;
`

const PlayAgain = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: #0000007d;
    padding: 1.5vw;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(10px);

    p {
        text-shadow: 0px 0px 14px white;
    }

    button {
        margin: 1rem 1.5rem;
    }
`
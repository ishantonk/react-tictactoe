import React from 'react'
import styled from 'styled-components'

function Sudoko() {
    let player, user, computer;
    let selNumber = null;
    let mistakes = 0;
    let sec = 0;
    let min = 0;
    let roundCount = 1;

    let puzzle = [
        "--74916-5",
        "2---6-3-9",
        "-----7-1-",
        "-586----4",
        "--3----9-",
        "--62--187",
        "9-4-7---2",
        "67-83----",
        "81--45---"
    ]

    let solution = [
        "387491625",
        "241568379",
        "569327418",
        "758619234",
        "123784596",
        "496253187",
        "934176852",
        "675832941",
        "812945763"
    ]

    React.useEffect(() => {
        populateBoard()
        genrateGame()
    }, [solution])
    
    const genrateGame = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let tile = document.createElement("div");
                tile.id = row + "-" + col;
                tile.addEventListener("click", placeNum);
                if (puzzle[row][col] !== "-") {
                    tile.innerText = puzzle[row][col];
                    tile.style = "background-color: #0000003e";
                }
                if (row === 2 || row === 5) {
                    tile.classList.add("horizontal-line");
                }
                if (col === 2 || col === 5) {
                    tile.classList.add("vertical-line");
                }
                document.getElementById("gameBoard").appendChild(tile);
            }
            
        }
    }

    const populateBoard = () => {
        for (let index = 1; index <= 9; index++) {
            let numTile = document.createElement("div");
            numTile.id = index;
            numTile.className = "txtl";
            numTile.innerText = index;
            numTile.addEventListener("click", selNum);
            document.getElementById("numBoard").appendChild(numTile);            
        }
    }

    const selNum = (e) => {
        if (selNumber !== null) {
            document.getElementById(selNumber).style = "background-color: none"
        }
        selNumber = e.target.id;
        document.getElementById(selNumber).style = "background-color: #0000006e"
    }

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

    const placeNum = (e) => {
        if (document.getElementById(e.target.id).innerText === "") {
            let coord = e.target.id.split("-")
            let row = parseInt(coord[0]);
            let col = parseInt(coord[1]);
            if (solution[row][col] === selNumber) {
                document.getElementById(e.target.id).innerText = selNumber;
            } else {
                mistakes++;
                document.getElementById("mistakeTotal").innerText = mistakes;
            }
        }

    }

    const resetGame = () => {
        sec = 0;
        min = 0;
        document.getElementById("gameBoard").innerHTML = "";
        genrateGame();
    }

    const newGame = () => {
        resetGame()
        roundCount = 1;
        document.getElementById("roundTotal").innerHTML = roundCount;
        document.getElementById("playAgain").style = "display: none;";
    }

    const nextRound = () => {
        resetGame()
        roundCount++;
        document.getElementById("roundTotal").innerHTML = roundCount;
        document.getElementById("playAgain").style = "display: none;";
    }

    const timer = () => {
        if (sec<60) {
            sec++
        } else {
            min++;
            sec=0;
        }
        document.getElementById("timerTotal").innerText = min+":"+sec;
    }
    setInterval(timer, 1000);

  return (
    <Container>
        <SubContainer>
            <div>
                <GameBoard id='gameBoard'>
                </GameBoard>
                <NumBoard id='numBoard'>
                </NumBoard>
            </div>
        </SubContainer>
        <SubContainer>
            <GameDetails>
                <GameInfo className='hl'>
                    Let's solve sudoko!
                    <p className='h'>Round = <span id='roundTotal'>1</span></p>
                    <p className='h'>Mistake = <span id='mistakeTotal'>0</span></p>
                    <p className='h'>Timer = <span id='timerTotal'>00:00</span></p>
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

export default Sudoko


const Container = styled.div`
    display: flex;
    flex: 1;
    height: 89vh;
    padding: 3vw 2vw;
    justify-content: center;
    background-color: #e9f5ce;
    position: relative;
`

const SubContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`

const GameBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 1fr);
    height: 35vw;
    width: 35vw;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid gray;
        border-radius: 2px;
        font-weight: 600;
        cursor: pointer;

        :hover {
            background-color: #0000001e;
        }
    }
`

const NumBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-column-gap:2px;
    height: 3vw;
    width: 35vw;
    margin-top: 1vw;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        border-radius: 4px;
        font-weight: 700;
        cursor: pointer;

        :hover {
            background-color: #0000006e
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
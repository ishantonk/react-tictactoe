import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
        <Head className='hxl'>Play now</Head>
        <ContentWrap>
            <SubContainer>
                <img src="/images/tic.png" alt="tictactoe" />
                <Link to={`/tictactoe`}>
                    <p className='hxl'>TicTacToe</p>
                </Link>
            </SubContainer>
            <SubContainer>
                <img src="/images/sudoko.png" alt="sudoko" />
                <Link to={`/sudoko`}>
                    <p className='hxl'>Sudoko</p>
                </Link>
            </SubContainer>
        </ContentWrap>
    </Container>
  )
}

export default Home

const Container = styled.div`
    display: flex;
    flex-direction: column;
    // flex: 1;
    height: 89vh;
    padding: 3vw 2vw;
    // justify-content: center;
    align-items: center;
    background-color: #e8dfce;
`

const Head = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Cedarville Cursive', cursive;
`

const ContentWrap = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
`

const SubContainer = styled.div`
    display: flex;
    margin: 3vw 7vw 0vw;
    flex: 1;
    justify-content: center;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    
    p {
        backdrop-filter: blur(3px);
        background-color: #0000007d;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right:0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: var(--transition);
        cursor: pointer;

        :hover {
            transform: scale(1.1);
        }
    }
`
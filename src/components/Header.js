import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
        <SubContainer>
            <Brand>
                <Link className='hl' to={`/`}>
                    PaperGames
                </Link>
            </Brand>
            <Menu>
                <Navigation>
                    <Link to={`/`}>
                        <Figure>
                            <Caption>Home</Caption>
                        </Figure>
                    </Link>
                    <Link to={`/tictactoe`}>
                        <Figure>
                            <Caption>TicTacToe</Caption>
                        </Figure>
                    </Link>
                    <Link to={`/sudoko`}>
                        <Figure>
                            <Caption>Sudoko</Caption>
                        </Figure>
                    </Link>
                </Navigation>
            </Menu>
        </SubContainer>
    </Container>
  )
}

export default Header


const Container = styled.header`
    position: fixed;
    inset: 0 0 auto;
    z-index: 1100;
`

const SubContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 min(4vw, 32px);
    min-height: 72px;
    position: relative;
    z-index: 1100;
    background-color: #f0a500;
    backdrop-filter: blur(20px);
`

const Brand = styled.div`
    margin-right: 30px;
    a {
        display: block;
    }
`

const Menu = styled.div`
    display:flex;
    flex: 1;
    align-items: center;
    
    a {
        display: flex;
        margin: 0 10px;
        cursor: pointer;
        opacity: 1 !important;

        &:hover {
            figcaption:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const Navigation = styled.div`
    display: flex;
    align-item: center;
`

const Search = styled.div`
    display: flex;
    margin: 0 10px;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        figcaption:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
    
    form {
        display: flex;
        align-items: center;
        position: relative;

        figure {
        }

        input {
            display: flex;
            width: 0px;
            padding: 0px;
            opacity: 0;
            font-size: 15px;
            line-height: 1.5;
            font-weight: 400;
        }
    }
`

const Figure = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;

    svg {
        width: 16px;
        height: 16px;
        display: inline-block;
        vertical-align: unset;
    }
`

const Caption = styled.figcaption`
    display: flex;
    font-size: 16px;
    font-weight: 650;
    letter-spacing: 1.4px;
    position: relative;
    padding: 0px 4px;
    transition: font-size;

    &:after {
        content: "";
        height: 2px;
        background: var(--accent-color);
        position: absolute;
        inset: auto 0 -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: var(--transition);
    }
`

const Account = styled.div`
`

const Avater = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    a {
        display: inline-block !important;
        object-fit: cover;
    }
`

const LoginBtn = styled.div`
    box-shadow: none;
`
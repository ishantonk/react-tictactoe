import React from 'react';
import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import TicTacToe from "./components/TicTacToe";
import Sudoko from './components/Sudoko';
import Home from './components/Home';

function App() {
  return (
    <Router>
        <Header />
        <HeaderSpace></HeaderSpace>
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="sudoko" element={<Sudoko />} exact />
            <Route path="tictactoe" element={<TicTacToe />} exact />
        </Routes>
    </Router>
  );
}

export default App;

const HeaderSpace = styled.div`
    margin-top: var(--header-space);
`;
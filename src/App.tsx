import React, {useEffect, useState} from 'react';
import './App.css';
import ChessPiece from "./components/ChessPiece";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {io} from 'socket.io-client'
import ChessBoard from "./components/ChessBoard";

function App() {
  return (
        <ChessBoard />
  );
}





export default App;

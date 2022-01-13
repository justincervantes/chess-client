import React, {useState} from 'react';
import BoardSquare from "./BoardSquare";
import ChessPiece from "./ChessPiece";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {Board} from "../constants/Board";
import {PlayerColors} from "../constants/PlayerColors";

export default function ChessBoard() {

    const [playerColor, setPlayerColor] = useState(PlayerColors.WHITE);
    const [activePlayer, setActivePlayer] = useState(PlayerColors.WHITE)
    const [view, setView] = useState(PlayerColors.WHITE);
    const [gameState, setGameState] = useState(Board);

    return (
        <DndProvider backend={HTML5Backend}>
            <h1 className={'text-center'}>Active Player: {activePlayer}</h1>
            <div className={"flex h-screen"}>
                <div className={"m-auto"}>
                    {Board.map((arr, y) => {
                        return (<div className="flex" key={y}>
                            {arr.map((arr, x) => {
                                const boardPiece = Board[x][y]
                                return (
                                    <BoardSquare x={x} y={y} key={x + '-' + y} >
                                        {/* If there is a piece with currentLocation matching x, y, render it */}
                                        { boardPiece ? <ChessPiece id={boardPiece?.id} ></ChessPiece> : null }

                                    </BoardSquare>
                                )}
                            )}
                        </div>)
                    })
                    }
                </div>
            </div>
        </DndProvider>
    )

}

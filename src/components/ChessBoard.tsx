import React, {useEffect, useState} from 'react';
import BoardSquare from "./BoardSquare";
import {Pieces} from "../constants/Pieces";
import ChessPiece from "./ChessPiece";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

export default function ChessBoard() {
    const BOARD_SIZE = 8;
    const [view, setView] = useState(0) // 0 is white, 1 is black
    const [board, setBoard] = useState<string[][]>([])

    useEffect(() => {
        setBoard([
            [Pieces.br, Pieces.bn, Pieces.bb, Pieces.bq, Pieces.bk, Pieces.bb, Pieces.bn, Pieces.br],
            [Pieces.bp, Pieces.bp, Pieces.bp, Pieces.bp, Pieces.bp, Pieces.bp, Pieces.bp, Pieces.bp],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            [Pieces.wp, Pieces.wp, Pieces.wp, Pieces.wp, Pieces.wp, Pieces.wp, Pieces.wp, Pieces.wp],
            [Pieces.wr, Pieces.wn, Pieces.wb, Pieces.wq, Pieces.wk, Pieces.wb, Pieces.wn, Pieces.wr]
        ])
    }, [])

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={"flex h-screen"}>
                <div className={"m-auto"}>
                    {board.map((arr, y) => {
                        return (<div className="flex" key={y}>
                            {arr.map((arr, x) => {
                                return (
                                    <BoardSquare x={x} y={y} key={x + '-' + y} >
                                        {(x===0 || y===0) && (<ChessPiece key={x + '-' + y}/>)}
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

import React, { useState } from 'react';
import BoardSquare from './BoardSquare';
import ChessPiece from './ChessPiece';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Board } from '../constants/Board';
import { PlayerColors } from '../constants/PlayerColors';
import { GameContext } from '../context/game-context';
import { Piece } from '../model/Piece';

export default function ChessBoard() {

    const [playerColor, setPlayerColor] = useState(PlayerColors.WHITE);
    const [activePlayer, setActivePlayer] = useState(PlayerColors.WHITE);
    const [view, setView] = useState(PlayerColors.WHITE);
    const [gameState, setGameState] = useState(Board);
    const value = { gameState, setGameState };

    return (
      <GameContext.Provider value={value}>
          <DndProvider debugMode={true} backend={HTML5Backend}>
              <h1 className={'text-center'}>Active Player: {activePlayer}</h1>
              <div className={'flex h-screen'}>
                  <div className={'m-auto'}>
                      <GameContext.Consumer>
                          {value => value.gameState.map((arr: (Piece | null)[], y: number) => {
                              return (<div className='flex' key={y}>
                                  {arr.map((arr: Piece | null, x: number) => {
                                        const boardPiece = value.gameState[y][x];
                                        return (
                                          <BoardSquare x={x} y={y} key={x + '-' + y}>
                                              {/* If there is a piece with currentLocation matching x, y, render it */}
                                              {boardPiece !== null ? <ChessPiece id={`${x}-${y}`}
                                                                                 piece={boardPiece.descriptor}></ChessPiece> : null}
                                          </BoardSquare>
                                        );
                                    }
                                  )}
                              </div>);
                          })
                          }

                      </GameContext.Consumer>
                  </div>
              </div>
          </DndProvider>
      </GameContext.Provider>
    );

}

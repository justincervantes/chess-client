import { Board } from '../constants/Board';
import React, { Dispatch, SetStateAction } from 'react';
import { Piece } from '../model/Piece';

interface StateContext {
    gameState: (Piece | null)[][];
    setGameState: Dispatch<SetStateAction<(Piece | null)[][]>>;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const GameContext = React.createContext<StateContext>();
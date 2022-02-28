import { Knight } from '../model/Knight';
import { Rook } from '../model/Rook';
import { Pawn } from '../model/Pawn';
import { Bishop } from '../model/Bishop';
import { Queen } from '../model/Queen';
import { King } from '../model/King';

export const Board: any = [
    [new Rook('b', 0, 0), new Knight('b', 1, 0), new Bishop('b', 2, 0), new Queen('b', 3, 0), new King('b', 4, 0), new Bishop('b', 5, 0), new Knight('b', 6, 0), new Rook('b', 7, 0)],
    [new Pawn('b', 0, 0), new Pawn('b', 0, 0), new Pawn('b', 0, 0), new Pawn('b', 0, 0), new Pawn('b', 0, 0), new Pawn('b', 0, 0), new Pawn('b', 0, 0), new Pawn('b', 0, 0)],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [new Pawn('w', 0, 0), new Pawn('w', 0, 0), new Pawn('w', 0, 0), new Pawn('w', 0, 0), new Pawn('w', 0, 0), new Pawn('w', 0, 0), new Pawn('w', 0, 0), new Pawn('w', 0, 0)],
    [new Rook('w', 0, 0), new Knight('w', 1, 0), new Bishop('w', 2, 0), new Queen('w', 3, 0), new King('w', 4, 0), new Bishop('w', 5, 0), new Knight('w', 6, 0), new Rook('w', 7, 0)]
];

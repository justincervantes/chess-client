import {Piece} from "../model/Piece";
import {Rook} from "../model/Rook";

export const Board: (Piece | null)[][] = [
    [new Rook(0, 0, 0), '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
]

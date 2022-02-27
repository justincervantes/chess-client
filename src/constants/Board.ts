import { Knight } from "../model/Knight";
import {Piece} from "../model/Piece";
import {Rook} from "../model/Rook";
import {Pawn} from "../model/Pawn";
import {Bishop} from "../model/Bishop";
import {Queen} from "../model/Queen";
import {King} from "../model/King";

export const Board: any = [
    [new Rook('b_rook', 0, 0, 0), new Knight('b_knight', 1,0,0), new Bishop('b_bishop', 2, 0, 0), new Queen('b_queen', 3, 0, 0), new King('b_king',4, 0, 0), new Bishop('b_bishop',5, 0, 0), new Knight('b_knight', 6, 0, 0), new Rook('b_rook',7, 0, 0)],
    [new Pawn('b_pawn', 0, 0, 0), new Pawn('b_pawn', 0, 0, 0), new Pawn('b_pawn', 0, 0, 0), new Pawn('b_pawn', 0, 0, 0), new Pawn('b_pawn', 0, 0, 0), new Pawn('b_pawn', 0, 0, 0), new Pawn('b_pawn', 0, 0, 0), new Pawn('b_pawn', 0, 0, 0)],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [new Pawn('w_pawn',0, 0, 0), new Pawn('w_pawn',0, 0, 0), new Pawn('w_pawn',0, 0, 0), new Pawn('w_pawn',0, 0, 0), new Pawn('w_pawn',0, 0, 0), new Pawn('w_pawn',0, 0, 0), new Pawn('w_pawn',0, 0, 0), new Pawn('w_pawn',0, 0, 0)],
    [new Rook('w_rook', 0, 0, 0), new Knight('w_knight', 1,0,0), new Bishop('w_bishop', 2, 0, 0), new Queen('w_queen', 3, 0, 0), new King('w_king',4, 0, 0), new Bishop('w_bishop',5, 0, 0), new Knight('w_knight', 6, 0, 0), new Rook('w_rook',7, 0, 0)],
]

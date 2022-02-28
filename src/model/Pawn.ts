import { Piece } from './Piece';

export class Pawn extends Piece {

    constructor(color: 'b' | 'w', x: number, y: number) {
        super('pawn', color, x, y);
    }

    checkValidMove(x: number, y: number): boolean {
        return false;
    }


}
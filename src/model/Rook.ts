import { Piece } from './Piece';

export class Rook extends Piece {

    constructor(color: 'b' | 'w', x: number, y: number) {
        super('rook', color, x, y);
    }

    checkValidMove(x: number, y: number): boolean {
        return false;
    }


}

import { Piece } from './Piece';

export class Knight extends Piece {

    constructor(color: 'b' | 'w', x: number, y: number) {
        super('knight', color, x, y);
    }

    checkValidMove(x: number, y: number): boolean {
        return false;
    }


}
import { Piece } from './Piece';

export class King extends Piece {

    constructor(color: 'b' | 'w', x: number, y: number) {
        super('king', color, x, y);
    }

    checkValidMove(x: number, y: number): boolean {
        return false;
    }


}
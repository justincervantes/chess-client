import { Piece } from './Piece';

export class Queen extends Piece {

    constructor(color: 'b' | 'w', x: number, y: number) {
        super('queen', color, x, y);
    }

    checkValidMove(x: number, y: number): boolean {
        return false;
    }


}
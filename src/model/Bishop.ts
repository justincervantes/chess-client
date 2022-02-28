import { Piece } from './Piece';
import { PlayerColors } from '../constants/PlayerColors';

export class Bishop extends Piece {

    constructor(color: 'b' | 'w', x: number, y: number) {
        super('bishop', color, x, y);
    }

    checkValidMove(x: number, y: number): boolean {
        return false;
    }


}
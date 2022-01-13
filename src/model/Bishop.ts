import {Piece} from "./Piece";
import {PlayerColors} from "../constants/PlayerColors";

export class Bishop extends Piece {

    spriteUri: string = '';
    color: string;

    constructor(x: number, y: number, id: number, color: string, playerColor: string) {
        super(x, y, id);
        this.color = color;
        this.spriteUri = `pieces/${playerColor === 'WHITE' ? 'w_' : 'b_'}bishop.png`;
    }

    checkValidMove(x: number, y: number): boolean {
        return false;
    }

}

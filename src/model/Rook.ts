import {Piece} from "./Piece";

export class Rook extends Piece{
    checkValidMove(x: number, y: number): boolean {
        return false;
    }
    constructor(x: number, y: number, id: number) {
        super(x, y, id);
    }


}

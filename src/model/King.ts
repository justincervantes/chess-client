import {Piece} from "./Piece";

export class King extends Piece{

    constructor(title: string, x: number, y: number, id: number) {
        super(title, x, y, id);
    }

    checkValidMove(x: number, y: number): boolean {
        return false;
    }


}
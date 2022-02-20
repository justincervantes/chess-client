import {Piece} from "./Piece";
export class Queen extends Piece{

    constructor(title: string, x: number, y: number, id: number) {
        super(title, x, y, id);
    }

    checkValidMove(x: number, y: number): boolean {
        return false;
    }


}
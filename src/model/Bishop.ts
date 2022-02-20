import {Piece} from "./Piece";
import {PlayerColors} from "../constants/PlayerColors";

export class Bishop extends Piece{

    constructor(title: string, x: number, y: number, id: number) {
        super(title, x, y, id);
    }

    checkValidMove(x: number, y: number): boolean {
        return false;
    }


}
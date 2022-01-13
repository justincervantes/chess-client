export abstract class Piece {

    x: number;
    y: number;
    id: number;

    protected constructor(x: number, y: number, id : number) {
        this.x = x;
        this.y = y;
        this.id = id;
    }

    abstract checkValidMove(x:number, y:number) : boolean;

}

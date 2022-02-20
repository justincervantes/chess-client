export abstract class Piece {

    title: string;
    x: number;
    y: number;
    id: number;

    protected constructor(title: string, x: number, y: number, id : number) {
        this.title = title;
        this.x = x;
        this.y = y;
        this.id = id;
    }

    abstract checkValidMove(x:number, y:number) : boolean;

}

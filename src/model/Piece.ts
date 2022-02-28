export abstract class Piece {

    color: 'b' | 'w';
    x: number;
    y: number;
    type: string;
    descriptor: string;

    protected constructor(type: string, color: 'b' | 'w', x: number, y: number) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.type = type;
        this.descriptor = `${color}_${type}`;
    }

    abstract checkValidMove(x: number, y: number): boolean;

}

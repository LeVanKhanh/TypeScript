import { Rectangle } from "./rectangle";

export class Square extends Rectangle {
    constructor(public side: number) {
        super(side,side);
        this.side = side;
    }

    public perimeter(): number {
        const perimeter: number = 4*this.side;
        console.log(`Square perimeter: ${perimeter}`);
        return perimeter;
    }
}
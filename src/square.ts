import { Rectangle } from "./rectangle";

export class Square extends Rectangle {
    side: number;

    constructor(side: number) {
        super(side,side);
        this.side = side;
    }

    perimeter(): number {
        const perimeter: number = 4*this.side;
        console.log(`Square perimeter: ${perimeter}`);
        return perimeter;
    }
}
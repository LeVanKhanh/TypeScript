import { Quadrilateral } from "./quadrilateral";

export class Rectangle extends Quadrilateral {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super(width, height, width, height, 90, 90, 90, 90);
        this.width = width;
        this.height = height;
    }

    perimeter(): number {
        const perimeter: number = 2*(this.width + this.height);
        console.log(`Rectangle perimeter: ${perimeter}`);
        return perimeter;
    }
}
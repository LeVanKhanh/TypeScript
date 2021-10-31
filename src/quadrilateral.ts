import { IShape } from "./shape";

export class Quadrilateral implements IShape {
    // there is an Quadrilateral ABCD
    sideAB: number;
    sideBC: number;
    sideCD: number;
    sideDA: number;
    angle_a: number;
    angle_b: number;
    angle_c: number;
    angle_d: number;

    constructor(sideAB: number,
        sideBC: number,
        sideCD: number,
        sideDA: number,
        angle_a: number,
        angle_b: number,
        angle_c: number,
        angle_d: number) {
        this.sideAB = sideAB;
        this.sideBC = sideBC;
        this.sideCD = sideCD;
        this.sideDA = sideDA;
        this.angle_a = angle_a;
        this.angle_b = angle_b;
        this.angle_c = angle_c;
        this.angle_d = angle_d;
    }

    volume(): number {
        return 0;
    }

    area(): number {
        return 0.5*(this.sideDA*this.sideAB*Math.sin(this.angle_a) + this.sideBC*this.sideCD*Math.sin(this.angle_c));
    }

    perimeter(): number {
        const perimeter: number = this.sideAB + this.sideBC + this.sideCD + this.sideDA;
        console.log(`Quadrilateral perimeter: ${perimeter}`);
        return perimeter;
    }
}
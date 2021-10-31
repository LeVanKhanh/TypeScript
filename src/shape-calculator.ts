import { IShape } from "./shape";

export class ShapeCalculator {
    calculatePerimeter(shape: IShape): number {
        return shape.perimeter();
    }
}
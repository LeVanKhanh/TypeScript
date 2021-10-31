import { IShape } from "./shape";
import { injectable } from "inversify";
import "reflect-metadata";

export interface IShapeCalculator {
    calculatePerimeter(shape: IShape): number;
}

@injectable()
export class ShapeCalculator implements IShapeCalculator {
    calculatePerimeter(shape: IShape): number {
        return shape.perimeter();
    }
}
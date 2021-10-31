import { ShapeCalculator } from "./shape-calculator";
import { Rectangle } from "./rectangle";
import { IShape } from "./shape";
import { Square } from "./square";
import { Quadrilateral } from "./quadrilateral";

function calculateRectanglePerimeter(): void {
    const shape: IShape = new Rectangle(20, 20);
    calculatePerimeter(shape);
}

function calculateSquarePerimeter(): void {
    const shape: IShape = new Square(20);
    calculatePerimeter(shape);
}

function calculateQuadrilateralPerimeter(): void {
    const shape: IShape = new Quadrilateral(20,20,20,20,90,90,90,90);
    calculatePerimeter(shape);
}

function calculatePerimeter(sharp: IShape):void {
    const calculator: ShapeCalculator = new ShapeCalculator();
    calculator.calculatePerimeter(sharp);
}

(function():void {
    const rectangle: HTMLElement | null = document.getElementById("calculateRectanglePerimeter");
    if(rectangle) {
        rectangle.addEventListener("click", function():void {
            calculateRectanglePerimeter();
        });
    }

    const square: HTMLElement | null = document.getElementById("calculateSquarePerimeter");
    if(square) {
        square.addEventListener("click", function():void {
            calculateSquarePerimeter();
        });
    }

    const quadrilateral: HTMLElement | null = document.getElementById("calculateQuadrilateralPerimeter");
    if(quadrilateral) {
        quadrilateral.addEventListener("click", function():void {
            calculateQuadrilateralPerimeter();
        });
    }
 })();
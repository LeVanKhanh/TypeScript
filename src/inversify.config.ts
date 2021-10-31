import { Container } from "inversify";
import { IShapeCalculator, ShapeCalculator } from "./shape-calculator";
import Types from "./app-dependency-types";

var container: Container = new Container();
container.bind<IShapeCalculator>(Types.shapeCalculator).to(ShapeCalculator);

export default container;
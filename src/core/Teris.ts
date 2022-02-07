import { Point } from "./types";
import { getRandom } from "./util";
import { SquareGroup } from "./SquareGroup";

/**
 完成 随机的形状(固定的几个形状中挑出一个)，颜色
 */

export class TShape extends SquareGroup {
    constructor(
        _centerPoint: Point,
        _color: string
    ) {
        super(
            // 基础的几个逻辑坐标
            // 字类直接重写即可，完成了各个形状的赋值
            [
                { x: -1, y: 0 },
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 0, y: -1 }
            ],
            _centerPoint, _color
        );

    }
}


export class LShape extends SquareGroup {

    constructor(
        _centerPoint: Point,
        _color: string) {
        super(
            [{ x: -2, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }],
            _centerPoint, _color);
    }
}

export class LMirrorShape extends SquareGroup {

    constructor(
        _centerPoint: Point,
        _color: string) {
        super(
            [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }],
            _centerPoint, _color);
    }
}

export class SShape extends SquareGroup {

    constructor(
        _centerPoint: Point,
        _color: string) {
        super(
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 1 }],
            _centerPoint, _color);
    }

    rotate() {
        super.rotate();
        this.isClock = !this.isClock;
    }
}

export class SMirrorShape extends SquareGroup {

    constructor(
        _centerPoint: Point,
        _color: string) {
        super(
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
            _centerPoint, _color);
    }

    rotate() {
        super.rotate();
        this.isClock = !this.isClock;
    }
}

export class SquareShape extends SquareGroup {

    constructor(
        _centerPoint: Point,
        _color: string) {
        super(
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
            _centerPoint, _color);
    }

    afterRotateShape() {
        return this.shape;
    }
}

export class LineShape extends SquareGroup {

    constructor(
        _centerPoint: Point,
        _color: string) {
        super(
            [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
            _centerPoint, _color);
    }

    rotate() {
        super.rotate();
        this.isClock = !this.isClock;
    }
}

export class UShape extends SquareGroup {

    constructor(
        _centerPoint: Point,
        _color: string) {
        super(
            [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: -1, y: -1 }, { x: 1, y: -1 }],
            _centerPoint, _color);
    }
}

/**
 * 页面中需要显示的shape类型，
 * 如须修改，请在这里完成
 */
export const shapes = [
    TShape,
    LShape,
    LMirrorShape,
    SShape,
    SMirrorShape,
    SquareShape,
    LineShape,
    UShape
]


export const colors = [
    "red",
    "green",
    "blue",
    "orange"
]

/**
 * 随机产生一个俄罗斯方块（颜色随机、形状随机）
 * @param centerPoint 
 */
export function createTeris(centerPoint: Point): SquareGroup {
    let index = getRandom(0, shapes.length);
    const shape = shapes[index];
    index = getRandom(0, colors.length);
    const color = colors[index];
    return new shape(centerPoint, color);
}

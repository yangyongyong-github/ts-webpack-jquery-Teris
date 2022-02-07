import { Square } from "./Square";
import { Shape, Point } from "./types";

/*
    形状，核心思想：
     
                [0, -1] 
    [-1, 0]     [0, 0]
                [0, 1]

    确定中心点坐标(relative)，其他的坐标相对于中心点来产生
*/


/**
 * 组合方块
 */

//  export abstroct class SquareGroup {
export class SquareGroup {

    private _squares: readonly Square[];

    public get squares() {
        return this._squares;
    }

    public get shape() {
        return this._shape;
    }

    // 中心点
    public get centerPoint(): Point {
        return this._centerPoint;
    }

    public set centerPoint(v: Point) {
        this._centerPoint = v;
        //同时设置所有小方块对象的坐标,才可以实现一齐变化
        this.setSquarePoints()
    }

    /**
    * 根据中心点坐标，以及形状，设置每一个小方块的坐标
    */
    private setSquarePoints() {
        this._shape.forEach((p, i) => {
            this._squares[i].point = {
                x: this._centerPoint.x + p.x,
                y: this._centerPoint.y + p.y
            }
        });
    }


    constructor(
        private _shape: Shape,
        private _centerPoint: Point,
        private _color: string
    ) {
        // 设置小方块的数组
        const arr: Square[] = [];
        this._shape.forEach(p => {
            const sq = new Square();
            sq.color = this._color;
            arr.push(sq)
        })
        this._squares = arr;
        this.setSquarePoints()
    }

    /**
     *  part: shape rotate
     */

    protected isClock = true; // 是否为 顺时针 90deg

    /**
     * 旋转之后的形状
     */
    afterRotateShape(): Shape {
        if (this.isClock) {
            return this._shape.map(p => {
                const newP: Point = {
                    x: -p.y,
                    y: p.x
                }
                return newP;
            })

        } else {
            // 逆时针
            return this._shape.map(p => {
                const newP: Point = {
                    x: p.y,
                    y: -p.x
                }
                return newP;
            })
        }
    }

    // 调用函数，开始旋转
    rotate() {
        const newShape = this.afterRotateShape();
        this._shape = newShape;
        this.setSquarePoints();
    }


}
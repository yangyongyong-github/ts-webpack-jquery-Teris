import { IViewer, Point } from "./types"
import { SquarePageViewer } from "./viewer/SquarePageViewer";

/**
 * 小方块 类
 * 
 * 1. 属性全部私有化
 * 2. 可被外界访问的方法全部公有化
 */
export class Square {

    private _point: Point = {
        x: 0, y: 0
    }
    private _color: string = ""

    /**
     * 属性：显示者
     */
    private _viewer?: IViewer
    // 改属性下的方法
    public get Viewer() {
        return this._viewer;
    }

    public set viewer(v: SquarePageViewer) {
        this._viewer = v;
        if (v) {
            v.show();
        }
    }

    /**
     *  Point
     */
    public get point() {
        return this._point;
    }

    // set + show
    public set point(val) {
        this._point = val;
        // console.log("value change .")
        // 完成显示
         if (this._viewer) {
            this._viewer.show();
            // console.log("show done .")
        }
    }

    /**
     *  color
     */
    public get color() {
        return this._color;
    }

    public set color(val) {
        this._color = val;
    }
}
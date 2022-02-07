import { Square } from "../Square";
import { IViewer } from "../types";
import PageConfig from "./PageConfig"
import $ from 'jquery'

/**
 * 显示一个小攻块到页面上
 */
export class SquarePageViewer implements IViewer {
    private dom?: JQuery<HTMLElement>
    private isRemove: boolean = false

    show(): void {

        if (this.isRemove) {
            // 已经移除的话，不再显示
            return;
        }

        if (!this.dom) {
            this.dom = $("<div>").css({
                position: "absolute",
                width: PageConfig.SquareSize.width,
                height: PageConfig.SquareSize.height,
                border: "1px solid #ccc",
                boxSizing: "border-box"
            }).appendTo(this.container)
        }

        this.dom.css({
            left: this.square.point.x * PageConfig.SquareSize.width,
            top: this.square.point.y * PageConfig.SquareSize.height,
            background: this.square.color
        })
    }
    remove(): void {
        if (this.dom && !this.isRemove) {
            // 存在且没有移除
            this.dom.remove();
            this.isRemove = true;
        }
    }

    constructor(
        private square: Square,
        private container: JQuery<HTMLElement>
    ) {

    }
}
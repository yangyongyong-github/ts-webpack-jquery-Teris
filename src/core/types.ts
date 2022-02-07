import { SquareGroup } from "./SquareGroup";
import { Game } from "./Game";


export interface Point {
    readonly x: number,
    readonly y: number
    /**
     * 防止出现了 绕过 set函数直接赋值可以的情况 属性加上 readonly
      sq.point.x=10;  =>   sq.point={ x:3,  y:4 }
    */
}

// 思维：我知道需要显示，但是不清楚到底显示什么
export interface IViewer {
    show(): void
    remove(): void
}

/**
 * 形状
 */
export type Shape = Point[]

/**
 * 移动方向
 */
export enum MoveDirection {
    left,
    right,
    down
}

export enum GameStatus {
    init, //未开始
    playing, //进行中,
    pause, //暂停
    over //游戏结束
}


export interface GameViewer {
    /**
     * 
     * @param teris 下一个方块对象
     */
    showNext(teris: SquareGroup): void;
    /**
     * 
     * @param teris 切换的方块对象
     */
    swtich(teris: SquareGroup): void;

    /**
     * 完成界面的初始化
     */
    init(game: Game): void;

    showScore(score: number): void;

    onGamePause(): void;

    onGameStart(): void;

    onGameOver(): void;
}
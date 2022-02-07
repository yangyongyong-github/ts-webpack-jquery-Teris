import $ from 'jquery'
import { Square } from './core/Square';
import { SquareGroup } from './core/SquareGroup'
import { LShape, createTeris } from './core/Teris';
import { TerisRule } from './core/TerisRule';
import { MoveDirection } from './core/types';
import { SquarePageViewer } from './core/viewer/SquarePageViewer';

const teris = createTeris({ x: 3, y: 2 })
// const group = new SquareGroup([
//     { x: 0, y: -1 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }
// ],
//     { x: 3, y: 2 },
//     'green');

teris.squares.forEach(sq => {
    sq.viewer = new SquarePageViewer(sq, $('#root'))
});


/**
 * 位置控制群：之需要控制中心点的坐标即可
 * (其伴随的位置方块会随着相对位置而一起移动)
 */
$('#btnDown').on('click', function () {

    // 首先判断是否可以移动
    TerisRule.move(teris, MoveDirection.down)


    // group.centerPoint = {
    //     x: group.centerPoint.x,
    //     y: group.centerPoint.y + 1,
    // }
})

// $('#btnLeft').on('click', function () {
//     group.centerPoint = {
//         x: group.centerPoint.x - 1,
//         y: group.centerPoint.y,
//     }
// })

// $('#btnRight').on('click', function () {
//     group.centerPoint = {
//         x: group.centerPoint.x + 1,
//         y: group.centerPoint.y,
//     }
// })
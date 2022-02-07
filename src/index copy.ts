import $ from 'jquery'
import { Square } from './core/Square';
import { SquareGroup } from './core/SquareGroup'
import { SquarePageViewer } from './core/viewer/SquarePageViewer';


const group = new SquareGroup([
    { x: 0, y: -1 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }
],
    { x: 3, y: 2 },
    'green');

group.squares.forEach(sq => {
    sq.viewer = new SquarePageViewer(sq, $('#root'))
});


/**
 * 位置控制群：之需要控制中心点的坐标即可
 * (其伴随的位置方块会随着相对位置而一起移动)
 */
$('#btnDown').on('click', function () {
    group.centerPoint = {
        x: group.centerPoint.x,
        y: group.centerPoint.y + 1,
    }
})

$('#btnLeft').on('click', function () {
    group.centerPoint = {
        x: group.centerPoint.x - 1,
        y: group.centerPoint.y,
    }
})

$('#btnRight').on('click', function () {
    group.centerPoint = {
        x: group.centerPoint.x + 1,
        y: group.centerPoint.y,
    }
})
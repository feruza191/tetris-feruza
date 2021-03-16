// comment added as third commit
// comment that always should be in master branch
// comment that should be cherry picked always should be in master branch
//fourth commit

import { shape1, shape2, shape3, shape4, shape5 } from './shapes';

const ROW = 10;
const COL = 10;
const SQ = 20; //square size
const EMPTY = '#d3d3d3';

const canvas = document.getElementById('tetris') as HTMLCanvasElement;

const drawSquare = (x: number, y: number, color: string): string | never => {
	if (canvas) {
		const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
		ctx.fillStyle = color;
		ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

		ctx.strokeStyle = '#000';
		ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);

		return 'Square was drown';
	} else {
		throw new Error(
			`2d context not supported or canvas already initialized`
		);
	}
};

export default drawSquare;

const drawBoard = () => {
	for (let r = 0; r < ROW; r++) {
		for (let c = 0; c < COL; c++) {
			drawSquare(c, r, EMPTY);
		}
	}
};

drawBoard();

interface Offset {
	x: number;
	y: number;
}

function Shape(
	this: any,
	tetrimino: number[][][],
	color: string,
	offset: Offset
): void {
	const { x, y } = offset;
	this.tetrimino = tetrimino;
	this.color = color;
	this.activeTetrimino = this.tetrimino[0];

	//coordinates of shapes
	this.x = x;
	this.y = y;
}

Shape.prototype.draw = function() {
	for (let r = 0; r < this.activeTetrimino.length; r++) {
		for (let c = 0; c < this.activeTetrimino[r].length; c++) {
			//we draw only occupied squares
			if (this.activeTetrimino[r][c]) {
				drawSquare(this.x + c, this.y + r, this.color);
			}
		}
	}
};

let s1 = new (Shape as any)(shape1, 'red', { x: 0, y: 0 }); //here I had to type (Shape as any) due to an error (could not solve it)
let s2 = new (Shape as any)(shape2, 'green', { x: 2, y: 0 }); //'new' expression, whose target lacks a construct signature, implicitly has an 'any' type
let s3 = new (Shape as any)(shape3, 'pink', { x: 7, y: 0 });
let s4 = new (Shape as any)(shape4, 'yellow', { x: 0, y: 6 });
let s5 = new (Shape as any)(shape5, 'blue', { x: 4, y: 6 });

s1.draw();
s2.draw();
s3.draw();
s4.draw();
s5.draw();

//x = coloumn
//y = row

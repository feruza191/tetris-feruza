import drawSquare from './index';

describe("Tetris testing", () => {
    it('Should return a string, it will mean that square or shapes where drawn successfully', () => {
        const expected = 'Square was drown';
        const x = 0;
        const y = 0;
        const color = 'red';
        const result = drawSquare(x, y, color);
        expect(result).toBe(expected);
    });
})

//I could not able to set up jest to recognize the canvas. It shows that canvas is null in tests, but in browser it works.
//I installed jest-canvas-mock and imported it im setupTest.ts, but it is not working. Could not find the right solution. 
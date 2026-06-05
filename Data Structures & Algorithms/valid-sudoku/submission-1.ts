class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    private board: string[][] = [];
    isValidSudoku(board: string[][]): boolean {
        this.board = board;
        let isValid = true;

        for (let i = 0; i < 9; i++) {
            if (!isValid) return false;
            isValid = this.isValidRow(i) && this.isValidCol(i);
        }
        if (!isValid) return false;
        return this.isValidBoxes();
    }

    isValidRow(index: number): boolean {
        const row = this.board[index];
        return this.isValid(row);
    }

    isValidCol(index): boolean {
        const col = this.board.map((row) => row[index]);
        return this.isValid(col);
    }

    isValidBoxes(): boolean {
        const boxes: string[][] = Array.from({ length: 9 }, () => []);

        this.board.forEach((y, yIndex) => {
            y.forEach((x, xIndex) => {
                const boxIndex = Math.floor(xIndex / 3) + Math.floor(yIndex / 3) * 3;
                boxes[boxIndex].push(x);
            });
        });

        return boxes.every((box) => this.isValid(box));
    }

    private isValid(_entity: string[]): boolean {
        const entity = _entity.filter((e) => e !== ".");
        return new Set(entity).size === entity.length;
    }
}

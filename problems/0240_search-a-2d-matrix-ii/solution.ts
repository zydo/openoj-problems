function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix.length === 0 || matrix[0].length === 0) return false;
    let row = 0,
        col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        const value = matrix[row][col];
        if (value === target) return true;
        if (value > target) col -= 1;
        else row += 1;
    }
    return false;
}

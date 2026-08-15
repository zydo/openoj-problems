function twoEggDrop(n: number): number {
    let cover = 0,
        moves = 0;
    while (cover < n) {
        moves++;
        cover += moves;
    }
    return moves;
}

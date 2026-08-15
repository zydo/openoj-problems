function matchPlayersAndTrainers(
    players: number[],
    trainers: number[],
): number {
    players = players.slice().sort((a, b) => a - b);
    trainers = trainers.slice().sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    let matches = 0;
    while (i < players.length && j < trainers.length) {
        if (players[i] <= trainers[j]) {
            matches += 1;
            i += 1;
            j += 1;
        } else {
            j += 1;
        }
    }
    return matches;
}

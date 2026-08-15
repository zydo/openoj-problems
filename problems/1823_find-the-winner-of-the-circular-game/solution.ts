function findTheWinner(n: number, k: number): number {
    const friends: number[] = [];
    for (let i = 1; i <= n; i++) friends.push(i);
    let idx = 0;
    while (friends.length > 1) {
        idx = (idx + k - 1) % friends.length;
        friends.splice(idx, 1);
    }
    return friends[0];
}

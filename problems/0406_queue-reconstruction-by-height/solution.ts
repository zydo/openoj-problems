function reconstructQueue(people: number[][]): number[][] {
    const ordered = people
        .map((p) => [p[0], p[1]])
        .sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]));
    const queue: number[][] = [];
    for (const person of ordered) {
        queue.splice(person[1], 0, person);
    }
    return queue;
}

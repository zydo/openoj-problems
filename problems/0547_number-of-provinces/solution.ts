function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length;
    const visited = new Array<boolean>(n).fill(false);
    let provinces = 0;
    for (let start = 0; start < n; start++) {
        if (visited[start]) {
            continue;
        }
        provinces++;
        visited[start] = true;
        const stack: number[] = [start];
        while (stack.length > 0) {
            const city = stack.pop()!;
            for (let other = 0; other < n; other++) {
                if (isConnected[city][other] === 1 && !visited[other]) {
                    visited[other] = true;
                    stack.push(other);
                }
            }
        }
    }
    return provinces;
}

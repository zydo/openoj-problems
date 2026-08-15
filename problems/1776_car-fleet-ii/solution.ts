function getCollisionTimes(cars: number[][]): number[] {
    const n = cars.length;
    const answer: number[] = new Array(n).fill(-1);
    const stack: number[] = [];
    for (let i = n - 1; i >= 0; i--) {
        const position = cars[i][0],
            speed = cars[i][1];
        while (stack.length > 0 && speed <= cars[stack[stack.length - 1]][1]) {
            stack.pop();
        }
        while (stack.length > 0) {
            const j = stack[stack.length - 1];
            const t = (cars[j][0] - position) / (speed - cars[j][1]);
            if (answer[j] > 0 && t >= answer[j]) {
                stack.pop();
            } else {
                answer[i] = t;
                break;
            }
        }
        stack.push(i);
    }
    return answer;
}

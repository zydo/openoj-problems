function corpFlightBookings(bookings: number[][], n: number): number[] {
    const diff = new Array(n + 1).fill(0);
    for (const [first, last, seats] of bookings) {
        diff[first - 1] += seats;
        diff[last] -= seats;
    }
    const answer: number[] = [];
    let running = 0;
    for (let i = 0; i < n; i++) {
        running += diff[i];
        answer.push(running);
    }
    return answer;
}

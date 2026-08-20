function countArrivalGroups(destination: number, starts: number[], velocities: number[]): number {
    const n = starts.length;
    // Cars cannot pass each other, so sweep from the car nearest
    // the destination backward.
    const cars: Array<[number, number]> = Array.from({ length: n }, (_, i) => [starts[i], velocities[i]]);
    cars.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
    let fleets = 0;
    let lastTime = 0.0;
    for (const [pos, spd] of cars) {
        // A car's fate is its alone-time to the destination.
        const time = (destination - pos) / spd;
        // Strictly later never catches the fleet ahead: a new
        // fleet lead. Otherwise it merges (equality at the destination
        // merges), and lastTime — the current fleet's arrival
        // time — stays put.
        if (time > lastTime) {
            fleets++;
            lastTime = time;
        }
    }
    return fleets;
}

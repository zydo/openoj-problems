function carFleet(target: number, position: number[], speed: number[]): number {
    const n = position.length;
    const cars: Array<[number, number]> = Array.from({ length: n }, (_, i) => [
        position[i],
        speed[i],
    ]);
    cars.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
    let fleets = 0;
    let lastTime = 0.0;
    for (const [pos, spd] of cars) {
        const time = (target - pos) / spd;
        if (time > lastTime) {
            fleets++;
            lastTime = time;
        }
    }
    return fleets;
}

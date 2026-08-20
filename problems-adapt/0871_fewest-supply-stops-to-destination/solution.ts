function minimumSupplyStops(destination: number, initialRange: number, supplies: number[][]): number {
    let fuel = initialRange;
    const available: number[] = []; // fuels at supplies already passed
    let stops = 0;
    let i = 0;
    const n = supplies.length;
    while (true) {
        if (fuel >= destination) {
            return stops;
        }
        while (i < n && supplies[i][0] <= fuel) {
            available.push(supplies[i][1]);
            i++;
        }
        if (available.length === 0) {
            return -1;
        }
        let best = 0;
        for (let j = 1; j < available.length; j++) {
            if (available[j] > available[best]) {
                best = j;
            }
        }
        fuel += available[best];
        available[best] = available[available.length - 1];
        available.pop();
        stops++;
    }
}

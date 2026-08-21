impl Solution {
    pub fn count_arrival_groups(destination: i32, starts: Vec<i32>, velocities: Vec<i32>) -> i32 {
        // Cars cannot pass each other, so sweep from the car nearest
        // the destination backward.
        let mut cars: Vec<(i32, i32)> = starts.into_iter().zip(velocities).collect();
        cars.sort_by(|a, b| b.0.cmp(&a.0).then(b.1.cmp(&a.1)));
        let mut fleets = 0;
        let mut last_time = 0.0f64;
        for &(pos, spd) in &cars {
            // A car's fate is its alone-time to the destination.
            let time = (destination - pos) as f64 / spd as f64;
            // Strictly later never catches the fleet ahead: a new
            // fleet lead. Otherwise it merges (equality at the destination
            // merges), and last_time — the current fleet's arrival
            // time — stays put.
            if time > last_time {
                fleets += 1;
                last_time = time;
            }
        }
        fleets
    }
}

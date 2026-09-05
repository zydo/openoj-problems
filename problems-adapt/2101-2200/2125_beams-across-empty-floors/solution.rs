impl Solution {
    pub fn cross_beams(floors: Vec<String>) -> i32 {
        let mut beams = 0;
        let mut previous = 0;
        for row in floors {
            let devices = row.bytes().filter(|&cell| cell == b'1').count() as i32;
            if devices > 0 {
                beams += previous * devices;
                previous = devices;
            }
        }
        beams
    }
}

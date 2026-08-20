impl Solution {
    pub fn fewest_pairing_swaps(line: Vec<i32>) -> i32 {
        let mut arr: Vec<i32> = line.clone();
        let n = arr.len();
        let mut pos: Vec<usize> = vec![0; n];
        for (i, &value) in arr.iter().enumerate() {
            pos[value as usize] = i;
        }

        let mut swaps: i32 = 0;
        let mut i = 0usize;
        while i < n {
            let first = arr[i];
            let partner = first ^ 1; // partners are (0,1), (2,3), ...
            if arr[i + 1] == partner {
                i += 2;
                continue;
            }
            let j = pos[partner as usize];
            let other = arr[i + 1];
            arr[i + 1] = partner;
            arr[j] = other;
            pos[partner as usize] = i + 1;
            pos[other as usize] = j;
            swaps += 1;
            i += 2;
        }
        swaps
    }
}

impl Solution {
    pub fn min_operations(mut nums: Vec<i32>, nums_divide: Vec<i32>) -> i32 {
        let mut g = 0i32;
        for value in nums_divide {
            g = gcd(g, value);
        }
        nums.sort_unstable();
        for (index, value) in nums.iter().enumerate() {
            if g % value == 0 {
                return index as i32;
            }
        }
        -1
    }
}

fn gcd(a: i32, b: i32) -> i32 {
    if b == 0 {
        a
    } else {
        gcd(b, a % b)
    }
}

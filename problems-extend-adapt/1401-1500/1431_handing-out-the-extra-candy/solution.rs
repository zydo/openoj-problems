impl Solution {
    pub fn can_lead_after_bonus(candies: Vec<i32>, extra_candies: i32) -> Vec<bool> {
        let maximum = *candies.iter().max().unwrap();
        candies.iter().map(|&count| count + extra_candies >= maximum).collect()
    }
}

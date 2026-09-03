use std::collections::HashSet;

impl Solution {
    pub fn count_deluxe(l: i64, r: i64) -> i64 {
        // Strictly increasing numbers draw digits from 1..9; strictly
        // decreasing ones from 0..9 with no leading zero. Enumerate every
        // nonempty digit subset once per direction and deduplicate.
        let mut set: HashSet<i64> = HashSet::new();
        for mask in 1..(1 << 9) {
            let mut num: i64 = 0;
            for d in 1..10 {
                if mask & (1 << (d - 1)) != 0 {
                    num = num * 10 + d;
                }
            }
            set.insert(num);
        }
        for mask in 1..(1 << 10) {
            let mut num: i64 = 0;
            for d in (0..10).rev() {
                if mask & (1 << d) != 0 {
                    num = num * 10 + d;
                }
            }
            if num > 0 {
                set.insert(num);
            }
        }
        let mut sleeks: Vec<i64> = set.iter().copied().collect();
        sleeks.sort();

        // sleek[s] == 1 when the integer s is itself strictly monotone;
        // those are exactly the sleek digit sums (s in [1, 144]).
        let mut sleek = vec![0i32; 145];
        for &g in &sleeks {
            if g <= 144 {
                sleek[g as usize] = 1;
            }
        }

        // overlap[i]: among sleeks[0..i), how many also have a sleek digit sum
        let mut overlap = vec![0i64; sleeks.len() + 1];
        for i in 0..sleeks.len() {
            overlap[i + 1] = overlap[i] + sleek[Self::digit_sum(sleeks[i])] as i64;
        }

        Self::count_up_to(r, &sleeks, &sleek, &overlap) - Self::count_up_to(l - 1, &sleeks, &sleek, &overlap)
    }

    fn count_up_to(x: i64, sleeks: &[i64], sleek: &[i32], overlap: &[i64]) -> i64 {
        // Deluxe = sleek digits OR sleek digit sum; subtract the sleeks whose
        // digit sum is also sleek (counted by both terms).
        Self::count_sleek_sum(x, sleek) + Self::count_sleek(x, sleeks) - Self::count_overlap(x, sleeks, overlap)
    }

    fn digit_sum(mut n: i64) -> usize {
        let mut s = 0;
        while n > 0 {
            s += (n % 10) as usize;
            n /= 10;
        }
        s
    }

    fn count_sleek(x: i64, sleeks: &[i64]) -> i64 {
        let mut lo = 0usize;
        let mut hi = sleeks.len();
        while lo < hi {
            let mid = (lo + hi) / 2;
            if sleeks[mid] <= x {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        lo as i64
    }

    fn count_overlap(x: i64, sleeks: &[i64], overlap: &[i64]) -> i64 {
        overlap[Self::count_sleek(x, sleeks) as usize]
    }

    fn count_sleek_sum(x: i64, sleek: &[i32]) -> i64 {
        // Numbers in [1, x] whose digit sum is a sleek sum.
        if x <= 0 {
            return 0;
        }
        let bytes = x.to_string();
        let bytes = bytes.as_bytes();
        let n = bytes.len();
        // ways[k][t]: k free digits (0-9, leading zeros allowed) summing to
        // exactly t. Counts reach ~10^15, past 32 bits, so the table is i64.
        let mut ways = vec![vec![0i64; 145]; n + 1];
        ways[0][0] = 1;
        for k in 1..=n {
            for t in 0..=144 {
                let mut total = 0i64;
                for d in 0..10 {
                    if t >= d {
                        total += ways[k - 1][t - d];
                    }
                }
                ways[k][t] = total;
            }
        }
        let mut result = 0i64;
        let mut running = 0usize;
        for i in 0..n {
            let v = (bytes[i] - b'0') as usize;
            let k = n - i - 1;
            // A smaller digit here fixes the prefix; the tail is free.
            for d in 0..v {
                let base = running + d;
                let limit = (9 * k).min(144 - base);
                for rem in 0..=limit {
                    if sleek[base + rem] == 1 {
                        result += ways[k][rem];
                    }
                }
            }
            running += v;
        }
        if sleek[running] == 1 {
            result += 1;
        }
        result
    }
}

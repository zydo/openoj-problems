impl Solution {
    pub fn nth_five_smooth(n: i32) -> i32 {
        let n = n as usize;
        // Every five-smooth number past 1 is a smaller one times 2, 3, or 5, so
        // the sequence is generated in order as the merge of three virtual
        // lists 2·U, 3·U, 5·U — no testing of arbitrary integers.
        let mut smooth = vec![0i32; n + 1];
        smooth[0] = 1;
        // One cursor per list, sitting on the source of its smallest
        // not-yet-emitted element.
        let (mut i2, mut i3, mut i5) = (0usize, 0usize, 0usize);
        for i in 1..=n {
            let m2 = smooth[i2] * 2;
            let m3 = smooth[i3] * 3;
            let m5 = smooth[i5] * 5;
            // The next five-smooth number is the smallest head of the three lists.
            let nxt = m2.min(m3).min(m5);
            smooth[i] = nxt;
            // Advance EVERY cursor whose candidate matched: 6 arises as
            // both 2·3 and 3·2, and the dual advance suppresses duplicates.
            if nxt == m2 {
                i2 += 1;
            }
            if nxt == m3 {
                i3 += 1;
            }
            if nxt == m5 {
                i5 += 1;
            }
        }
        // The array carries a leading 1, so the n-th five-smooth number is at n-1.
        smooth[n - 1]
    }
}

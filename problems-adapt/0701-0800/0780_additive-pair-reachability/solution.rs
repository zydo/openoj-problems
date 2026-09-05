impl Solution {
    pub fn can_transform_additive_pair(startA: i32, startB: i32, goalA: i32, goalB: i32) -> bool {
        let (mut goalA, mut goalB) = (goalA, goalB);
        // Work backwards from the target: the last forward move added
        // one coordinate to the other, so the larger must subtract the
        // smaller. Forward moves only grow coordinates, so stop once
        // either drops below its start value.
        while goalA >= startA && goalB >= startB {
            if goalA == startA && goalB == startB {
                return true;
            }
            // Plain modulo cannot land on an arbitrary target: once
            // goalA == startA, every remaining backwards step subtracts startA
            // from goalB, so the start is reachable exactly when the
            // residue is zero (symmetric for goalB == startB).
            if goalA == startA {
                return (goalB - startB) % startA == 0;
            }
            if goalB == startB {
                return (goalA - startA) % startB == 0;
            }
            // The modulo subtracts the smaller coordinate many times at
            // once, Euclidean-style: the same subtraction repeats until
            // the values cross.
            if goalA > goalB {
                goalA %= goalB;
            } else {
                goalB %= goalA;
            }
        }
        false
    }
}

# Solutions — Minimum Cost to Clear Flagged Cells

## Minimum subarray on a ±1 scoring

Picture any plan: it peels a prefix of cells off the left end and a suffix off
the right end, paying 1 per cell, and leaves one contiguous block in the middle
untouched. Inside that block every flagged cell still has to go at the interior
price of 2, while clean cells simply remain. A plan that keeps `s[l..r]` costs
`l + (n − 1 − r) + 2·ones(l..r)`, so choosing a plan means choosing a block.

The block is easiest to price against the extreme plan that peels the whole
row, costing exactly `n`. Relative to that baseline, a clean cell kept in the
block saves the 1 that peeling it would have cost, and a flagged cell kept in
the block pays 2 instead of that 1. Scoring each cell `+1` for `'1'` and `−1`
for `'0'` folds both effects into one number, and the plan's cost becomes
`n` plus the block's score. Minimizing cost is therefore minimizing the sum of
a contiguous block — with the empty block allowed, since peeling everything is
always a legal plan and scores 0.

That minimum is Kadane's sweep run for minima: `min_end` holds the best block
sum ending at the current cell (`min(value, min_end + value)`, restarting
whenever that pays), and `best` starts at 0 so the empty block stays a
candidate. The answer is `n + best`, never above `n`.

Two blocks tie for the minimum in example 1, `s = "1000101"`, scored
`+1 −1 −1 −1 +1 −1 +1`: positions 1–3 (`000`, score −3) describe peeling one
cell off the left and three off the right for 7 − 3 = 4, while positions 1–5
(`00010`, also −3) describe the mixed plan that peels one cell off each end
and pays 2 for the remaining flagged cell. In example 3 every block scores at
least +1, `best` stays 0, and the answer is `n` itself.

**Complexity:** `O(n)` time, `O(1)` space.

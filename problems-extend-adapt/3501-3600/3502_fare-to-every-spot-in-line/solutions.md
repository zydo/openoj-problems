# Solutions — Fare To Every Spot In Line

## Running minimum prefix

A swap with the person standing at position `j` costs `cost[j]` whenever `j`
is still in front of you, and once you have swapped into position `j` every
position after it is behind you and therefore free. So the cheapest route to
any position `i` is to aim for the cheapest swap among the people `0..i`
first, then coast forward: `answer[i]` is exactly `min(cost[0..i])`.

The answer is therefore a running minimum. Scan `cost` left to right,
carrying the smallest value seen so far, and write it into `ans[i]`; each
step extends the window `[0..i]` by one. The scan is a single pass over the
input and needs no auxiliary structure beyond the returned array.

On `[9,2,6,4,8]` the running minimum produces `[9,2,2,2,2]`: the prefix
minimum is `2` from index 1 onward and stays there. Costs are at most
`100`, so every value fits comfortably in 32 bits.

**Complexity:** `O(n)` time, `O(n)` space (the output array).

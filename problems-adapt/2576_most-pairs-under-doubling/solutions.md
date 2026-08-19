# Solutions — Most Pairs Under Doubling

## Two Pointers on the Sorted Array

Each move spends two positions, the cheap one `i` and the dear one `j`, tied
by `2 * nums[i] <= nums[j]`. To spend as many positions as possible, sort the
values and decide who plays which role: in any family of `p` pairs, the cheap
sides may as well be the `p` smallest values and the dear sides the `p`
largest — spending a large value on an easy match can only starve a later
pair.

Given that split, match the two sides _in order_: smallest cheap value with
the smallest dear value that covers it, and so on. This is the standard
exchange argument — pairing a smaller value with a larger partner than it
needs never enables extra pairs, because whatever fits under the displaced
partner also fits under the smaller unused one.

The implementation is one two-pointer sweep: `j` walks the upper half
starting at index `(n + 1) // 2` (more than that many pairs would force both
members of some pair into the same half), while `i` starts at the bottom and
advances only on `2 * nums[i] <= nums[j]`, counting a match. The answer is
`2 * i` — twice the matches.

Worked on Example 3, `nums = [2,10,4,7,3]`: sorted, `[2,3,4,7,10]`; the dear
pointer starts at the 7, where `2*2 <= 7` matches (cheap pointer to 3), then
at the 10, `2*3 <= 10` matches again. Two pairs, so four positions.

**Complexity:** `O(n log n)` time, `O(n)` space for the sorted copy.

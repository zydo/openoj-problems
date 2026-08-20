# Total Subarray Minima

## Description

Take `nums`, an array of positive integers. Every non-empty block of
consecutive entries has a smallest member; add up those smallest members over
all such blocks and return the total. The total can grow far past 32 bits, so
report it modulo `10^9 + 7`.

### Example 1

```text
Input: nums = [4,2,5,3]
Output: 27
Explanation: The ten blocks and their smallest members:
[4] -> 4, [2] -> 2, [5] -> 5, [3] -> 3,
[4,2] -> 2, [2,5] -> 2, [5,3] -> 3,
[4,2,5] -> 2, [2,5,3] -> 2, [4,2,5,3] -> 2.
Those add to 27.
```

### Example 2

```text
Input: nums = [7,7,4,9,4]
Output: 74
Explanation: Fifteen blocks in all. The two 4s are the smallest member of
most of them, which is what keeps the total low relative to the values.
```

### Constraints

- `1 <= nums.length <= 3 * 10^4`
- `1 <= nums[i] <= 3 * 10^4`

## Hints

### Hint 1

There are `n(n+1)/2` blocks, far too many to visit at the top of the range.
Turn the sum inside out: instead of asking each block for its smallest member,
ask each entry how many blocks it is the smallest member of. The total is then
`sum over i of nums[i] * (that count)`.

### Hint 2

An entry stays the smallest member exactly while the block avoids anything
smaller. So `nums[i]` rules the blocks whose left end sits after the closest
smaller entry to its left, and whose right end sits before the closest smaller
entry to its right. With `L` choices of left end and `R` choices of right end,
the count is simply `L * R`.

### Hint 3

Equal values would otherwise be counted twice, once for each of them, in every
block containing both. Break the symmetry: treat one side's search as looking
for a _strictly_ smaller entry and the other side's as looking for a smaller
_or equal_ one. Each block then belongs to exactly one of its tied minima.

### Hint 4

Both nearest-smaller lookups are the classic one-pass job for a stack kept in
increasing order of value: each index is pushed and popped once, so the two
passes cost `O(n)`. Missing boundaries stand for the array ends. Reduce with
the modulus, and in fixed-width languages keep the triple product in 64 bits
before reducing.

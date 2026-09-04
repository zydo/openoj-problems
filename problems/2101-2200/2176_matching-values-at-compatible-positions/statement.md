# Matching Values at Compatible Positions

## Description

Read a 0-indexed array `nums` of `n` integers as a row of positions, and
fix an integer `k`. Two positions `i` and `j`, taken with `i` on the left
of `j`, form a matching pair when both of these hold:

- the entries agree: `nums[i] == nums[j]`;
- the product of the positions, `i * j`, is a multiple of `k`.

Return how many matching pairs the array contains.

### Example 1

```text
Input: nums = [4,4,7,4,2], k = 3
Output: 3
Explanation:
- Positions 0 and 1 both hold 4, and 0 * 1 == 0 is a multiple of 3.
- Positions 0 and 3 both hold 4, and 0 * 3 == 0 is a multiple of 3.
- Positions 1 and 3 both hold 4, and 1 * 3 == 3 is a multiple of 3.
The 7 and the 2 appear only once each, so they contribute nothing.
```

### Example 2

```text
Input: nums = [5,6,5,5], k = 4
Output: 2
Explanation:
Positions 0, 2, and 3 all hold 5. The pairs (0, 2) and (0, 3) multiply
to 0, a multiple of 4; the remaining pair multiplies to 2 * 3 == 6,
which is not, so it does not count.
```

### Example 3

```text
Input: nums = [1,2,3], k = 1
Output: 0
Explanation:
Every entry is unique, so no two positions ever match.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i], k <= 100`

## Hints

### Hint 1

The array holds at most 100 entries, so the total number of position
pairs stays under five thousand — small enough to examine directly.

### Hint 2

A pair of positions earns the count only after passing both filters at
once: identical values, and an index product that `k` divides with no
remainder.

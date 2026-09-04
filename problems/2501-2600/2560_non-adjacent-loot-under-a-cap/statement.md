# Non-Adjacent Loot Under a Cap

## Description

You are given an integer array `nums`, where `nums[i]` is the value held at
position `i`, and an integer `k`.

Choose at least `k` positions so that no two chosen positions are
neighbours. The **cap** of a selection is the largest value it contains.
Return the smallest cap that any legal selection can achieve.

`k` non-adjacent positions always exist, so a selection is always possible.

### Example 1

```text
Input: nums = [4,7,2,9,6], k = 2
Output: 4
Explanation: Positions 0 and 2 hold 4 and 2, and they are not neighbours,
so cap 4 works. The only smaller candidate value is 2, and position 2 is
then the sole eligible position — one pick, not the two required.
```

### Example 2

```text
Input: nums = [5,1,4,2,8,3], k = 3
Output: 3
Explanation: Positions 1, 3 and 5 hold 1, 2 and 3, and no two of them are
neighbours, so cap 3 covers three picks. Under cap 2 only positions 1 and
3 qualify, which falls short.
```

### Example 3

```text
Input: nums = [9,12,7], k = 1
Output: 7
Explanation: One position is legal on its own, so the best choice is the
smallest value in the array.
```

### Constraints

- `nums` holds between `1` and `10⁵` values.
- Every value is an integer from `1` to `10⁹` inclusive.
- `1 <= k <= (nums.length + 1) / 2`

## Hints

### Hint 1

The answer is one of the values in `nums`. Guess a cap `c` and ask a
simpler question: do at least `k` pairwise non-neighbour positions hold
values no greater than `c`?

### Hint 2

One left-to-right sweep answers that question: count the current position
whenever it fits under `c` and then step past its neighbour, otherwise
advance a single step. Passing over an eligible position can never gain
anything, so the sweep counts the maximum.

### Hint 3

A cap that admits `k` picks is still admissible at any larger cap — the
question is monotone. Binary search the candidate values for the smallest
cap that passes the sweep.

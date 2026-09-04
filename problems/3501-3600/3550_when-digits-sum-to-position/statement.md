# When Digits Sum to the Position

## Description

You are given an integer array `nums`. Read it from the front and find the
first position `i` where the digits of `nums[i]` add up to exactly `i`.

Return that position, or `-1` if no position qualifies.

### Example 1

```text
Input: nums = [4,21,3,30]
Output: 3
Explanation: The digits of 4 sum to 4, not position 0; the digits of 21
sum to 3, not position 1; the digits of 3 sum to 3, not position 2.
Position 3 finally works: 30 contributes 3 + 0 = 3. The output is 3.
```

### Example 2

```text
Input: nums = [9,10,4,3,13]
Output: 1
Explanation: Position 1 is the earliest winner — 10 contributes
1 + 0 = 1. Position 4 would qualify too, since 13 contributes 1 + 3 = 4,
but the smallest matching position is what counts, so the output is 1.
```

### Example 3

```text
Input: nums = [100,5]
Output: -1
Explanation: 100 contributes a digit sum of 1 against position 0, and 5
contributes 5 against position 1. Nothing matches, so the output is -1.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 1000`

## Hints

### Hint 1

Adding a value's digits is all the arithmetic needed — with values capped
at `1000`, each entry costs at most a few additions.

### Hint 2

Walk positions left to right and answer at the first agreement; if the
walk finishes without one, no position matches.

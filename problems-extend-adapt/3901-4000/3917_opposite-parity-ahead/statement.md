# Opposite Parity Ahead

## Description

You are given an integer array `nums` of length `n`.

Give each index `i` a score: the number of positions `j` with
`i < j < n` whose value disagrees with `nums[i]` in parity — one of the two
even while the other is odd.

Return an array `answer` of length `n` where `answer[i]` holds the score of
index `i`.

### Example 1

```text
Input: nums = [8,5,2,7,4,6]
Output: [2,3,1,2,0,0]
Explanation:
    Index 0 holds the even value 8; the odd values 5 and 7 come after it,
    so its score is 2.
    Index 1 holds the odd value 5; the even values 2, 4, and 6 come after
    it, so its score is 3.
    Index 2 holds the even value 2; only the later odd value 7 counts, so
    its score is 1.
    Index 3 holds the odd value 7; the later even values 4 and 6 count, so
    its score is 2.
    The last two indices have no later positions at all, so both score 0.
```

### Example 2

```text
Input: nums = [3,3,4,4,5]
Output: [2,2,1,1,0]
Explanation: Each odd 3 sees the two later 4s across the parity line, each
even 4 sees the later 5, and the final 5 sees nothing after it.
```

### Example 3

```text
Input: nums = [9]
Output: [0]
Explanation: With a single element there is no later position for it to
measure against, so the score is 0.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

A direct double loop over all index pairs is fast enough for these bounds.

### Hint 2

You can do it in one pass too: sweep from the right, keeping running counts
of even and odd values already seen, and record the opposite count before
folding the current value in.

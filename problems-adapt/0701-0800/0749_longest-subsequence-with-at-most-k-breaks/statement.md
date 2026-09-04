# Longest Subsequence With at Most K Breaks

## Description

You are given an integer array `nums` and a non-negative integer `k`.

Call a position `i` (with `0 <= i <= len - 2`) a **break** of a sequence when
its neighbors there hold different values — `seq[i] != seq[i + 1]`. The
sequence is _smooth enough_ when breaks occur at no more than `k` of its
positions.

Return the length of the longest subsequence of `nums` that is smooth enough.

### Example 1

```text
Input: nums = [4,4,7,4,9], k = 1
Output: 4
Explanation: Keeping the three 4s and then the final 9 gives [4,4,4,9], whose
only break sits between the last 4 and the 9 — one break, within the budget.
```

### Example 2

```text
Input: nums = [5,8,5,5,8], k = 0
Output: 3
Explanation: With no breaks allowed, every kept entry must match its
predecessor, so the pick is [5,5,5].
```

### Example 3

```text
Input: nums = [2,9,2,9,2], k = 2
Output: 4
Explanation: [2,9,2,2] uses its two allowed breaks on the first three
entries and then stays on 2s; the full array would need four breaks, one per
adjacent pair, so length 5 is out of reach.
```

### Constraints

- `1 <= nums.length <= 5 * 10³`
- `1 <= nums[i] <= 10⁹`
- `0 <= k <= min(50, nums.length)`

## Hints

### Hint 1

The magnitudes never matter — only which entries are equal — so remap the
distinct values to compact ids.

### Hint 2

Track, per count of breaks already spent, the longest pick ending in each
value: extending by an equal value spends nothing, extending by a different
value spends one break.

### Hint 3

The "best over every different value" term is what looks expensive; a running
top-two per break level serves it in constant time.

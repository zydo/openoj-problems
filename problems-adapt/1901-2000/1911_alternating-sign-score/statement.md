# Alternating Sign Score

## Description

Choose any subsequence of `nums` — a selection of entries that keeps their
original left-to-right order — and number the chosen entries from zero. The
score of the choice is the total of its even-numbered entries minus the
total of its odd-numbered entries.

Return the greatest score any subsequence of `nums` can reach. For example,
given `[8, 1, 6]`, keeping all three entries scores `(8 + 6) - 1 = 13`.

### Example 1

```text
Input: nums = [8,1,6]
Output: 13
Explanation: The pick [8,1,6] scores (8 + 6) - 1 = 13, and no selection
beats it.
```

### Example 2

```text
Input: nums = [3,9,4,7,2]
Output: 12
Explanation: The pick [9,4,7] scores 9 - 4 + 7 = 12. Skipping the 3 costs
nothing because 9 starts a fresh even position once renumbered.
```

### Example 3

```text
Input: nums = [7]
Output: 7
Explanation: The only sensible pick is [7], whose sole entry sits at an
even position, scoring 7.
```

### Example 4

```text
Input: nums = [5,4,3,2,1]
Output: 5
Explanation: Any entry after the leading 5 would only be subtracted or
paired against smaller gains later, so [5] alone is optimal.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## Hints

### Hint 1

One running total cannot work: whether an entry is added or subtracted
depends on how many entries were kept before it, so that parity has to be
part of the state.

### Hint 2

Carry two best-so-far values through the scan — the best score of a pick
whose most recent entry sits at an even position, and the best for one
ending at an odd position. Each new element updates both in constant time:
it either joins the opposite-parity pick or is skipped.

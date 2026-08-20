# Signed Totals To A Target

## Description

You are given an integer array `nums` and an integer `target`.

Place a `'+'` or a `'-'` in front of every entry and add the signed values
up. For instance, `nums = [4, 6]` produces the four expressions `+4+6`,
`+4-6`, `-4+6`, and `-4-6`, evaluating to `10`, `-2`, `2`, and `-10`.

Return the number of sign placements whose total equals `target`. Placements
count separately even when they evaluate alike — a `'+'` and a `'-'` before a
`0` are two different placements.

### Example 1

```text
Input: nums = [2,2,2,2], target = 0
Output: 6
Explanation: The total is zero exactly when two of the four entries carry the
minus sign, and there are C(4,2) = 6 ways to choose which two:
-2-2+2+2, -2+2-2+2, -2+2+2-2, +2-2-2+2, +2-2+2-2, +2+2-2-2.
```

### Example 2

```text
Input: nums = [3,0,3], target = 6
Output: 2
Explanation: Both 3's must be positive, and the 0 may carry either sign, so
the two placements +3+0+3 and +3-0+3 both count.
```

### Example 3

```text
Input: nums = [4,2], target = 1
Output: 0
Explanation: Every placement yields an even total (+6, +2, -2, -6), so none
reaches 1.
```

### Constraints

- `1 <= nums.length <= 20`
- `0 <= nums[i] <= 1000`
- `0 <= sum(nums[i]) <= 1000`
- `-1000 <= target <= 1000`

## Hints

### Hint 1

Enumerating all `2^n` placements is feasible at `n <= 20` but wasteful. What
is the smallest bookkeeping that captures everything about the placements
tried so far?

### Hint 2

After each entry, all that matters is which running totals are reachable and
how many placements reach each — a map from total to count, where every entry
splits each total into total + value and total - value.

### Hint 3

Totals that land on the same number merge and their counts add, so the map
never grows like `2^i`; its keys stay inside a window of width twice the
overall sum.

### Hint 4

Zeros need no special case: their two branches land on the same total through
different placements, doubling the count — which is exactly what the problem
asks for.

# Sortable by Shared-Factor Swaps

## Description

You are given an integer array `nums`. Any number of times, you may pick two
positions `i` and `j` and exchange the values found there — but the exchange
is legal only when those two values have a common divisor greater than `1`,
that is, when `gcd(nums[i], nums[j]) > 1`.

Report `true` if some sequence of legal exchanges can bring `nums` into
non-decreasing order, and `false` if no sequence can.

Exchanges compose: two values that cannot be exchanged directly may still
end up swapped through intermediate stops, provided each hop along the way
pairs values sharing a divisor.

### Example 1

```text
Input: nums = [35,6,14]
Output: true
Explanation: gcd(35, 6) is 1, so those two never exchange directly, yet
both reach their places: swap 35 and 14 (common divisor 7) to get
[14,6,35], then swap 14 and 6 (common divisor 2) to get [6,14,35].
```

### Example 2

```text
Input: nums = [14,3,10]
Output: false
Explanation: 3 shares no divisor with 14 or with 10, so the 3 can never
move away from position 1 — and in sorted order something other than 3
belongs there.
```

### Example 3

```text
Input: nums = [4,6,9,4]
Output: true
Explanation: Swap 6 and 4 (common divisor 2) to get [4,4,9,6], then swap
9 and 6 (common divisor 3) to get [4,4,6,9]. The repeated 4s make the
first exchange free: either 4 can sit at position 0.
```

### Constraints

- `1 <= nums.length <= 3 * 10⁴`
- `2 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Two values sharing a prime can be exchanged. What does a longer chain of
exchanges say about which values can end up at which positions?

### Hint 2

Every value is at most `10^5`, so each one factors into a handful of primes.
Grouping values by the primes they contain turns "reachable by exchanges"
into a question about connected components.

### Hint 3

Compare the array with its sorted self, position by position: sorting is
possible exactly when each value and the value that should replace it belong
to the same component.

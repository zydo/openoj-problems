# Count Arrays Along Divisor Chains

## Description

You are given two integers `n` and `maxValue`.

Call an integer array of length `n` a divisor-chain array when both of these
hold:

- every entry is a value from `1` to `maxValue`, and
- every entry after the first is a multiple of the entry just before it.

Return the number of distinct divisor-chain arrays of length `n`. Because the
count grows fast, report it modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 2, maxValue = 4
Output: 8
Explanation: The second entry must be a multiple of the first:
- First entry 1 (4 arrays): [1,1], [1,2], [1,3], [1,4]
- First entry 2 (2 arrays): [2,2], [2,4]
- First entry 3 (1 array): [3,3]
- First entry 4 (1 array): [4,4]
That is 4 + 2 + 1 + 1 = 8 arrays in all.
```

### Example 2

```text
Input: n = 4, maxValue = 2
Output: 5
Explanation: Beyond the constant arrays [1,1,1,1] and [2,2,2,2], the chain
of values 1 | 2 can occupy the four slots with the 2s as one trailing run:
[1,1,1,2], [1,1,2,2], [1,2,2,2] — three more, for 5 in total.
```

### Example 3

```text
Input: n = 3, maxValue = 3
Output: 7
Explanation: Three constant arrays, plus [1,1,2] and [1,2,2] from the chain
1 | 2, plus [1,1,3] and [1,3,3] from the chain 1 | 3. Neither 2 nor 3 has a
strict multiple within the bound, so no longer chain exists.
```

### Constraints

- `2 <= n <= 10⁴`
- `1 <= maxValue <= 10⁴`

## Hints

### Hint 1

Since every entry divides the next, values never decrease — the distinct
values of an array, in order, form a chain under strict divisibility.

### Hint 2

Count those chains of each length first, setting aside the question of how
many times each value repeats.

### Hint 3

Spreading a chain of `L` values across `n` slots means cutting the slots into
`L` non-empty runs — a stars-and-bars count you may recognize.

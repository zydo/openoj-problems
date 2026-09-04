# Spread of Equal Values

## Description

Given an array `arr` of `n` integers, look at every pair of positions that
hold the same number. The gap between positions `i` and `j` is measured as
`|i - j|`.

For each index `i`, add up the gaps from `arr[i]` to every other occurrence
of that same value, and report the total in `spread[i]`. An index returns
`0` when its value occurs only once.

### Example 1

```text
Input: arr = [7,3,7,7,3]
Output: [5,3,3,4,3]
Explanation: The 7s sit at indices 0, 2, and 3, the 3s at indices 1 and 4.
- Index 0: |0 - 2| + |0 - 3| = 5
- Index 1: |1 - 4| = 3
- Index 2: |2 - 0| + |2 - 3| = 3
- Index 3: |3 - 0| + |3 - 2| = 4
- Index 4: |4 - 1| = 3
```

### Example 2

```text
Input: arr = [4,4,4]
Output: [3,2,3]
Explanation: All three positions match: index 0 pays 1 + 2, index 1 pays
1 + 1, index 2 pays 2 + 1.
```

### Example 3

```text
Input: arr = [9,5,9,1,9,5]
Output: [6,4,4,0,6,4]
Explanation: Each 9 pairs with the 9s at indices 0, 2, and 4, each 5 pairs
with the 5s at indices 1 and 5, and the lone 1 has no partner, so index 3
reports 0.
```

### Constraints

- `n == arr.length`
- `1 <= n <= 10⁵`
- `1 <= arr[i] <= 10⁵`

## Hints

### Hint 1

Bucket the positions by value: every value owns the sorted list of indices
where it appears, and the lists can be built in one pass with a hash map.

### Hint 2

Handle each bucket on its own. Within one bucket, the gap sum for a member
can be written in terms of how many bucket members lie to its left and
right and the sums of their indices.

### Hint 3

Sweeping once per bucket with a running count and running index sum turns
each neighbor's contribution into simple arithmetic — no per-pair loop.
Watch the totals: they can overflow 32 bits.

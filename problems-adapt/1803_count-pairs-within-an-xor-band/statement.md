# Count Pairs Within an XOR Band

## Description

You are given an integer array `nums` and two integers `low` and `high` with
`low <= high`.

A pair of positions `(i, j)` with `i < j` lies inside the XOR band when
`low <= nums[i] XOR nums[j] <= high`. Return how many pairs do.

### Example 1

```text
Input: nums = [5,2,10,8], low = 3, high = 12
Output: 3
Explanation: The pairs inside the band are:
- (0, 1): 5 XOR 2 = 7
- (1, 2): 2 XOR 10 = 8
- (1, 3): 2 XOR 8 = 10
The other three pairs land outside: their XORs are 15, 13 and 2.
```

### Example 2

```text
Input: nums = [7,15], low = 8, high = 8
Output: 1
Explanation: The band is a single value here, and 7 XOR 15 = 8 hits it.
```

### Example 3

```text
Input: nums = [4,4,11,11], low = 5, high = 15
Output: 4
Explanation: Equal values XOR to 0, which falls below the band, so the two
same-value pairs miss. Each of the four mixed pairs gives 4 XOR 11 = 7.
```

### Constraints

- `1 <= nums.length <= 2 * 10⁴`
- `1 <= nums[i] <= 2 * 10⁴`
- `1 <= low <= high <= 2 * 10⁴`

## Hints

### Hint 1

A band count is two threshold counts: pairs with XOR at most `high`, minus
pairs with XOR below `low`. Solve the threshold version once.

### Hint 2

For a threshold `k`, stream the values left to right and ask, for each value,
how many earlier values XOR with it to at most `k` — a binary trie over the
bits can answer while it inserts.

### Hint 3

Walking the bits of `k` from the top, every `1` bit prices out a whole subtree
in one step through the count stored at its root.

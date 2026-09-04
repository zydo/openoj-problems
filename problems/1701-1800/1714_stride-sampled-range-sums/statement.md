# Stride-Sampled Range Sums

## Description

Given a **0-indexed** array `nums` of `n` non-negative integers and a list
of queries, where `queries[i] = [x_i, y_i]`, the `i`-th query walks the
arithmetic progression that starts at index `x_i` and advances by `y_i`:
it asks for the sum of all `nums[j]` with `x_i <= j < n` whose distance
`j - x_i` from the start is a multiple of `y_i`.

Answer every query, each sum reduced modulo `10⁹ + 7`, and return the
answers in the order the queries were given.

### Example 1

```text
Input: nums = [3,1,4,1,5,9,2,6], queries = [[1,2],[0,4],[2,3]]
Output: [17,8,13]
Explanation: The first query reads indices 1, 3, 5, 7: 1 + 1 + 9 + 6 = 17.
The second reads indices 0 and 4: 3 + 5 = 8. The third reads indices 2
and 5: 4 + 9 = 13.
```

### Example 2

```text
Input: nums = [7,11,8,10,9,13,6], queries = [[0,1],[3,2],[6,5]]
Output: [64,23,6]
Explanation: A step of 1 from index 0 sweeps the whole array: 64. A step
of 2 from index 3 reads indices 3 and 5: 10 + 13 = 23. A step of 5 from
index 6 never gets past the final cell: 6.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 5 × 10⁴`
- `0 <= nums[i] <= 10⁹`
- `1 <= queries.length <= 1.5 × 10⁵`
- `0 <= x_i < n`
- `1 <= y_i <= 5 × 10⁴`

## Hints

### Hint 1

A long step needs no help: the stride itself is then short, and one direct
walk touches only `O(n / y)` positions.

### Hint 2

Short steps recur across queries. For every step size below a chosen
threshold, precompute running sums along each of its residue chains, and
any short-step query turns into one subtraction between two entries.

### Hint 3

Weighing the `O(n · B)` preprocessing against the `O(q · n / B)` direct
walks lands the threshold at `B ≈ sqrt(n)`.

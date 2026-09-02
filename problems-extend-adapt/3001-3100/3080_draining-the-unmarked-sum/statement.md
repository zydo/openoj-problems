# Draining The Unmarked Sum

## Description

Start with a 0-indexed array `nums` of `n` positive integers whose entries
are all unmarked, plus a list `queries` of `m` pairs, where
`queries[i] = [index_i, k_i]`. Process the pairs in order. The `i`th pair:

- Marks the entry at position `index_i`, unless it is marked already.
- Then marks `k_i` of the still-unmarked entries with the smallest values,
  breaking ties toward the smaller index. If fewer than `k_i` unmarked
  entries exist, every one of them gets marked.

After each pair, record the total of the entries that are still unmarked,
and return these `m` totals in order.

### Example 1

```text
Input: nums = [5,2,4,1,3], queries = [[1,2],[3,1],[0,1]]
Output: [9,5,0]
Explanation:
- The first pair marks index 1 and then the two smallest unmarked values, 1 and 3. Only 5 and 4 survive, so the total is 9.
- The second pair names index 3, which is already marked, and then marks the smallest remaining value, 4. Only 5 survives, for a total of 5.
- The third pair marks index 0, the last unmarked entry, and nothing is left for its k step. The total is 0.
```

### Example 2

```text
Input: nums = [7,1,6], queries = [[0,1]]
Output: [6]
Explanation: Marking index 0 removes 7, and the k step then removes the smallest unmarked value, 1. The 6 at the end is all that remains.
```

### Example 3

```text
Input: nums = [2,2], queries = [[1,5],[0,0]]
Output: [0,0]
Explanation: The first pair clears the whole array — index 1 directly, then the only other entry during a k step that asks for more marks than exist. The second pair finds nothing left to mark, so the total stays 0.
```

### Constraints

- `nums` has `n` entries and `queries` has `m` pairs, with `1 <= m <= n <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- Every pair holds `0 <= index_i, k_i <= n - 1`

## Hints

### Hint 1

Marked entries never become unmarked again, so one forward pass over the
entries sorted by value (index breaking ties) can serve every query's
k-smallest step.

### Hint 2

Keep a running total and subtract each value the moment it is marked — the
total can outgrow 32 bits.

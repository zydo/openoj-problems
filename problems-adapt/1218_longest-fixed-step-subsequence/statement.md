# Longest Fixed-Step Subsequence

## Description

You are given an integer array `arr` and an integer `step`. Pick elements out
of `arr`, left to right but not necessarily adjacent, so that each picked
element is exactly `step` larger than the one picked before it.

Return the greatest number of elements such a pick can contain.

### Example 1

```text
Input: arr = [4,7,10,13], step = 3
Output: 4
Explanation: Every element continues the chain: 4, 7, 10, 13.
```

### Example 2

```text
Input: arr = [6,3,9,1], step = 2
Output: 1
Explanation: No element's successor-by-2 appears anywhere to its right, so a
single element is the best pick.
```

### Example 3

```text
Input: arr = [8,1,6,4,2,5,0], step = -2
Output: 5
Explanation: 8, 6, 4, 2, 0 stride downward through the array while the 1 and
the 5 are left behind.
```

### Constraints

- `1 <= arr.length <= 10⁵`
- `-10⁴ <= arr[i], step <= 10⁴`

## Hints

### Hint 1

A chain only ever grows by landing on one particular value next: the current
value plus `step`. That single constraint prunes almost everything a general
longest-subsequence search would compare.

### Hint 2

So the useful memory is not "best chain ending at position i" but "best
chain ending at value v" — a lookup by value replaces the scan.

### Hint 3

One left-to-right sweep updates that table: the chain ending at `x` is one
longer than the best chain recorded for `x - step`, or length 1 when nothing
there has appeared yet.

### Hint 4

Reading the table before writing the new entry is what keeps the chain
pointing left to right — the current position can never serve as its own
predecessor.

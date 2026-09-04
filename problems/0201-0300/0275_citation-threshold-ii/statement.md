# Citation Threshold II

## Description

You are given an integer array `citations` sorted in non-descending order,
where `citations[i]` is the number of times the researcher's ith paper has
been cited. Return the researcher's citation threshold score, defined as
the largest integer `t` such that at least `t` of the papers have each
been cited at least `t` times.

Because the array arrives already sorted, solve this in logarithmic time
rather than scanning it.

### Example 1

```text
Input: citations = [0,0,3,3,3,4,5]
Output: 3
Explanation: Among the 7 papers, 4 of them (the ones cited 3, 3, 4, and 5
times) have at least 3 citations, so a score of 3 is reachable. A score of
4 would require 4 papers cited at least 4 times, but only 2 papers clear
that bar, so 3 is the largest achievable score.
```

### Example 2

```text
Input: citations = [7,7,7,7]
Output: 4
Explanation: All 4 papers have at least 4 citations each, so the score is
capped at the paper count itself.
```

### Constraints

- `n == citations.length`
- `1 <= n <= 10⁵`
- `0 <= citations[i] <= 1000`
- `citations` is sorted in ascending order.

## Hints

### Hint 1

The sorted order lets you binary search directly for the answer instead
of testing every candidate score in a linear scan.

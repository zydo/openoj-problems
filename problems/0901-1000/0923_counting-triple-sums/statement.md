# Counting Triple Sums

## Description

Given an integer array `arr` and an integer `target`, count the index
triples `(i, j, k)` with `i < j < k` whose values add up to the target:
`arr[i] + arr[j] + arr[k] == target`.

Repeated values make the count positional: every distinct choice of three
positions is its own triple, even when the values at those positions look
alike. The answer can be enormous, so return it modulo 10⁹ + 7.

### Example 1

```text
Input: arr = [1,2,3,4,5], target = 9
Output: 2
Explanation: Only the value combinations (1,3,5) and (2,3,4) reach 9, and
each value appears once, so exactly two triples qualify.
```

### Example 2

```text
Input: arr = [0,0,0,0], target = 0
Output: 4
Explanation: Any three of the four positions qualify, and there are
C(4,3) = 4 such choices.
```

### Example 3

```text
Input: arr = [2,2,2,4,4,4], target = 8
Output: 9
Explanation: Only the value multiset (2,2,4) reaches 8: choose two of the
three 2's in C(3,2) = 3 ways and one of the three 4's in 3 ways, giving
nine triples.
```

### Constraints

- `3 <= arr.length <= 3000`
- `0 <= arr[i] <= 100`
- `0 <= target <= 300`

# Fewest Distinct Values After K Deletions

## Description

You are given an integer array `arr` and an integer `k`. You must delete
exactly `k` elements from `arr`; two elements of the same value are
interchangeable, so what matters is only how many copies of each value
survive.

Return the smallest number of distinct values the array can contain
after the deletions.

### Example 1

```text
Input: arr = [2,2,7,8,8,8], k = 2
Output: 2
Explanation: Erasing the lone 7 spends one deletion; the second
deletion cannot finish off either surviving value, so 2 and 8 remain.
```

### Example 2

```text
Input: arr = [1,2,3,4], k = 4
Output: 0
Explanation: The deletion budget equals the array length, so every
element can be removed and nothing survives.
```

### Example 3

```text
Input: arr = [6], k = 0
Output: 1
Explanation: With no deletions allowed, the single value stays.
```

### Constraints

- `1 <= arr.length <= 10^5`
- `1 <= arr[i] <= 10^9`
- `0 <= k <= arr.length`

## Hints

### Hint 1

Tally how many copies of each distinct value the array holds; a value
leaves the array only when all of its copies are deleted.

### Hint 2

Spend the budget on the rarest values first — each of them is the
cheapest way to remove one distinct value from the tally.

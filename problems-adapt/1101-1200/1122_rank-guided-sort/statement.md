# Rank-Guided Sort

## Description

You are given two integer arrays, `arr1` and `arr2`. Every value in `arr2`
is distinct, and each of them also occurs somewhere in `arr1`.

Reorder `arr1` under two rules. First come the values that `arr2` names,
grouped by value and the groups laid out in the same order `arr2` gives.
Everything `arr2` never mentions goes after them, sorted ascending. Return
the rearranged array.

### Example 1

```text
Input: arr1 = [4,3,8,3,4,10,3,7], arr2 = [3,4,7]
Output: [3,3,3,4,4,7,8,10]
```

The groups for `3`, `4`, and `7` follow `arr2`'s ordering; `8` and `10`
were never named, so they trail behind in ascending order.

### Example 2

```text
Input: arr1 = [15,28,15,6,42], arr2 = [28,15]
Output: [28,15,15,6,42]
```

### Example 3

```text
Input: arr1 = [1,20,3,20], arr2 = [1]
Output: [1,3,20,20]
```

With only `1` ranked, the leftover values `3` and `20` settle ascending.

### Constraints

- `1 <= arr1.length, arr2.length <= 1000`
- `0 <= arr1[i], arr2[i] <= 1000`
- All values in `arr2` are distinct.
- Each `arr2[i]` appears in `arr1`.

## Hints

### Hint 1

A value's position is fully decided by where it sits in `arr2` — a lookup
table from value to that position turns the rule into a number per value.

### Hint 2

Give unranked values a common rank worse than any ranked one and let the
value itself break the tie; then one sort does everything.

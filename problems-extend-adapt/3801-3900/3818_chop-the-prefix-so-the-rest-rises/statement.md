# Chop The Prefix So The Rest Rises

## Description

You are given an integer array `nums`.

In one move you must delete one prefix of `nums` — the first several
elements, possibly none of them — and nothing else.

Return the smallest number of elements that prefix can contain so that
whatever remains is strictly increasing.

### Example 1

```text
Input: nums = [10,20,5,6,7,8]
Output: 2
Explanation: Dropping the prefix [10, 20] leaves [5, 6, 7, 8], which
climbs strictly. No shorter prefix works because 20 is not below 5.
```

### Example 2

```text
Input: nums = [1,3,2,4,6,5,7]
Output: 5
Explanation: The rightmost out-of-order neighbors are 6 and 5, so
everything up to that 6 has to go. The survivor [5, 7] is strictly
increasing.
```

### Example 3

```text
Input: nums = [2,2,2]
Output: 2
Explanation: Equal neighbors break strictness just as much as descending
ones, so any surviving pair would fail; keeping only the final 2 is the
best possible.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Whatever survives a prefix deletion is a suffix, and a suffix is strictly
increasing exactly when every neighboring pair inside it is in order.

### Hint 2

So the cut must sit to the right of every violating pair, and the cheapest
legal cut sits just one slot past the rightmost violation.

### Hint 3

Scan from the right end and stop at the first index `i` where
`nums[i] >= nums[i + 1]`; the answer is `i + 1`, or `0` when no such index
exists.

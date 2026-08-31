# Count Bounded Even-Odd Subarrays II

## Description

You are given an integer array `nums` and two integers `a` and `b`.

For any subarray, let `x` be how many of its elements are even and `y` be
how many are odd, and compare the exact rational ratio `x / y` against
`a / b`.

Call the subarray bounded when it contains at least one odd element (so the
ratio is defined) and `x / y <= a / b`.

Return how many subarrays of `nums` are bounded.

### Example 1

```text
Input: nums = [3,4,3,4], a = 3, b = 2
Output: 7
Explanation: A subarray qualifies here whenever its even count is at most
1.5 times its odd count. Every one of the seven subarrays spanning indices
0-0, 0-1, 0-2, 0-3, 1-2, 2-2, and 2-3 satisfies that — each carries no more
than one even element for every odd element it contains. The two
single-element subarrays at index 1 and index 3 fail outright, since a lone
even value has no odd element to compare against.
```

### Example 2

```text
Input: nums = [4,4,3], a = 2, b = 1
Output: 3
Explanation: Here a subarray qualifies whenever it has at most twice as
many even elements as odd ones. The full array (2 even, 1 odd) just meets
that bound, as does index range 1-2 (1 even, 1 odd) and the single index 2
(0 even, 1 odd) — three subarrays in total. The single-element subarrays
at index 0 and the pair at indices 0-1 fail, holding no odd element at all.
```

### Example 3

```text
Input: nums = [4,4,4], a = 1, b = 1
Output: 0
Explanation: With no odd elements anywhere in the array, no subarray can
ever satisfy the bound, so every one of them fails.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= a, b <= 10⁹`

## Hints

### Hint 1

Replace every even value with `b` and every odd value with `-a`. A
subarray is bounded exactly when the sum of its transformed values is at
most `0`.

### Hint 2

That transformed-sum condition automatically enforces "at least one odd
element": a subarray made entirely of even values has a strictly positive
transformed sum, so it can never pass on its own.

### Hint 3

Let `pref[i]` be the prefix sum of the transformed array. A subarray
`[l, r]` is bounded exactly when `pref[r + 1] <= pref[l]`.

### Hint 4

Scanning the prefix sums left to right, count how many earlier prefix sums
are at least the current one using coordinate compression paired with a
Fenwick tree, since `nums` can be far too long for the quadratic scan that
suffices at smaller sizes.

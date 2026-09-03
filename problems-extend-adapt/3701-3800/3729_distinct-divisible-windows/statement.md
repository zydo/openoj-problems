# Distinct Divisible Windows

## Description

You are given an integer array `nums` whose values never decrease, along
with a positive integer `k`.

A window — any contiguous span of `nums` — is called **divisible** when the
sum of its elements is a multiple of `k`.

Windows are compared by the values they hold, not by where they sit in the
array: two spans are the same window exactly when they read alike, element
for element. For instance, `[1, 1, 1]` holds three distinct windows —
`[1]`, `[1, 1]`, and `[1, 1, 1]` — even though the shortest of them begins
at three different spots.

Return how many distinct divisible windows `nums` contains.

### Example 1

```text
Input: nums = [1,2,2,4], k = 3
Output: 3
Explanation: The divisible windows are [1,2], [2,4], and [1,2,2,4], whose
sums 3, 6, and 9 are each a multiple of 3. No two of them hold the same
sequence of values.
```

### Example 2

```text
Input: nums = [7,7,7,7], k = 3
Output: 1
Explanation: A window built only of 7s sums to 7 times its length, so it
is divisible exactly when that length is a multiple of 3. Among windows of
four elements only length 3 qualifies, giving the one distinct window
[7,7,7] no matter how many positions it starts at.
```

### Example 3

```text
Input: nums = [2,2,2,6], k = 4
Output: 3
Explanation: The divisible windows are [2,2], [2,6], and [2,2,2,6], with
sums 4, 8, and 12. The span [2,2] occurs at two different positions but
carries a single sequence of values, so it counts once.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `nums` is sorted in non-decreasing order.
- `1 <= k <= 10⁹`

## Hints

### Hint 1

A window's sum is the difference of two prefix sums, so it is a multiple
of `k` precisely when the two prefixes leave the same remainder modulo
`k`.

### Hint 2

Sortedness pins down where repeats can hide. A span that crosses a strict
increase is identified by where the crossing happens and how many elements
it takes from each side, so no other span can read the same. Identical
value sequences can therefore recur only inside a single run of equal
elements.

### Hint 3

Inside a run holding value `v`, a window of length `L` sums to `L * v` and
is divisible exactly when `(L * v) % k == 0`. Tally each qualifying length
once per run, and the duplicates left behind by the positional sweep
disappear.

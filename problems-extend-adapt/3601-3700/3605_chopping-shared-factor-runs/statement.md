# Chopping Shared-Factor Runs

## Description

You are given an integer array `nums` and an integer `maxC`.

Call a subarray stable when the greatest common divisor of all of its
elements is at least 2. The longest stable subarray present in an array
is what we are after — think of it as the array's longest run of numbers
that share a common factor.

You are allowed to replace at most `maxC` elements with any integers you
like. Return the smallest value the longest stable-subarray length can
be forced down to. If no stable subarray can remain at all, return 0.

Note:

- The gcd of a group of numbers is the largest integer dividing every one
  of them.
- A single-element subarray `[x]` is stable exactly when `x >= 2`, since
  its gcd is `x` itself.

### Example 1

```text
Input: nums = [4,8,3,9], maxC = 1
Output: 2
Explanation: The pair [4, 8] shares the factor 4, so the array starts
with a stable run of length 2. A single edit cannot do better than
leaving one stable pair behind: changing the 8 to 1 still leaves [3, 9]
with gcd 3, and changing the 3 (or the 9) to 1 still leaves [4, 8]. No
window of length 3 or more is stable either way, so the answer is 2.
```

### Example 2

```text
Input: nums = [6,10,15], maxC = 1
Output: 1
Explanation: Adjacent pairs share factors — gcd(6, 10) = 2 and
gcd(10, 15) = 5 — so stable pairs exist. Replacing the 10 with 1 gives
[6, 1, 15], where every pair has gcd 1 and only single elements
like [6] remain stable. The answer is 1.
```

### Example 3

```text
Input: nums = [2,2,2,2], maxC = 0
Output: 4
Explanation: No edits are allowed, and the whole array has gcd 2, so the
longest stable subarray is the entire array of length 4.
```

### Example 4

```text
Input: nums = [2,4,3,9,6], maxC = 1
Output: 2
Explanation: Two separate stable stretches live here: [2, 4] with gcd 2
and [3, 9, 6] with gcd 3. One edit can damage at most one of them, so
some stable pair must survive, and 2 is achievable — replace the 9 with
1, leaving [2, 4, 3, 1, 6] whose longest stable subarray is [2, 4].
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `0 <= maxC <= n`

## Hints

### Hint 1

Ask for each candidate length `k` whether `maxC` edits suffice to leave
no stable subarray longer than `k`; the yes-answers form a prefix, so
binary-search `k`.

### Hint 2

A length-`(k+1)` window survives exactly when its gcd is at least 2, and
range-gcd queries can be answered in constant time after a sparse-table
precomputation.

### Hint 3

Replacing an element with 1 kills every window covering it, so test
feasibility greedily: sweep the windows of length `k+1` left to right
and, whenever an uncovered window still has gcd above 1, spend an edit on
its rightmost cell.

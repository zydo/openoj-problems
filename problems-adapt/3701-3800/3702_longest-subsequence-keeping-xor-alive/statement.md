# Longest Subsequence Keeping XOR Alive

## Description

Given an integer array `nums`, choose a subsequence of it — any subset of the
elements, kept in their original order. The subsequence's bitwise XOR is the
value obtained by XOR-ing all of its elements together.

Your task is to make that XOR non-zero while keeping as many elements as
possible. Return the length of the longest subsequence whose bitwise XOR is
non-zero. If every possible subsequence XORs to zero, return `0`.

### Example 1

```text
Input: nums = [5,12,5]
Output: 3
Explanation: The whole array already has a living XOR: 5 XOR 12 XOR 5 = 12,
so all three elements can stay.
```

### Example 2

```text
Input: nums = [8,3,11]
Output: 2
Explanation: XOR-ing everything gives 8 XOR 3 XOR 11 = 0, so the full array
is disqualified. Dropping one element leaves a pair whose XOR is the removed
value — for instance 8 XOR 3 = 11 — and no longer choice exists.
```

### Example 3

```text
Input: nums = [0,0,0]
Output: 0
Explanation: Zero contributes nothing to an XOR, so every subsequence of an
all-zero array XORs to zero and nothing qualifies.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Order never matters to an XOR, so only the multiset of kept values counts.
Start by computing the XOR of the entire array.

### Hint 2

If that total is zero, look at what removing a single element `v` does: the
remaining XOR becomes `v` itself.

### Hint 3

If the array is entirely zeros, no subsequence can escape a zero XOR.

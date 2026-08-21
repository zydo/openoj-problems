# Subsequences With Bounded Ends

## Description

You are given an integer array `nums` and an integer `target`.

Count the non-empty subsequences of `nums` whose smallest and largest
elements add up to at most `target`. Since the count can be huge, report it
modulo `10^9 + 7`.

### Example 1

```text
Input: nums = [2,4,5,9], target = 8
Output: 5
Explanation: [2], [4], [2,4], [2,5] and [2,4,5] qualify. The 9 joins
nothing: even paired with the 2 it exceeds 8. Note [5] alone fails too —
its smallest and largest element are both 5, and 5 + 5 > 8.
```

### Example 2

```text
Input: nums = [3,3,6,4], target = 9
Output: 13
Explanation: Repeated values count separately. Fixing the subsequence's
smallest element at each of the two 3s contributes 8 and 4, and the 4
standing alone contributes 1; nothing containing the 6 next to a 4 works
because 4 + 6 > 9, except through the 3s.
```

### Example 3

```text
Input: nums = [5,10], target = 9
Output: 0
Explanation: Even alone each element fails: 5 + 5 = 10 and 10 + 10 = 20
both exceed 9.
```

### Constraints

- `1 <= nums.length <= 100,000`
- `1 <= nums[i] <= 1,000,000`
- `1 <= target <= 1,000,000`

## Hints

### Hint 1

A subsequence is a matter of membership, not order — reorder the array
freely and the count is untouched. Once sorted, the test involves only the
two extreme members of a chosen set.

### Hint 2

Fix the smallest chosen element at index `i` of the sorted array and find
the farthest index `j` whose value still satisfies the bound with it.

### Hint 3

Every element strictly between `i` and `j` may be taken or dropped freely,
so that smallest element alone accounts for `2^(j-i)` subsequences.
Precompute the powers of two modulo `10^9 + 7`, and let two pointers
walking inward from both ends find `j` for every `i` in one sweep.

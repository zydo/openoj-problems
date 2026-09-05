# Closest Reversal Pairs

## Description

You are given an integer array `nums`. Call a pair of indices `(i, j)` a
reversal pair when `i < j` and writing the decimal digits of `nums[i]` in
reverse order produces exactly `nums[j]`. Any zeros the reversal would lead
with disappear — reading `120` backwards gives `21`, not `021`.

Return the smallest index gap `abs(i - j)` over all reversal pairs, or `-1`
if the array contains none.

### Example 1

```text
Input: nums = [32,5,23,100,1]
Output: 1
Explanation: Two reversal pairs exist: (0, 2), since reverse(32) = 23 =
nums[2], with a gap of 2, and (3, 4), since reverse(100) = 1 = nums[4],
with a gap of 1. The smaller gap is 1.
```

### Example 2

```text
Input: nums = [4,9,14,3,41]
Output: 2
Explanation: The only reversal pair is (2, 4): reverse(14) = 41 = nums[4].
The gap abs(2 - 4) = 2, so that is the answer.
```

### Example 3

```text
Input: nums = [12,34,56]
Output: -1
Explanation: Reversing 12, 34, and 56 gives 21, 43, and 65 — none of which
appear after their source index — so no reversal pair exists.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Walk the array once with a hash map keyed by reversed values. When the
current element `nums[j]` is already a key, the stored index is the nearest
earlier supplier of exactly that value, so the gap to it is the only
candidate worth checking for that key.

### Hint 2

After the lookup, record the current index under key `reverse(nums[j])`,
overwriting whatever was there — a nearer supplier stays the best possible
completion for every future match.

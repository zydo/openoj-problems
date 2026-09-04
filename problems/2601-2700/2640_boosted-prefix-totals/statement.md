# Boosted Prefix Totals

## Description

For an array `arr`, define its boosted array `boost` by

    boost[i] = arr[i] + max(arr[0..i])

where `max(arr[0..i])` is the largest value among `arr[0]` through
`arr[i]`. The total of `arr` is then the sum of all entries of its boosted
array.

Given a 0-indexed integer array `nums` of length `n`, return an array
`ans` of length `n` such that `ans[i]` is the total of the prefix
`nums[0..i]`.

### Example 1

```text
Input: nums = [4,1,6,2]
Output: [8,13,25,33]
Explanation:
Prefix [4] boosts to [8], totalling 8.
Prefix [4,1] boosts to [8,5], totalling 13.
Prefix [4,1,6] boosts to [8,5,12], totalling 25.
Prefix [4,1,6,2] boosts to [8,5,12,8], totalling 33.
```

### Example 2

```text
Input: nums = [3,3,3]
Output: [6,12,18]
Explanation: Every prefix sees the same running maximum of 3, so each
boosted value equals twice an element and the totals accumulate to 6, 12,
and 18.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

The running maximum of the elements seen so far is all you need at each
step.

### Hint 2

Find how `ans[i]` relates to `ans[i - 1]`.

### Hint 3

For `0 < i < n`, `ans[i] = ans[i - 1] + boost[i]` — in other words, `ans`
is just the prefix-sum array of the boosted array.

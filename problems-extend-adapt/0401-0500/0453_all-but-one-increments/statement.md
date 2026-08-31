# All-But-One Increments

## Description

Given an integer array `nums`, return the fewest moves needed to make every
element equal. A single move increments every element except one — you pick
which element is left out each time.

### Example 1

```text
Input: nums = [3,2,1]
Output: 3
Explanation: Skip the first position twice and the second once:
[3,2,1] => [3,3,2] => [3,4,3] => [4,4,4].
```

### Example 2

```text
Input: nums = [1,100]
Output: 99
Explanation: Leaving the larger element out of every move increments the
smaller one 99 times, until both reach 100.
```

### Example 3

```text
Input: nums = [-2,-5,0]
Output: 8
Explanation: Eight moves bring every element to 3, skipping the `-2` three
times and the `0` five times.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`
- The answer is guaranteed to fit in a 32-bit integer.

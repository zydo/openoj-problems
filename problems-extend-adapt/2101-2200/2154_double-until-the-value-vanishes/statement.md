# Double Until the Value Vanishes

## Description

You are given an integer array `nums` and an integer `original`, the first
value to look for in `nums`.

Then repeat the following:

- As long as the current value appears somewhere in `nums`, replace it with
  its double.
- The first time the current value is absent from `nums`, stop.

Return the value the process ends on.

### Example 1

```text
Input: nums = [4,7,10,8,16], original = 4
Output: 32
Explanation:
- 4 is present, so it is doubled to 8.
- 8 is present, so it is doubled to 16.
- 16 is present, so it is doubled to 32.
- 32 is absent from nums, so 32 is returned.
```

### Example 2

```text
Input: nums = [3,3,6,12,25], original = 3
Output: 24
Explanation:
- 3 is present (the second copy changes nothing), so it is doubled to 6.
- 6 and then 12 are also present, giving 24.
- 24 is absent, so 24 is returned.
```

### Example 3

```text
Input: nums = [9,14], original = 7
Output: 7
Explanation: 7 never appears in nums, so no doubling happens and 7 is
returned right away.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i], original <= 1000`

## Hints

### Hint 1

Every round of the process asks exactly one question: "does this one value
appear in `nums`?" What structure makes that question independent of the
array's length?

### Hint 2

Load the values into a hash set once; each membership test then costs
expected constant time, and the doubling loop becomes trivial.

### Hint 3

The walk is short by nature — every array value is at most `1000`, so the
process must stop by `2048` at the latest.

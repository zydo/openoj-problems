# Any Repeated Value

## Description

You are given an integer array `nums`. Return `true` if some value shows up
two or more times anywhere in it, and `false` when every element is
different from all the others.

### Example 1

```text
Input: nums = [8,3,-1,3]
Output: true
Explanation: 3 occupies positions 1 and 3.
```

### Example 2

```text
Input: nums = [8,3,-1,0,5]
Output: false
Explanation: No two positions hold the same value.
```

### Example 3

```text
Input: nums = [-4,-4]
Output: true
Explanation: The two entries are equal.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

One pass suffices if, at each element, you can ask "have I met this value
before?" — and get the answer fast.

### Hint 2

Drop each value into a hash set as you pass it. Meeting a value that is
already inside means its second copy just arrived; reaching the end without
that happening means everything was distinct.

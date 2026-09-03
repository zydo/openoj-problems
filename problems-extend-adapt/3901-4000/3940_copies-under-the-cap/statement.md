# Copies Under The Cap

## Description

You are given an integer array `nums` arranged in non-decreasing order,
together with an integer `k`.

Thin the array out so that no distinct value survives more than `k`
times, and every survivor stays in its original left-to-right position.
A value that occurs `k` times or more must end up occurring exactly `k`
times; rarer values keep all of their copies.

Return the thinned array.

### Example 1

```text
Input: nums = [2,2,2,2,5,5,7], k = 3
Output: [2,2,2,5,5,7]
Explanation: The value 2 fills its cap of three copies, so its fourth
copy is dropped. The value 5 keeps both of its copies and 7 keeps its
only one.
```

### Example 2

```text
Input: nums = [3,3,3,3], k = 2
Output: [3,3]
Explanation: A single value repeated four times is cut back to exactly
the two copies it is allowed.
```

### Example 3

```text
Input: nums = [1,1,2,2,3,3], k = 5
Output: [1,1,2,2,3,3]
Explanation: With a cap of 5, no run of equal values is long enough to
be trimmed, so the array comes back unchanged.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `nums` is sorted in non-decreasing order.
- `1 <= k <= nums.length`

### Hint 1

Sorted input means equal values sit side by side, so a single
left-to-right pass with a counter for the current run is all you need.

### Hint 2

Append a value only while the running count for its run is still below
`k`; once the cap is reached, quietly step past the remaining extras
until a new value begins.

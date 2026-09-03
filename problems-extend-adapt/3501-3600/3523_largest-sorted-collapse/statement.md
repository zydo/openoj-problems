# Largest Sorted Collapse

## Description

You are given an integer array `nums` (0-indexed).

One collapse operation picks a contiguous stretch of the array and fuses it
into a single element equal to the maximum value in that stretch.

Apply any number of collapse operations — possibly none — so that the
resulting array is non-decreasing, meaning every element is greater than or
equal to the one before it. Among all arrays reachable this way, return the
largest possible length.

### Example 1

```text
Input: nums = [3,1,4,1,5]
Output: 3
Explanation:
Collapse the stretch nums[1..2] = [1, 4] into its maximum 4, giving
[3, 4, 1, 5]. Then collapse nums[2..3] = [1, 5] into 5, giving [3, 4, 5],
which is non-decreasing. No sequence of collapses can do better than
length 3.
```

### Example 2

```text
Input: nums = [2,2,2]
Output: 3
Explanation:
The array is already non-decreasing — equal neighbors are allowed — so no
collapse is needed and all three elements survive.
```

### Example 3

```text
Input: nums = [9,8,7,6]
Output: 1
Explanation:
Strictly decreasing input: any two adjacent survivors would still be out of
order, so everything must fuse into one element, and that element is 9.
```

### Constraints

- `1 <= nums.length <= 2 * 10⁵`
- `1 <= nums[i] <= 2 * 10⁵`

## Hints

### Hint 1

Sweep the array once from the left while carrying the largest value seen so
far.

### Hint 2

A position can contribute a fresh element of the final array exactly when
its value reaches that running maximum — ties included. Collapsing such a
position away can never help a later position, so simply count how many
times the running maximum is reached or beaten.

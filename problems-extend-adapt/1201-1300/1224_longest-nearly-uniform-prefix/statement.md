# Longest Nearly-Uniform Prefix

## Description

Given an array `nums` of positive integers, find the length of the longest
prefix with this property: after deleting exactly one element from that
prefix, every value that still occurs in it occurs the same number of times
as every other value that still occurs.

Deleting the only copy of a value is allowed — that value then simply no
longer occurs. A prefix that becomes empty after the deletion also
satisfies the property, so a one-element prefix always qualifies.

Return that longest length.

### Example 1

```text
Input: nums = [7,9,7,4,9]
Output: 5
Explanation: The whole array works: dropping the lone 4 leaves two 7s
and two 9s, each appearing twice.
```

### Example 2

```text
Input: nums = [3,3,3,8,8]
Output: 5
Explanation: The whole array works: dropping one copy of 3 leaves two 3s
and two 8s, each appearing twice.
```

### Example 3

```text
Input: nums = [10,20,30,40]
Output: 4
Explanation: Every value appears once, so removing any single element
leaves three values that each appear once.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Walk the array left to right and, after each element, look at the spread
between the smallest and largest occurrence counts so far.

### Hint 2

A one-element fix exists only in two shapes: one value's count sits
exactly one above a shared count, or a single value occurs once beside a
uniform class.

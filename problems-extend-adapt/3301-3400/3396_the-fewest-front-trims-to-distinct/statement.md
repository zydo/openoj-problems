# The Fewest Front Trims To Distinct

## Description

An array is distinct when no value shows up twice. Given an integer array
`nums`, make its remaining elements distinct using as few applications as
possible of this single move:

- Trim the first three elements off the front of the array. If fewer than
  three elements remain, trim them all.

The empty array counts as distinct. Return the fewest trims needed.

### Example 1

```text
Input: nums = [3,3,3,3]
Output: 1
Explanation: One trim drops the first three 3s and leaves [3], which is
trivially distinct, so the answer is 1.
```

### Example 2

```text
Input: nums = [10,20,30,10,40]
Output: 1
Explanation: The two 10s sit at opposite ends. After trimming the front trio
the array is [10, 40], which is distinct, so one trim suffices.
```

### Example 3

```text
Input: nums = [2,7,2,4,9,4]
Output: 2
Explanation: The two 4s are three positions apart. One trim leaves
[4, 9, 4], which still repeats the 4; the second trim empties the array. The
answer is 2.
```

### Example 4

```text
Input: nums = [5]
Output: 0
Explanation: A lone element never repeats a value, so nothing needs trimming.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Only the tail matters. Each trim discards exactly three leading elements, so
the question is how far the longest duplicate-free suffix of `nums` begins.

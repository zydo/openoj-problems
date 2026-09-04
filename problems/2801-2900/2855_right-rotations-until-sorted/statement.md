# Right Rotations Until Sorted

## Description

You are given a 0-indexed array `nums` of length `n` holding distinct
positive integers.

One right rotation moves the element at every index `i` over to index
`(i + 1) % n` — the last element wraps around to the front.

Return the fewest right rotations that leave `nums` in ascending order,
or `-1` if no amount of rotating can sort it.

### Example 1

```text
Input: nums = [5,1,2,3,4]
Output: 4
Explanation:
Rotation 1 gives [4,5,1,2,3].
Rotation 2 gives [3,4,5,1,2].
Rotation 3 gives [2,3,4,5,1].
Rotation 4 gives [1,2,3,4,5].
The array is sorted after 4 rotations, and fewer cannot do it.
```

### Example 2

```text
Input: nums = [2,4,6]
Output: 0
Explanation: The array is already in ascending order, so no rotation is
needed.
```

### Example 3

```text
Input: nums = [3,1,2,5,4]
Output: -1
Explanation: The array is not a rotation of its sorted order, so right
rotations alone can never sort it.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `nums` contains distinct integers.

## Hints

### Hint 1

An array that rotating can sort is one circular step away from sorted:
scan around the circle for the single place where the value drops.

### Hint 2

Ask what it means if the values descend at more than one position around
the circle — could any rotation fix both drops?

# Advance The Ordering

## Description

Read an array as one particular way its values can be lined up. Every
distinct lineup of those same values is an ordering of the array, and the
orderings can be ranked by comparing them left to right, the way words
are compared in a dictionary.

Your job is to rearrange `nums` into the ordering that ranks immediately
above the one it currently holds — the smallest arrangement that still
beats the current one. If no arrangement ranks above the current one,
wrap around instead and return the values sorted from smallest to
largest, which is the very first ordering.

The rearrangement must happen inside `nums` itself, with nothing more
than a few index variables of extra memory.

### Example 1

```text
Input: nums = [2,3,6,5,4,1]
Output: [2,4,1,3,5,6]
Explanation: The `3` rises to `4`, the smallest value that can fill that
slot while the prefix stays put, and the tail is laid out as low as it
can go.
```

### Example 2

```text
Input: nums = [4,3,2,1]
Output: [1,2,3,4]
Explanation: A strictly descending array is the last ordering there is,
so the answer wraps around to ascending order.
```

### Example 3

```text
Input: nums = [2,2,7,5,4,3]
Output: [2,3,2,4,5,7]
Explanation: The second `2` is the slot that can still step up; the `3`
takes it and the tail drops to its lowest arrangement.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`

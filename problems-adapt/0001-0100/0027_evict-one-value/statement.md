# Evict One Value

## Description

You are given an integer array `nums` and an integer `val`. Purge
`val` from the array in place: after your rearrangement no surviving
position may still hold `val`, and the array you return holds exactly
the elements that were spared.

The spared elements may sit in any order — nothing about their
original arrangement needs to survive, and whatever the process leaves
beyond the returned elements is of no concern. The length of the
returned array is the count of positions that did not hold `val`.

### Example 1

```text
Input: nums = [7,4,7,1,7], val = 7
Output: [4,1]
Explanation: The three 7s are all evicted; two elements never equal
to 7 remain.
```

### Example 2

```text
Input: nums = [2,0,5,0,8,0], val = 0
Output: [2,5,8]
Explanation: Each of the three 0s is gone and the other three values
stay.
```

### Example 3

```text
Input: nums = [9], val = 9
Output: []
Explanation: The only element is the one being evicted, so nothing
survives.
```

### Constraints

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

## Hints

### Hint 1

The elements that equal `val` do not really have to be erased — they
only have to stop being part of the surviving prefix. That frees you
to overwrite them with something that belongs there.

### Hint 2

Sweep the array once with a read position and a write position: every
element the read position finds that is not `val` gets copied down to
the write position, which only advances for survivors.

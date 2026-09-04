# Rolling Window Maxima

## Description

You are given an integer array `nums` and a window width `k`. Consider every
block of `k` consecutive entries, taken in order from the leftmost block to the
rightmost. Return the largest value in each block, as an array with one entry
per block.

An array of length `n` contains `n - k + 1` such blocks.

### Example 1

```text
Input: nums = [2,9,4,0,12,6,15,20], k = 3
Output: [9,9,12,12,15,20]
Explanation: The six blocks are 2 9 4, then 9 4 0, then 4 0 12, then 0 12 6,
then 12 6 15, and finally 6 15 20. Their largest values, in that order, are
the six numbers returned.
```

### Example 2

```text
Input: nums = [5,-2,-9], k = 1
Output: [5,-2,-9]
Explanation: A block of width one is a single entry, so every entry is its own
largest value and the array comes back unchanged.
```

### Example 3

```text
Input: nums = [-7,-7,-4,-9], k = 2
Output: [-7,-4,-4]
Explanation: Ties are no trouble — the first block holds two copies of -7.
The value -4 is the largest of two different blocks, once as the right entry
and once as the left.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `1 <= k <= nums.length`

## Hints

### Hint 1

Consecutive blocks overlap in `k - 1` entries, so recomputing a maximum from
scratch throws away almost everything the previous block already told you.

### Hint 2

An entry is worth remembering only while some future block could still be led
by it. If a newly arrived entry is at least as large as an older one, the older
one is finished — every block that will ever contain it contains the newcomer
too.

### Hint 3

Keep the survivors in arrival order and their values come out decreasing, so
the oldest survivor is both the one that expires first and the current answer.
That is a double-ended queue: discard from the back on arrival, from the front
on expiry.

# Gather the Ones on a Ring II

## Description

Picture the array as a ring: after the last element comes the first again,
so position `0` and position `n - 1` are neighbors. One swap picks any two
distinct positions and exchanges their values.

Given a binary ring `nums`, move things around so that every `1` in the
array ends up inside one contiguous arc of the ring — the block may sit
anywhere, and it may straddle the seam between the last and first
elements. Return the smallest number of swaps that achieves this.

### Example 1

```text
Input: nums = [1,0,1,0,0,1]
Output: 1
Explanation: The three ones can gather into positions 5, 0, and 1 — an
arc that wraps around the seam. Only the 0 at index 1 sits inside that
arc, and trading it with the 1 at index 2 fills the gap, so a single
swap is enough.
```

### Example 2

```text
Input: nums = [0,1,0,0,1,0,0,1,0]
Output: 2
Explanation: There are three ones and they sit evenly spaced, two zeros
apart from each neighbor. Any arc of length 3 around the ring catches at
most one of them, so no single swap can finish the job — two are needed
and two do suffice.
```

### Example 3

```text
Input: nums = [0,0,1,1,1,0]
Output: 0
Explanation: All three ones already form one contiguous run, and the run
does not even need to cross the seam. Nothing to swap.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `nums[i]` is `0` or `1`.

## Hints

### Hint 1

The size of the final block is not a choice — it equals the total count
of ones in the whole array.

### Hint 2

So the question becomes: over every arc of that fixed length on the ring,
how many swaps would gather the ones there? The zeros already inside the
arc are exactly the ones that must be swapped in from outside.

### Hint 3

Slide the arc one position at a time around the ring and keep a running
count of the ones it covers; the arc with the most ones minimizes the
swaps.

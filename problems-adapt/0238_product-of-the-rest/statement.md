# Product Of The Rest

## Description

You are given an integer array `nums`. Build an array of the same length whose
cell `i` holds the product of every entry of `nums` other than the one at `i`,
and return it.

Your algorithm has to finish in linear time, and it may not divide. Every
prefix product and every suffix product of `nums` is small enough to hold in a
signed 32-bit integer, as is each value you return.

### Example 1

```text
Input: nums = [3,5,2,4]
Output: [40,24,60,30]
Explanation: 5 * 2 * 4 = 40 for cell 0, 3 * 2 * 4 = 24 for cell 1, and so on.
```

### Example 2

```text
Input: nums = [-4,3,-1]
Output: [-3,4,-12]
Explanation: Signs multiply out like any other factor.
```

### Example 3

```text
Input: nums = [6,-2,0,7]
Output: [0,0,-84,0]
Explanation: Every cell whose product still contains the zero is zero; only
cell 2, which skips it, keeps a value: 6 * -2 * 7.
```

### Constraints

- `2 <= nums.length <= 10^5`
- Each `nums[i]` is between `-30` and `30`.
- The data is chosen so that every value you return fits in a signed 32-bit
  integer.

### Follow-up

The array you return is not counted against you. Can you get the extra space
down to `O(1)` on top of it?

## Hints

### Hint 1

Cell `i` skips exactly one entry, which splits the array in two: everything to
the left of `i` and everything to its right. Those two pieces multiply to the
answer.

### Hint 2

Running products give you both pieces in a single sweep each — left to right
for one, right to left for the other — so no cell has to be recomputed from
scratch.

### Hint 3

For the follow-up, note that the left running product for cell `i` is used the
instant it is available. Park it in the output array on the way out, then make
a second pass in reverse folding in a single right-hand accumulator.

# Where The Pebbles Settle

## Description

A 0-indexed integer array `nums` gives the starting spots of a row of
pebbles on a number line. Two more 0-indexed arrays, `moveFrom` and
`moveTo`, of equal length describe a sequence of instructions.

Carry out `moveFrom.length` instructions in order: on step `i`, every
pebble currently resting on spot `moveFrom[i]` slides over to spot
`moveTo[i]`.

When all instructions are done, return every spot that still holds at
least one pebble, sorted in increasing order.

Notes:

- A spot counts as occupied the moment a single pebble rests on it.
- Several pebbles may share one spot, and they travel together.

### Example 1

```text
Input: nums = [3,8,4], moveFrom = [3,8], moveTo = [7,4]
Output: [4,7]
Explanation: The pebbles start on spots 3, 8, and 4.
Step i = 0 moves the pebble on spot 3 to spot 7, leaving 4, 7, 8
occupied.
Step i = 1 moves the pebble on spot 8 onto spot 4, leaving 4 and 7.
The settled spots are [4,7].
```

### Example 2

```text
Input: nums = [5,5,9], moveFrom = [5,9], moveTo = [5,7]
Output: [5,7]
Explanation: Two pebbles share spot 5 and one sits on spot 9.
Step i = 0 orders spot 5 to move to itself — the pebbles stay put.
Step i = 1 moves the pebble on spot 9 to spot 7.
The settled spots are [5,7].
```

### Example 3

```text
Input: nums = [2,6,7], moveFrom = [2,7,6], moveTo = [6,6,10]
Output: [10]
Explanation: Step i = 0 joins the pebble on spot 2 with the one on
spot 6. Step i = 1 joins the pebble on spot 7 with them. Step i = 2
sweeps that whole crowd from spot 6 to spot 10, the only settled spot.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= moveFrom.length <= 10⁵`
- `moveFrom.length == moveTo.length`
- `1 <= nums[i], moveFrom[i], moveTo[i] <= 10⁹`
- Every step is issued while at least one pebble rests on its
  `moveFrom[i]` spot.

## Hints

### Hint 1

Individual pebbles never matter — only whether a spot is occupied. A
set of occupied spots captures the entire state.

### Hint 2

Walk the instruction pairs in order: drop `moveFrom[i]` from the set,
then insert `moveTo[i]`. Sorting the set at the end gives the answer.

# Fewest Hops II

## Description

A row of cells is indexed from `0`, and you begin on cell `0`. The value
`nums[i]` is how far you may travel onward from cell `i`: from there, one hop
can set you down on any cell `i + j` with `0 <= j <= nums[i]` that does not
run past the end of the row.

Count the fewest hops that land you on the final cell, `nums.length - 1`.
Every input guarantees the far end is reachable.

### Example 1

```text
Input: nums = [4,1,2,1,1,1]
Output: 2
```

The opening hop of 4 reaches cell 4, and the second hop of 1 lands on
cell 5, the last one.

### Example 2

```text
Input: nums = [1,1,1,1]
Output: 3
```

Every cell advances exactly one step, so each of the three gaps costs a
hop of its own.

### Example 3

```text
Input: nums = [3]
Output: 0
```

You already occupy the only cell, so the trip needs no hops at all.

### Constraints

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 1000`
- The last index is always reachable.

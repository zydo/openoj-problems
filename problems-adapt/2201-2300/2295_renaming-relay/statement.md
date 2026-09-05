# Renaming Relay

## Description

You are given a 0-indexed array `nums` of `n` distinct positive integers,
and a list of `m` rename operations. Operation `i` says: wherever the value
`operations[i][0]` currently sits in the array, swap that value out and put
`operations[i][1]` in its place — the position does not move, only the
stored value changes.

Each operation is guaranteed to be well formed:

- `operations[i][0]` is present somewhere in the array at that moment.
- `operations[i][1]` is present nowhere in the array at that moment.

Because a replacement value can itself be replaced by a later operation,
values may pass through several names over the run — and a name that has
retired may even re-enter the array through an earlier-indexed operation.
Return what `nums` looks like after every operation has been applied.

### Example 1

```text
Input: nums = [5,12,9], operations = [[12,4],[5,20],[4,5]]
Output: [20,5,9]
Explanation:
- Replace 12 with 4. nums becomes [5,4,9].
- Replace 5 with 20. nums becomes [20,4,9].
- Replace 4 with 5. nums becomes [20,5,9].
Note that 5 retired in the second operation and then re-entered as the
replacement in the third.
```

### Example 2

```text
Input: nums = [3,8], operations = [[3,6]]
Output: [6,8]
Explanation:
Only the 3 is touched; it becomes a 6 in the same position.
```

### Example 3

```text
Input: nums = [10], operations = []
Output: [10]
Explanation:
With no operations, the array is returned unchanged.
```

### Constraints

- `n == nums.length`
- `m == operations.length`
- `1 <= n, m <= 10⁵`
- All values in `nums` are distinct.
- `operations[i].length == 2`
- `1 <= nums[i], operations[i][0], operations[i][1] <= 10⁶`
- `operations[i][0]` exists in the array when operation `i` runs.
- `operations[i][1]` does not exist in the array when operation `i` runs.

## Hints

### Hint 1

Finding a value by scanning the array each time is far too slow at these
bounds. Some address book — keyed by value, pointing at position — lets
each operation touch the right slot immediately.

### Hint 2

Working backwards is another angle: process the operations from last to
first and record, for every retired value, the name it ultimately ends up
as. Then a single pass over `nums` resolves every element at once.

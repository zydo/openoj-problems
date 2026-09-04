# Where The New Value Lands

## Description

An array `nums` holds distinct values already arranged in ascending
order. For a value `target`, return the index at which `target` belongs:
its own index when it is already present, or the slot it would drop into
if it were added while the array stayed ascending.

Adding at the end is a legitimate answer, so a `target` larger than every
existing value maps to the index just past the last element.

The answer must be found in `O(log n)` time — a probe pattern that never
touches every element is required, so a linear scan will not do.

### Example 1

```text
Input: nums = [4,8,15,21,30], target = 15
Output: 2
Explanation: `15` is already in the array at index 2.
```

### Example 2

```text
Input: nums = [4,8,15,21,30], target = 12
Output: 2
Explanation: `12` is absent; slotting it at index 2 keeps the array
ascending, between `8` and `15`.
```

### Example 3

```text
Input: nums = [3,6,9], target = 14
Output: 3
Explanation: `14` beats every existing value, so it lands one slot past
the end.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `-10⁴ <= nums[i] <= 10⁴`
- `nums` holds distinct values in ascending order.
- `-10⁴ <= target <= 10⁴`

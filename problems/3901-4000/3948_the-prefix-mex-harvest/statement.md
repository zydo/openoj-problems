# The Prefix MEX Harvest

## Description

The MEX of an array is the smallest non-negative integer that does not
occur in it.

Starting from `nums`, one harvest step picks a nonempty prefix, appends its
MEX to a `result` list, and deletes that prefix from the array. Steps
repeat until nothing is left.

Return the lexicographically largest `result` that any sequence of harvest
steps can produce.

### Example 1

```text
Input: nums = [1,0,1]
Output: [2,0]
Explanation:
    Harvest the prefix [1,0], whose MEX is 2, and the leftover [1] then
    contributes a 0. The list [2,0] beats sweeping the whole array in one
    step, which would only collect [2].
```

### Example 2

```text
Input: nums = [2,1,0,1]
Output: [3,0]
Explanation:
    The prefix [2,1,0] already gathers the values 0, 1, and 2, so its
    MEX is 3 while the tail [1] still adds a closing 0 — [3,0] instead
    of the [3] a single full sweep would earn.
```

### Example 3

```text
Input: nums = [1,1]
Output: [0,0]
Explanation:
    No prefix ever contains a 0, so every MEX is 0; two singleton steps
    give [0,0], which beats the single-entry [0].
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`

### Hint 1

No step can report more than the MEX of the entire remaining suffix.

### Hint 2

To realize that bound, remove the shortest prefix that already contains
every value below it; when the suffix MEX is 0, a single element is
enough.

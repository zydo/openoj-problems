# Next Greater, Query Values

## Description

The next greater value of an entry `x` is the first entry strictly greater
than `x` that appears somewhere to its right in the same array.

You are given two arrays, `queries` and `nums`, where every value in
`queries` also occurs in `nums`. Values are distinct within each array, and
no value occurs twice in `nums`.

For each queried value, look up its position in `nums` and report the next
greater value there — or `-1` when nothing to the right of that position is
greater. Return one answer per queried value, in the order asked.

### Example 1

```text
Input: queries = [6,3,9], nums = [3,7,6,9,2]
Output: [9,7,-1]
Explanation: 6 sits at position 2 and the first greater value after it is 9.
3 sits at position 0 and its next greater value is 7. 9 sits at position 3
and only 2 follows it, so the answer is -1.
```

### Example 2

```text
Input: queries = [8], nums = [8]
Output: [-1]
Explanation: Nothing follows the lone entry, so no greater value exists.
```

### Example 3

```text
Input: queries = [5,1,4], nums = [1,4,5,2]
Output: [-1,4,5]
Explanation: The queried values may appear in any order relative to their
positions in nums. Here 5 is the array's maximum and has nothing greater to
its right, 1 is followed by 4, and 4 is followed by 5.
```

### Constraints

- `1 <= queries.length <= nums.length <= 1000`
- `0 <= queries[i], nums[i] <= 10^4`
- all values in `queries` and in `nums` are distinct
- every value in `queries` occurs in `nums`

Follow-up: can you answer everything in `O(queries.length + nums.length)`?

## Hints

### Hint 1

Every queried value is answered by a fact about `nums`, so one sweep of
`nums` can settle all queries at once. Which values does that sweep need to
remember as it goes?

### Hint 2

Keep a stack of values still waiting for a greater one; when the arriving
value tops the stack, it is the first greater value to the right of each
value it pops.

### Hint 3

Record value → next greater value in a hash map as entries come off the
stack, and each query becomes a constant-time lookup.

### Hint 4

Whatever the sweep ends with still on the stack has nothing greater to its
right — give those values `-1`.

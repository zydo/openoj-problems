# Queries on a Cycling Array

## Description

You are given a 0-indexed integer array `nums` that evolves on a fixed clock
measured in minutes. Minute 0 leaves the array untouched. Each minute after
that deletes the current front element, and once the array is empty the phase
flips: the removed elements come back one per minute, appended in their
original order, until the array is whole again. The drain-then-refill cycle
then starts over and runs forever.

For example, `[0,1,2]` becomes `[1,2]`, `[2]`, `[]`, `[0]`, `[0,1]`,
`[0,1,2]`, `[1,2]`, `[2]`, `[]`, ... as the minutes tick by.

You are also given `queries`, where `queries[j] = [timeⱼ, indexⱼ]`. Answer
`nums[indexⱼ]` as the array stands at minute `timeⱼ` when that position
exists then, and `-1` when it does not. Return every answer in order.

### Example 1

```text
Input: nums = [3,1,4], queries = [[1,0],[3,1],[4,0],[6,2]]
Output: [1,-1,3,4]
Explanation:
Minute 0: [3,1,4]
Minute 1: [1,4]   - the front element 3 is dropped.
Minute 2: [4]
Minute 3: []      - the array is empty.
Minute 4: [3]     - 3 is appended back.

At minute 1 the element at index 0 is 1.
At minute 3 index 1 is out of range.
At minute 4 the element at index 0 is 3.
At minute 6 the array is restored, so index 2 holds 4.
```

### Example 2

```text
Input: nums = [7], queries = [[0,0],[2,0],[5,0]]
Output: [7,7,-1]
Explanation: The one-element array alternates between [7] (even minutes)
and [] (odd minutes), so index 0 exists at minutes 0 and 2 but not at 5.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`
- `n == queries.length`
- `1 <= n <= 10⁵`
- `queries[j].length == 2`
- `0 <= timeⱼ <= 10⁵`
- `0 <= indexⱼ < nums.length`

## Hints

### Hint 1

The array's state at minute `t` does not really depend on `t` itself — only
on `t` taken modulo a small period. Find the period by watching one full
drain-and-refill.

### Hint 2

Let `m` be the original length and `p = t mod 2m`. While `p < m`, exactly `p`
front elements are gone, so the array is `nums[p:]`; while `p >= m`, exactly
`p - m` elements have returned, so the array is the prefix `nums[:p - m]`.

### Hint 3

In the draining phase an index survives when `p + index` is still below `m`;
in the refilling phase it survives when `index` is below `p - m`. Every other
query answers `-1`.

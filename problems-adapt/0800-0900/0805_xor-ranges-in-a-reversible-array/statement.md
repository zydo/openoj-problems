# XOR Ranges in a Reversible Array

## Description

You are given an integer array `nums` of length `n` and a 2D integer array
`queries`, where every entry is one of three kinds:

- **Set:** `queries[i] = [1, index, value]` — overwrite `nums[index]` with
  `value`.
- **Ask:** `queries[i] = [2, left, right]` — combine every element of
  `nums[left..right]` with bitwise XOR and record the result.
- **Reverse:** `queries[i] = [3, left, right]` — turn the subarray
  `nums[left..right]` around in place.

Return the recorded answers of all Ask queries, in the order they were
answered.

### Example 1

```text
Input: nums = [6,3,9,2,8], queries = [[2,1,2],[1,0,5],[3,0,3],[2,2,4]]
Output: [10,14]
Explanation: The first ask combines positions 1 through 2: 3 XOR 9 = 10.
Setting index 0 to 5 gives [5,3,9,2,8]. Reversing positions 0 through 3 gives
[2,9,3,5,8]. The second ask combines positions 2 through 4: 3 XOR 5 XOR 8 =
14.
```

### Example 2

```text
Input: nums = [5,1,4,2], queries = [[3,1,3],[2,1,2],[1,3,7],[2,0,3],[3,0,3],[2,1,2]]
Output: [6,4,6]
Explanation: Reversing positions 1 through 3 gives [5,2,4,1], and 2 XOR 4 = 6.
Setting index 3 to 7 gives [5,2,4,7], whose whole-array XOR is 4. Reversing
everything gives [7,4,2,5], and 4 XOR 2 is again 6 — XOR does not care which
way the segment reads.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`
- `1 <= queries.length <= 10⁵`
- `queries[i].length == 3`
- for a Set entry: `0 <= index < nums.length` and `0 <= value <= 10⁹`
- for an Ask or Reverse entry: `0 <= left <= right < nums.length`

## Hints

### Hint 1

Keep the array inside a balanced tree ordered implicitly by position, and
store at every node the size and the XOR of its subtree — then any segment's
XOR waits at the root of the piece covering it.

### Hint 2

Split and merge are the only two moves you need: cutting out one element
rewrites it, cutting out a range reads or reverses it, and merging the pieces
back restores the order.

### Hint 3

A reversal should not walk the segment. Mark the subtree's root with a lazy
flag meaning "my children are swapped", honor the flag whenever a descent is
about to pass through, and let each node recompute its totals from its
children after every structural change.

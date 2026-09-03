# The Peak Of Each Inversion Segment

## Description

You are given an integer array `nums`.

From an index `i` you may keep jumping to other indices, but every jump must
obey one asymmetry:

- Moving to a later index `j > i` is allowed only if `nums[j] < nums[i]`.
- Moving to an earlier index `j < i` is allowed only if `nums[j] > nums[i]`.

Notice both directions demand a strictly smaller value ahead or a strictly
larger value behind. Build an array `ans` where `ans[i]` is the largest
value in `nums` that can be reached from index `i` by any sequence of such
jumps.

### Example 1

```text
Input: nums = [1,4,2,5,3]
Output: [1,5,5,5,5]
Explanation:
- i = 0: the value 1 is the smallest in the array, so no jump to a smaller
  value exists and the answer stays 1.
- i = 1 through i = 4: from the 4 at i = 1, jump ahead to the 2 at i = 2,
  then back to the 5 at i = 3; every later index links into that same
  chain, so they all top out at 5.
```

### Example 2

```text
Input: nums = [6,5,4]
Output: [6,6,6]
Explanation: Each neighboring pair descends, so every index can walk all
the way to the 6 at the front.
```

### Example 3

```text
Input: nums = [3,1,4,1,5]
Output: [4,4,4,4,5]
Explanation: The first four indices trade down to the 1 at i = 3 and back
up to the 4 at i = 2, so they all answer 4; the trailing 5 has nothing
smaller to its right and nothing larger behind it, so it answers itself.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Draw an edge between two indices whenever one can jump to the other, and
look at which pairs are connected.

### Hint 2

For `p < q`, the forward jump `p -> q` and the backward jump `q -> p` ask
for exactly the same thing: `nums[q] < nums[p]`. Direction is irrelevant.

### Hint 3

An index's answer is simply the largest value inside its connected group
of mutually reachable indices.

### Hint 4

Those groups are contiguous ranges. Scan the array and close a range
wherever the running maximum stops exceeding the smallest value still to
come; every index inside a range answers the range's maximum.

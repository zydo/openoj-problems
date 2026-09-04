# The Number Hugging Zero

## Description

Out of all the integers in `nums`, pick the one whose distance to `0` is
smallest, where the distance from `x` to `0` is `|x|`. Zero itself never has
to be present — the winner is simply whichever element sits nearest to it.

Two elements can sit equally near: `-3` and `3` are the same distance from
zero. When that happens, hand back the larger of the two, i.e. the positive
one.

### Example 1

```text
Input: nums = [-7, 3, -1, 5, 2]
Output: -1
Explanation: The distances are 7, 3, 1, 5, 2, and `-1` alone sits at
distance 1, so nothing competes with it.
```

### Example 2

```text
Input: nums = [4, -4, 9]
Output: 4
Explanation: `4` and `-4` are equally close to zero, and the tie goes to the
larger value.
```

### Example 3

```text
Input: nums = [6]
Output: 6
Explanation: With a single element there is nothing to compare it against.
```

### Constraints

- `1 <= n <= 1000`, where `n` is the length of `nums`
- `-10⁵ <= nums[i] <= 10⁵`

### Hint 1

One pass is enough if you remember the best element seen so far and compare
each newcomer against it.

### Hint 2

The comparison is on absolute values, with the raw values breaking a tie in
favor of the larger element.

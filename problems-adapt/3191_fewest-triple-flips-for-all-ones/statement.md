# Fewest Triple Flips for All Ones

## Description

You are given a binary array `nums`, where every element is `0` or `1`.

One operation selects three **adjacent** positions of the array and flips all
three of them at once. Flipping a position turns its `0` into `1` and its `1`
into `0`.

Operations may be repeated as often as you like, including zero times. Return
the smallest number of operations that leaves every element of `nums` equal to
`1`. If no amount of flipping can get there, return `-1`.

### Example 1

```text
Input: nums = [1,1,0,1,1,0]
Output: 2
Explanation: Flip positions (2,3,4), which yields [1,1,1,0,0,0]. The zero now
at position 3 forces the flip (3,4,5), and the array is all ones after 2
operations.
```

### Example 2

```text
Input: nums = [0,1,0,1,0,1]
Output: 3
Explanation: Flips starting at 0, 1 and 2 are forced in turn, each one
cleaning up its own starting position:
- flip (0,1,2): [1,0,1,1,0,1]
- flip (1,2,3): [1,1,0,0,0,1]
- flip (2,3,4): [1,1,1,1,1,1]
```

### Example 3

```text
Input: nums = [0,0,1,1]
Output: -1
Explanation: Flipping (0,1,2) gives [1,1,0,1]. Position 2 is now 0, and the
only window that could still cover it would also disturb the settled prefix,
so no sequence of operations succeeds.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- each element of `nums` is `0` or `1`

## Hints

### Hint 1

Exactly one operation can ever reach position 0. When `nums[0]` is `0`, is
there any choice about performing it?

### Hint 2

Once position 0 holds a `1` and must keep it, the same question recurs on the
array starting at position 1 — with the roles of every later position shifted
down by one.

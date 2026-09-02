# The Highest Reachable MEX

## Description

You are given an integer array `nums` and an integer `value`. In one
move you may pick any element and add `value` to it or subtract `value`
from it — as many times as you like, on as many elements as you like.

The MEX of an array is the smallest non-negative integer that does not
appear in it. For instance, the array `[-2, 1, 3]` has MEX `0`, while
`[-2, 0, 1, 8]` has MEX `2`.

Return the largest MEX you can give `nums` by applying moves.

### Example 1

```text
Input: nums = [3,0,6,1,-5], value = 3
Output: 2
Explanation: The values 3, 0, and 6 all sit in residue class 0, while
1 and -5 share residue class 1. Targets 0 and 1 are both already
present, but no element can ever turn into 2: shifting only ever
changes a value by a multiple of 3, so every element stays in its
class. The best MEX is 2.
```

### Example 2

```text
Input: nums = [1,3,5,7], value = 2
Output: 0
Explanation: Every element is odd, and adding or subtracting 2 keeps a
number odd. The value 0 can therefore never appear, and the MEX stays
0.
```

### Example 3

```text
Input: nums = [5,5,5], value = 5
Output: 1
Explanation: All three elements sit in residue class 0. Turn one 5
into 0 by subtracting 5; nothing can then become 1, so the best MEX is
1.
```

### Constraints

- `1 <= nums.length, value <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Adding or subtracting `value` never moves a number out of its residue
class mod `value`, so each element's reachable targets are fixed from
the start.

### Hint 2

An element with residue `r` can be retargeted to any non-negative
number that is congruent to `r`.

### Hint 3

Count how many elements carry each residue, then try to build the
targets `0, 1, 2, ...` in order; the first target whose class has run
dry is where the MEX stops.

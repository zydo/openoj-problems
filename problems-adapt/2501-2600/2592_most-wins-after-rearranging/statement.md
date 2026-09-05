# Most Wins After Rearranging

## Description

You are given an integer array `nums`. Rearrange its elements into any
ordering `perm` you like, using every element exactly once. Position `i`
is a win when the rearranged value lands strictly above the original one
there, that is, `perm[i] > nums[i]`.

Return the largest number of wins a single rearrangement can collect.

### Example 1

```text
Input: nums = [4,1,6,3]
Output: 3
Explanation: Rearrange to perm = [6,3,4,1]. Positions 0, 1, and 2 are
wins (6>4, 3>1, 4>3), and no ordering can do better than three.
```

### Example 2

```text
Input: nums = [5,5,5]
Output: 0
Explanation: All values are equal, so nothing can sit strictly above
anything and the answer is 0.
```

### Example 3

```text
Input: nums = [8,2,4,9,2]
Output: 3
Explanation: One winning ordering is perm = [2,4,9,2,8]: the values 2,
2, and 4 each get something bigger above them, while 8 and 9 have
nothing left that beats them.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Only the relative sizes matter, not where elements started, so sorting
the values and an identical pool of candidates puts every pairing
decision next to its neighbor.

### Hint 2

Walk the sorted values in increasing order and spend the smallest
unused candidate that is strictly larger on each one; values that
nothing still in the pool can beat are dead weight.

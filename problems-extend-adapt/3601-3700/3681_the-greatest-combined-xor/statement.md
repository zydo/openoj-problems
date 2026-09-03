# The Greatest Combined Xor

## Description

An array `nums` of `n` non-negative integers is given. Pick two
subsequences of it — each pick keeps its elements in their original
left-to-right order, either pick may be empty, and both may draw on the
same positions. Let `X` be the XOR of everything the first pick contains
and `Y` the XOR of the second, taking an empty pick's XOR to be `0`.
Across every way of making the two picks, return the largest value `X ^ Y`
can reach.

### Example 1

```text
Input: nums = [4,6,1]
Output: 7
Explanation: Take the first pick as [1], whose XOR is 1, and the second
as [6], whose XOR is 6. Then X ^ Y = 1 ^ 6 = 7, and no other pair of
picks produces a larger value.
```

### Example 2

```text
Input: nums = [8,3,8,3]
Output: 11
Explanation: The first pick [8,3] XORs to 8 ^ 3 = 11 while the second
pick is left empty and contributes 0; 11 ^ 0 = 11 is the best reachable.
```

### Example 3

```text
Input: nums = [7,7,7]
Output: 7
Explanation: Pick [7] first and leave the second pick empty: 7 ^ 0 = 7.
Every element is 7, so every XOR of picks keeps at most that one set bit
and 7 is the ceiling.
```

### Constraints

- `2 <= n == nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

The XOR of two achievable values is achievable again, so the two picks
together can produce exactly the values single subsets can — the answer
is the strongest subset XOR of the array.

### Hint 2

Reduce each number against earlier pivots bit by bit to assemble a linear
basis, then sweep from the top bit downward, absorbing a pivot only when
it enlarges the running value.

# Best Sum of Two Disjoint Windows

## Description

An integer array `nums` comes with two lengths, `firstLen` and
`secondLen`. Choose two contiguous stretches of the array, one exactly
`firstLen` entries long and one exactly `secondLen` entries long, that
share no position, and return the largest total their entries can add up
to.

The two stretches may sit in either order — the `firstLen` stretch is
free to lie before or after the `secondLen` one.

### Example 1

```text
Input: nums = [4,2,7,1,9,3,8], firstLen = 2, secondLen = 1
Output: 20
Explanation: Taking [9,3] as the length-2 stretch and [8] as the
length-1 stretch gives 12 + 8 = 20.
```

### Example 2

```text
Input: nums = [5,5,5,5,5,5], firstLen = 1, secondLen = 2
Output: 15
Explanation: Any single 5 plus any disjoint adjacent pair of 5s sums
to 15.
```

### Example 3

```text
Input: nums = [1,0,3,2,4,0,4,2,1,3], firstLen = 3, secondLen = 2
Output: 15
Explanation: Taking [3,2,4] as the length-3 stretch and [4,2] as the
length-2 stretch gives 9 + 6 = 15.
```

### Constraints

- `1 <= firstLen, secondLen <= 1000`
- `2 <= firstLen + secondLen <= 1000`
- `firstLen + secondLen <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`

## Hints

### Hint 1

Build prefix sums so any stretch's total is one subtraction. Then, for
every placement of the second stretch, only the best stretch of the
first length ending before it matters — and the mirrored order needs
its own pass.

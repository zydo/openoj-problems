# Largest XOR of Two OR Halves

## Description

You are given an integer array `nums` and a positive integer `k`.

Pick any `2 * k` elements of `nums` as a subsequence, in their original
order. The first `k` picked elements form the left half and the remaining
`k` form the right half. The score of the pick is

`(left[0] OR left[1] OR ... OR left[k - 1]) XOR (right[0] OR right[1] OR ... OR right[k - 1])`.

Return the largest score any pick can achieve.

### Example 1

```text
Input: nums = [3,5,9], k = 1
Output: 12
Explanation: Picking 5 and 9 gives halves {5} and {9}, and 5 XOR 9 is 12.
No other pair of elements XORs to more.
```

### Example 2

```text
Input: nums = [1,2,4,8,3], k = 2
Output: 15
Explanation: Pick [1,2,4,8]: the halves OR to 1 OR 2 = 3 and 4 OR 8 = 12,
and 3 XOR 12 is 15.
```

### Example 3

```text
Input: nums = [7,1,1,7], k = 2
Output: 0
Explanation: A pick of size 4 must use the whole array, so the halves are
{7,1} and {1,7}. Both OR to 7, and 7 XOR 7 is 0.
```

### Constraints

- `2 <= nums.length <= 400`
- `1 <= nums[i] < 2⁷`
- `1 <= k <= nums.length / 2`

## Hints

### Hint 1

Inside a half, the elements' order is dead weight — only the set of chosen
values matters, through their combined OR.

### Hint 2

Read any pick left to right: after its `k`-th chosen element, everything
chosen so far lies in a prefix of the array and everything still to come
lies in the matching suffix. So a pick is nothing more than a boundary
position plus `k` elements chosen on each side of it.

### Hint 3

Values stay below `2⁷`, so the OR of any set also stays below `2⁷`. For
every boundary, the reachable ORs on each side fit into tiny sets —
collect them, then try every left-right pair.

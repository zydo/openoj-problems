# Most Removable Target Pairs

## Description

You are given an integer array `nums` and a target sum `k`.

One move selects two distinct elements of the array whose values add up
to `k` and deletes both of them.

Return the largest number of moves that can be made.

### Example 1

```text
Input: nums = [2,7,4,3,8], k = 10
Output: 2
Explanation: Remove 2 and 8, leaving [7,4,3]; then remove 7 and 3,
leaving [4]. Nothing pairs with 4 to reach 10, so 2 moves is the most.
```

### Example 2

```text
Input: nums = [5,5,5,5], k = 10
Output: 2
Explanation: The four elements form two disjoint pairs of 5 + 5 = 10.
```

### Example 3

```text
Input: nums = [1,1,1], k = 2
Output: 1
Explanation: One pair of 1s is removed; a lone 1 has no partner left.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁹`

## Hints

### Hint 1

Counting disjoint pairs with a fixed sum needs no simulation of the
removals.

### Hint 2

A value `x` can only ever be paired with `k - x`.

### Hint 3

For `x < k - x` the answer contributes `min(count(x), count(k - x))`;
when `x` equals its own complement `k / 2`, it contributes
`count(x) / 2` instead.

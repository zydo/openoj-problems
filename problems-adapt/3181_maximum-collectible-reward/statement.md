# Maximum Collectible Reward

## Description

You are given an integer array `rewards`. Your collected total `x` starts at
`0`, and every entry of the array is initially available.

Repeatedly do the following, as many times as you like:

- Pick an entry `rewards[i]` that is still available.
- If it is strictly larger than your current total `x`, collect it: `x`
  becomes `x + rewards[i]`, and `rewards[i]` is used up.

Return the largest total you can collect.

### Example 1

```text
Input: rewards = [4,3,9,1]
Output: 16
Explanation: Collect 3, then 4 (4 > 3), then 9 (9 > 7), reaching 16.
Starting with the 1 instead would strand you: 1 + 3 = 4 does not exceed the 4,
so the 4 could not follow.
```

### Example 2

```text
Input: rewards = [2,2,5,5]
Output: 7
Explanation: One 2 goes in first, then a 5 (5 > 2). The second copy of each
value can never be used, since collecting a value twice would demand it be
strictly larger than a total that already contains it.
```

### Example 3

```text
Input: rewards = [3,8,3]
Output: 11
Explanation: Collect 3, then 8 (8 > 3), for a total of 11.
```

### Constraints

- `1 <= rewards.length <= 5 * 10⁴`
- `1 <= rewards[i] <= 5 * 10⁴`

## Hints

### Hint 1

Sort the entries. If a set of entries can be collected in some order, can it
always be collected in increasing order?

### Hint 2

With ascending order fixed, the question is only which subsets of distinct
values chain successfully — a 0/1 knapsack over achievable totals.

### Hint 3

Store the achievable totals as a bitset. One value's contribution is then a
mask, a shift, and an OR.

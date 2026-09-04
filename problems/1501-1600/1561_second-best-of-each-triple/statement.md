# Second-Best of Each Triple

## Description

A table holds `3n` coin piles of assorted sizes. Every round you gather
any three piles into one group, and each group is split by rank: the
largest pile in it goes to Alice, the smallest goes to Bob, and the
middle pile is yours. This repeats until the table is empty, so you
finish holding exactly `n` piles — one from each group.

Given the array `piles`, where `piles[i]` is the coin count of the `i`th
pile, return the largest total number of coins you can collect by
grouping the piles well.

### Example 1

```text
Input: piles = [5,3,9,1,8,2]
Output: 11
Explanation: Group (9, 8, 1): Alice takes 9, you take 8, Bob takes 1.
Group (5, 3, 2): Alice takes 5, you take 3, Bob takes 2. Your total is
8 + 3 = 11. A poorer split such as (9, 5, 1) and (8, 3, 2) would leave
you with only 5 + 3 = 8.
```

### Example 2

```text
Input: piles = [6,6,6]
Output: 6
```

### Example 3

```text
Input: piles = [4,10,7,3,12,9,1,11,2]
Output: 24
```

### Constraints

- `3 <= piles.length <= 10⁵`
- `piles.length % 3 == 0`
- `1 <= piles[i] <= 10⁴`

## Hints

### Hint 1

Inside a group the assignment is automatic — rank alone decides who gets
what. So your only real decision is which three piles to bundle. Which
piles can never be a group's middle?

### Hint 2

Sort the piles. The weakest third can never escape the bottom of its
group, so assign them to the smallest slot and spend the strongest piles
on satisfying the largest slot — your picks then fall on every other
pile starting just past that weakest third.

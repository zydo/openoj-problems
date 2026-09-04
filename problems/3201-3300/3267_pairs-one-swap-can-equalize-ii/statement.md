# Pairs One Swap Can Equalize II

## Description

You are given an array `nums` of positive integers. This second version
raises the budget: the operation may now be used twice.

Two values `x` and `y` are a match for each other in this problem when they
can be made equal using at most two exchanges, where one exchange picks
either of the two numbers and swaps two digit positions inside that chosen
number. Leading zeros are fine — an exchange may carry a leading digit
inward, turning `30` into `03`, which reads as `3`.

Count the index pairs `i < j` whose entries `nums[i]` and `nums[j]` match
under that rule.

### Example 1

```text
Input: nums = [130,301,310]
Output: 3
Explanation: Every pair matches. 130 reaches 310 with one exchange, 310
reaches 301 with one, and 130 meets 301 by spending both — first to 310,
then on to 301.
```

### Example 2

```text
Input: nums = [55,550,7]
Output: 1
Explanation: Exchanging two digits of 550 yields "055", which reads as 55,
so that pair matches. The lone digit 7 has no pair of positions to
exchange, and no sequence of swaps reaches it.
```

### Example 3

```text
Input: nums = [240,420,402,9]
Output: 3
Explanation: The three values built from the digits 0, 2 and 4 all pair
with each other — 420 is one exchange from 240, 402 is one exchange from
420, and 240 spends both to reach 402. The 9 matches none of them.
```

### Constraints

- `2 <= nums.length <= 5000`
- `1 <= nums[i] < 10⁷`

## Hints

### Hint 1

Two exchanges reach only a small, fully enumerable set of outcomes from
any single value — far smaller than the number of pairs.

### Hint 2

Sweep the array once with a frequency map of the values already seen, and
let each element ask that map how many earlier entries it can reach.

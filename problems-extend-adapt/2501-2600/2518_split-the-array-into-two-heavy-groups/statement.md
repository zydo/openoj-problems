# Split the Array Into Two Heavy Groups

## Description

You are given an array `nums` of positive integers and an integer `k`.
Deal every element of `nums` into one of two named groups, so that each
element belongs to exactly one group. A deal is called heavy when each
of the two groups holds a sum of at least `k`.

Return how many distinct heavy deals exist, taken modulo `10⁹ + 7`.
Two deals differ as soon as some element `nums[i]` is dealt into a
different group in one of them.

### Example 1

```text
Input: nums = [1,1,1,1], k = 2
Output: 6
Explanation: The whole array sums to 4, so each group must hold exactly
two 1s. Picking which two of the four elements land in the first group
settles the whole deal, and that choice can be made in six ways.
```

### Example 2

```text
Input: nums = [2,2,2], k = 3
Output: 0
Explanation: The total sum 6 barely reaches 2*k, so both groups would
have to hold exactly 3 — impossible while every element is a 2.
```

### Example 3

```text
Input: nums = [6,5,3,4], k = 9
Output: 2
Explanation: The sum 18 forces each group to hold exactly 9, and the
only split that manages that separates {6,3} from {5,4}. Either group
may be the first one, giving two heavy deals.
```

### Constraints

- `1 <= nums.length, k <= 1000`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

If the whole array sums to less than `2*k`, the two groups can never
both reach the bar, so nothing needs to be counted.

### Hint 2

Count the opposite: the deals in which at least one group finishes
under `k`, then subtract them from all `2^n` deals.

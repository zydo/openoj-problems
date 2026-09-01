# Square-Sum Orderings

## Description

Arrange the elements of an integer array `nums` in some order. An ordering is
**square-sum** when every two neighbouring entries add up to a perfect
square. Return how many orderings of `nums` are square-sum.

Equal values are indistinguishable: two orderings count as different only if
some position holds different numbers in them, so exchanging two equal
entries never produces a new one. Each ordering uses every element exactly
once, and a one-element array has no neighbouring pair at all, which makes it
square-sum by definition.

### Example 1

```text
Input: nums = [3,6,10]
Output: 2
Explanation: 3+6 = 9 and 6+10 = 16 are both perfect squares, so [3,6,10]
and its reverse [10,6,3] qualify. 10+3 is not a square, and no other
arrangement works.
```

### Example 2

```text
Input: nums = [2,7,2]
Output: 3
Explanation: [2,2,7], [2,7,2] and [7,2,2] all qualify — every neighbouring
sum (4 or 9) is a perfect square. Swapping the two 2s adds no further
orderings.
```

### Example 3

```text
Input: nums = [1,2]
Output: 0
Explanation: 1+2 = 3 is not a perfect square, so neither ordering qualifies.
```

### Constraints

- `1 <= nums.length <= 12`
- `0 <= nums[i] <= 10⁹`

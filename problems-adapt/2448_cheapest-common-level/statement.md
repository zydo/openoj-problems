# Cheapest Common Level

## Description

You are given two arrays of `n` positive integers each, `nums` and `cost`.

Every element of `nums` can be raised or lowered by 1 in a single step, and
each step applied to the element at position `i` is billed at `cost[i]`.

Bring every element of `nums` to one shared value and return the smallest
possible total bill.

### Example 1

```text
Input: nums = [1,4,6,2], cost = [2,3,1,10]
Output: 12
Explanation: Settle on the value 2.
- Raise the 1 once, paying 2.
- Lower the 4 twice, paying 3 twice: 6.
- Lower the 6 four times, paying 1 each time: 4.
The element already at 2 moves for free. Total bill 2 + 6 + 4 = 12, and no
other shared value costs less — the weighty price 10 anchors the choice.
```

### Example 2

```text
Input: nums = [6,6,6], cost = [9,2,7]
Output: 0
Explanation: The elements already share a value; nobody moves.
```

### Example 3

```text
Input: nums = [9], cost = [3]
Output: 0
Explanation: A lone element is its own shared value.
```

### Constraints

- `n == nums.length == cost.length`
- `1 <= n <= 10^5`
- `1 <= nums[i], cost[i] <= 10^6`
- the total bill never exceeds `2^53 - 1` in the given tests

## Hints

### Hint 1

Only values already present in `nums` need to be considered as the shared
value — why can nothing else beat them?

### Hint 2

The bill for settling on value `t` is `sum(|nums[i] - t| * cost[i])`. What
kind of curve is this as `t` moves along the number line?

### Hint 3

The curve's slope flips where the accumulated price weight passes half the
total — a weighted median. Sorting plus a running sum finds it in one pass.

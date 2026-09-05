# Most Capacity A Budget Can Buy

## Description

A shop sells `n` machines. Two equal-length arrays describe them:
`costs[i]` is the price of machine `i` and `capacity[i]` is the
performance it delivers. Your spending limit is `budget`.

You walk out with at most two distinct machines, under one rule: the
combined price of whatever you take must be strictly less than
`budget`.

Return the largest total performance you can leave with — the maximum
sum of capacities over every affordable selection of one or two
machines. Taking nothing is always affordable and delivers `0`, so the
answer is never below that.

### Example 1

```text
Input: costs = [6,9,4,7,5], capacity = [3,8,2,6,9], budget = 12
Output: 12
Explanation: Take the machines priced 6 and 5. They cost 11 in total,
strictly below 12, and deliver 3 + 9 = 12 performance. No affordable
single machine or pair does better.
```

### Example 2

```text
Input: costs = [10,20], capacity = [7,15], budget = 15
Output: 7
Explanation: The machine priced 20 is out of reach, and both machines
together cost 30. Only the machine priced 10 fits, so the best total
capacity is 7.
```

### Example 3

```text
Input: costs = [1,1,1], capacity = [4,9,2], budget = 3
Output: 13
Explanation: Any two machines cost 2, which is strictly below 3, so
the two strongest — capacities 9 and 4 — can be taken together for a
total of 13. (All three would cost 3, which the strict rule forbids.)
```

### Example 4

```text
Input: costs = [5], capacity = [11], budget = 5
Output: 0
Explanation: The only machine costs exactly 5, which is not strictly
less than the budget, so nothing can be bought and the answer is 0.
```

### Constraints

- `1 <= n == costs.length == capacity.length <= 10⁵`
- `1 <= costs[i], capacity[i] <= 10⁵`
- `1 <= budget <= 2 * 10⁵`

## Hints

### Hint 1

Order the machines by price, carrying each capacity along with its
machine.

### Hint 2

Sweep the sorted order once, remembering the largest capacity seen so
far at every position.

### Hint 3

A lone machine qualifies whenever its price sits below `budget`; the
best such capacity is one candidate.

### Hint 4

For a pair, pin the dearer machine and binary-search how far the
prefix of prices below `budget - its price` extends — the best partner
capacity is one prefix-max lookup, and stopping the search before the
pinned machine's own position keeps a machine from partnering with
itself.

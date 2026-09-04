# The Leveling Bill

## Description

An integer array `nums` sits in front of you, along with two prices
`cost1` and `cost2`. You may repeat either of these moves as often as
you like:

- pay `cost1` to raise one chosen element by 1; or
- pay `cost2` to raise two elements at distinct positions by 1 each.

Every element must finish at one shared value. What is the smallest
total bill that gets the array there? The bill can grow enormous, so
report it modulo `10^9 + 7`.

### Example 1

```text
Input: nums = [1,3,2], cost1 = 4, cost2 = 3
Output: 7
Explanation: One paired raise on the two low values gives [2,3,3]
for 3, then a single raise on the first element finishes [3,3,3] for
4 — altogether 3 + 4 = 7.
```

### Example 2

```text
Input: nums = [7], cost1 = 10, cost2 = 6
Output: 0
Explanation: A lone element is already level; nothing needs paying.
```

### Example 3

```text
Input: nums = [5,1,1], cost1 = 3, cost2 = 5
Output: 20
Explanation: Both low values sit 4 short of 5, and four paired
raises at 5 apiece lift them together — undercutting the eight
single raises at 3 each.
```

### Example 4

```text
Input: nums = [2,4,9], cost1 = 6, cost2 = 1
Output: 9
Explanation: Aim for 11, above the current maximum. The deficits are
9, 7, and 2; pairing the two neediest values each round covers all
eighteen missing units with nine paired raises at 1 apiece.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`
- `1 <= cost1 <= 10^6`
- `1 <= cost2 <= 10^6`

### Hint 1

Decide first the value every element ends at; once that target is
fixed, the cheapest schedule for it can be worked out directly.

### Hint 2

When a paired raise costs as much as two single raises or more,
pairs never pay — just buy singles up to the current maximum.

### Hint 3

When pairs are cheap, the target's cost hinges on how many paired
raises fit: no more than half of the total deficit, and no more than
the total minus the largest single demand.

### Hint 4

Compute the deficits arithmetically from the chosen target instead
of simulating the moves one by one.

### Hint 5

Only targets between the maximum and twice the maximum can win;
try each of them and keep the cheapest bill.

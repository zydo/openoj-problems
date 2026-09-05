# Largest Value in a Rebuilt Array

## Description

You are given an array `arr` of positive integers. You may rebuild it into
an array that obeys two rules:

- The first element must equal `1`.
- Neighbors stay close: `abs(arr[i] - arr[i - 1]) <= 1` for every valid
  index `i` (0-indexed).

To get there you may apply any of these moves, as many times as you like:

- Lower any element to some smaller positive integer.
- Reorder the elements however you want.

Work out how large the biggest element can end up being once the array
satisfies both rules, and return that value.

### Example 1

```text
Input: arr = [4,2,1,3]
Output: 4
Explanation: Sorted, the values already form a chain 1,2,3,4 that starts
at 1 and steps by one, so the rules hold and the peak is 4.
```

### Example 2

```text
Input: arr = [100,2,100000]
Output: 3
Explanation: Arrange the values as 2,100,100000 and start the chain at 1:
the next slot can hold at most 2 and the one after at most 3, so no
element can exceed 3.
```

### Example 3

```text
Input: arr = [6,6,6,6]
Output: 4
Explanation: Four elements form a staircase 1,2,3,4 — four equal values
are enough to climb to 4 and nothing higher.
```

### Constraints

- `1 <= arr.length <= 10^5`
- `1 <= arr[i] <= 10^9`

## Hints

### Hint 1

Reordering costs nothing, so only the sorted sequence of values matters.

### Hint 2

Sweep the sorted values while tracking the largest value the prefix can
legally hold; each new slot adds at most one to it.

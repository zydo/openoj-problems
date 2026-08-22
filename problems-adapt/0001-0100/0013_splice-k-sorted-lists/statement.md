# Splice K Sorted Lists

## Description

You are handed `lists`, an array holding the heads of `k` singly linked lists.
Every one of them already runs in non-decreasing order. Produce a single
non-decreasing linked list containing all of their nodes, and return its head.

The array itself may be empty, and any head in it may be null; both cases
contribute nothing, and if nothing is contributed the answer is a null head.

### Example 1

```text
Input: lists = [[2,8,9],[3,5,11],[6,7]]
Output: [2,3,5,6,7,8,9,11]
Explanation: Eight nodes in all, re-linked into one ascending chain.
```

### Example 2

```text
Input: lists = [[],[-4,-4,0],[]]
Output: [-4,-4,0]
Explanation: The two null heads add no nodes, so the surviving chain is the
answer unchanged. Equal values are allowed to sit side by side.
```

### Example 3

```text
Input: lists = [[13],[-2],[7],[0]]
Output: [-2,0,7,13]
Explanation: Four one-node chains; the result is simply their values in order.
```

### Constraints

- `k == lists.length`
- `0 <= k <= 10^4`
- `0 <= lists[i].length <= 500`
- `-10^4 <= lists[i][j] <= 10^4`
- Each `lists[i]` is already in non-decreasing order.
- Across all of them, the node count stays within `10^4`.

## Hints

### Hint 1

You already know how to join two ordered chains in linear time. The question
is how many times you are willing to do it.

### Hint 2

Folding one chain into a growing result re-walks the accumulated prefix on
every fold, and that prefix can grow to the full node count. Pairing the
chains off instead halves how many remain each time.

### Hint 3

The other route keeps all `k` current heads in a min-heap: pop the smallest,
attach it, push the node that followed it. Either way you pay a `log k` factor
once per node rather than a factor of `k`.

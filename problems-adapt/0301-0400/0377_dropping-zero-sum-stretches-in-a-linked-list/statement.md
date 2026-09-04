# Dropping Zero-Sum Stretches in a Linked List

## Description

You are given the `head` of a linked list of integers. A **stretch** is any
run of consecutive nodes; a stretch is _cancelling_ when its values add up
to `0`.

Repeatedly remove cancelling stretches — each removal splices out that whole
run of nodes — until no cancelling stretch remains. Return the head of the
resulting list.

### Example 1

```text
Input: head = [2,5,-5,6]
Output: [2,6]
Explanation: The middle two nodes cancel (5 + (-5) = 0) and drop out,
leaving 2 followed by 6.
```

### Example 2

```text
Input: head = [4,-2,3,-5,7]
Output: [7]
Explanation: The first four nodes form a cancelling stretch
(4 - 2 + 3 - 5 = 0), so only the 7 survives.
```

### Example 3

```text
Input: head = [1,-1,0,4]
Output: [4]
Explanation: 1 and -1 cancel, the lone 0 is a cancelling stretch by itself,
and the 4 stays.
```

### Constraints

- The list has between `1` and `1000` nodes.
- Every node value lies between `-1000` and `1000`.

## Hints

### Hint 1

Walk the list tracking a running prefix sum, and treat the empty prefix
before the first node as sum `0`.

### Hint 2

When the running sum lands on a value it has already visited, the nodes
between the two visits add up to zero — that whole stretch can go.

### Hint 3

A hash map from prefix sum to position finds the earlier visit in constant
time. One removal can merge neighbours into a new cancelling stretch, so
rescan from the front after each removal.

# Decimal Value of a Bit List

## Description

`head` points at the first node of a singly linked list whose nodes
carry only the bits `0` and `1`. Read front to back, those bits spell
out a non-negative binary number, with the head holding the most
significant bit.

Decode the list and return the number it represents.

### Example 1

![diagram](figures/1290-1.svg)

```text
Input: head = [1,0,1]
Output: 5
Explanation: The bits 101 read in base 2 come to 5 in base 10.
```

### Example 2

```text
Input: head = [1,1,0,0,1]
Output: 25
```

### Example 3

```text
Input: head = [1,0]
Output: 2
```

### Constraints

- The list contains at least one node.
- The list holds at most 30 nodes.
- Every node's value is `0` or `1`.

## Hints

### Hint 1

A single walk suffices: keep a running number and, at each node, treat
that node's bit as the new least significant digit.

### Hint 2

The per-node step is just a left shift followed by an OR —
`value = value << 1 | node.val` — so the decode needs no auxiliary
string or array and no first pass to find the length.

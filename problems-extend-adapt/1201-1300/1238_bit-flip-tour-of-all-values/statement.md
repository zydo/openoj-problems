# Bit-Flip Tour Of All Values

## Description

You are given two integers `n` and `start`. Look at the whole range of
values `0, 1, 2, ..., 2^n - 1` — every one of them expressible in `n` bits —
and arrange all of them, each exactly once, into a sequence `p` that forms a
closed loop: moving from one entry to the next flips a single bit of the
binary representation, and the final entry flips back to the first entry's
value with a single bit flip as well.

The judge compares your sequence exactly, so the loop is pinned to one
canonical arrangement: entry `i` must be
`p[i] = start ^ (i ^ (i >> 1))`, the standard reflected gray code with every
element translated by `start`. That arrangement automatically satisfies
each requirement:

- `p[0] = start`,
- `p[i]` and `p[i + 1]` differ in exactly one bit position, and
- `p[0]` and `p[2^n - 1]` also differ in exactly one bit position.

### Example 1

```text
Input: n = 1, start = 1
Output: [1,0]
Explanation: In binary the tour reads (1,0) — the two one-bit values,
visited one flip apart, and the loop closes with the same single flip.
```

### Example 2

```text
Input: n = 2, start = 1
Output: [1,0,2,3]
Explanation: In binary the tour reads (01,00,10,11). Every step changes
one bit, including the wrap from the last entry back to the first.
```

### Example 3

```text
Input: n = 3, start = 5
Output: [5,4,6,7,3,2,0,1]
Explanation: In binary the tour reads
(101,100,110,111,011,010,000,001) — all eight three-bit values, each
step a single flip, and 001 returns to 101 by flipping the top bit.
```

### Constraints

- `1 <= n <= 16`
- `0 <= start < 2^n`

## Hints

### Hint 1

The reflected gray code visits every n-bit value once while changing a
single bit per step; its closed form is `g(i) = i ^ (i >> 1)` — each index
XOR-ed with itself shifted right by one.

### Hint 2

XOR-ing an entire one-bit-step tour with a constant keeps every step a
one-bit change and merely relabels the values, so translating by `start`
both preserves the property and drops the tour's first element onto
`start` exactly.

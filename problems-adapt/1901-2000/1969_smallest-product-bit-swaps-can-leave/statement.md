# The Smallest Product Bit Swaps Can Leave

## Description

Take every integer in the inclusive range `[1, 2^p - 1]` and write it as a
`p`-bit binary string; these strings are the elements you start from.

A single move picks two elements `x` and `y`, picks a bit position, and
exchanges the bits `x` and `y` hold at that position — the bit at the same
offset in each string. For example, trading the second bit from the right
between `x = 1101` and `y = 0011` leaves `x = 1111` and `y = 0001`.

You may perform moves any number of times. Among all resulting collections
whose product is not zero, the product has a smallest reachable value;
report that value modulo `10⁹ + 7`. The minimum is decided before the
modulo — you return the residue of the true minimum, never the smallest
residue.

### Example 1

```text
Input: p = 6
Output: 57405498
Explanation:
The elements are the integers 1 through 63. Each value can be paired with
its bitwise complement, and the swaps steer every pair toward the shapes
1 and 62, leaving the unpaired all-ones value 63 untouched. The smallest
non-zero product is therefore 62^31 · 63, whose residue modulo 10⁹ + 7 is
57405498.
```

### Example 2

```text
Input: p = 8
Output: 9253531
Explanation:
With elements 1 through 255, the same construction gives
254^127 · 255, and 254^127 · 255 mod 10⁹ + 7 = 9253531.
```

### Example 3

```text
Input: p = 12
Output: 93512543
Explanation:
The elements are 1 through 4095; the minimum product is
4094^2047 · 4095, whose residue modulo 10⁹ + 7 is 93512543.
```

### Constraints

- `1 <= p <= 60`

## Hints

### Hint 1

To shrink the product, drain 1-bits out of some element by trading them
for bits at the same positions in a later element.

### Hint 2

Emptying an element of every 1 makes the whole product zero — the smallest
product that still counts is the one that keeps every element non-zero.

### Hint 3

Each value and its bitwise complement carry opposite bits, so a pair can be
herded into `1` and `2^p - 2`; only the all-ones value has no complement,
and it must stay whole.

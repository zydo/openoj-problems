# Matching Product Quartets

## Description

An array `nums` holds distinct positive integers. Count the ordered
quadruples `(a, b, c, d)`, all four values taken from `nums` and pairwise
different, whose outer products agree: `a * b = c * d`.

Swapping `a` with `b`, swapping `c` with `d`, or exchanging the two sides
of the equation each yields a different quadruple and counts separately.

### Example 1

```text
Input: nums = [4,7,12,21,28]
Output: 8
Explanation: The single product collision is 4 * 21 = 7 * 12, and one pair
of pairs unfolds into the 8 ordered quadruples around that equation.
```

### Example 2

```text
Input: nums = [2,6,5,15,10,30,50,3]
Output: 72
Explanation: Two three-way collisions (2 * 15 = 6 * 5 = 10 * 3 and
5 * 30 = 15 * 10 = 50 * 3) contribute 24 each, while three two-way ones
(2 * 30 = 6 * 10, 6 * 50 = 10 * 30, 6 * 15 = 30 * 3) contribute 8 each:
24 + 24 + 8 * 3 = 72.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁴`
- The elements of `nums` are pairwise distinct.

## Hints

### Hint 1

Distinctness pays off twice: every unordered pair of elements is a pair of
two different values, and two pairs that multiply to the same value cannot
share an element.

### Hint 2

Tally how many unordered pairs land on each product; a product hit by `c`
pairs then yields `c * (c - 1) / 2` equations, and each equation stands for
exactly eight ordered quadruples.

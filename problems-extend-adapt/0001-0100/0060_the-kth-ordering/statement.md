# The Kth Ordering

## Description

The digits `1` through `n` can be lined up in `n!` different orderings.
Written as strings and sorted the way a dictionary sorts them, the
orderings form one fixed list. For `n = 3` that list reads:

```text
"123"
"132"
"213"
"231"
"312"
"321"
```

Given `n` and a position `k`, return the ordering that sits at spot `k` of
this list, counting from 1.

### Example 1

```text
Input: n = 5, k = 42
Output: "24531"
```

### Example 2

```text
Input: n = 7, k = 3000
Output: "5176432"
```

### Example 3

```text
Input: n = 9, k = 100000
Output: "358926471"
```

### Constraints

- `1 <= n <= 9`
- `1 <= k <= n!`

## Hints

### Hint 1

You never need to list the orderings. In a dictionary-sorted list, all
orderings that begin with the same digit form one contiguous block — how
big is that block for the digits left over?

### Hint 2

The block size is the factorial of the digits remaining after the first
choice. Divide `k - 1` by it: the quotient names the first digit, the
remainder restates the problem one digit shorter.

### Hint 3

Repeating that division — shrinking the digit pool each round — writes
`k - 1` in the factorial number system, one digit of the answer per round.

# Adding the Multiples of 3, 5, or 7

## Description

You are given a positive integer `n`. Look at every whole number from
`1` through `n` and collect the ones that divide evenly by `3`, by
`5`, or by `7`. A number that meets more than one of the three tests —
15, for instance — is collected just once.

Return the total of all the collected numbers.

### Example 1

```text
Input: n = 12
Output: 52
Explanation: The qualifying numbers are 3, 5, 6, 7, 9, 10 and 12, and
they add up to 52.
```

### Example 2

```text
Input: n = 25
Output: 189
Explanation: The qualifying numbers are 3, 5, 6, 7, 9, 10, 12, 14, 15,
18, 20, 21, 24 and 25, totaling 189. Note that 15 and 21 satisfy two
divisibility tests each yet enter the sum only once.
```

### Example 3

```text
Input: n = 40
Output: 457
Explanation: There are 22 qualifying numbers, running from 3 up to 40,
and their total is 457.
```

### Constraints

- `1 <= n <= 10³`

## Hints

### Hint 1

Sweep once from `1` to `n` and add every value that at least one of
the three divisibility tests accepts.

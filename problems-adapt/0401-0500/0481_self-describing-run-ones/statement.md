# Self-Describing Run Ones

## Description

Consider a string `s` built only from the characters `1` and `2`. Split `s`
into runs of equal characters, and record the length of each run in order.
For a certain infinite string, that sequence of run lengths, written down as
a string, reproduces `s` itself.

The string begins `1221121221221121122…`; its runs are
`1 | 22 | 11 | 2 | 1 | 22 | 1 | 22 | 11 | 2 | …`, whose lengths
`1 2 2 1 1 2 1 2 2 1 …` concatenate back to the string.

Given a positive integer `n`, report how many `1`s appear among the first `n`
characters.

### Example 1

```text
Input: n = 10
Output: 5
Explanation: The first 10 characters are `1221121221`, containing five `1`s.
```

### Example 2

```text
Input: n = 15
Output: 7
Explanation: The first 15 characters are `122112122122112`, containing seven
`1`s.
```

### Constraints

- `1 <= n <= 10⁵`

# No Adjacent One-Bits

## Description

A non-negative integer is *sparse* when the ones in its binary representation
never stand next to each other — reading it as a bit string, `11` never
appears.

Given a positive integer `n`, count how many sparse integers lie in the range
`[0, n]`.

### Example 1

```text
Input: n = 10
Output: 8
Explanation:
The integers up to 10 in binary are:
0 : 0
1 : 1
2 : 10
3 : 11
4 : 100
5 : 101
6 : 110
7 : 111
8 : 1000
9 : 1001
10 : 1010
Eight of them are sparse; 3, 6, and 7 each contain two adjacent ones.
```

### Example 2

```text
Input: n = 20
Output: 12
```

### Example 3

```text
Input: n = 1000000000
Output: 2178309
```

### Constraints

- `1 <= n <= 10⁹`

## Hints

### Hint 1

Visit the bits of `n` from the most significant to the least, and at each
position gather the integers that are already strictly below `n` because of a
choice made there.

### Hint 2

How many bit strings of a given length avoid `11`? The answer obeys the
Fibonacci recurrence, since such a string begins with either `0` or `10`.

### Hint 3

Where `n` carries a 1, deciding 0 instead splits off a whole family of smaller
integers whose remaining low bits may be any `11`-free string of the leftover
length.

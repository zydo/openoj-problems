# Binary Strings with Regular Runs

## Description

You are given four integers `minLength`, `maxLength`, `oneGroup` and
`zeroGroup`.

Call a binary string regular when all three of these hold:

- Its length falls somewhere in `[minLength, maxLength]`.
- Every run of consecutive 1s spans a multiple of `oneGroup` characters.
    - In the string 00110111100, the runs of 1s have sizes `[2, 4]`.
- Every run of consecutive 0s spans a multiple of `zeroGroup` characters.
    - In the string 00110111100, the runs of 0s have sizes `[2, 1, 2]`.

How many regular binary strings exist? The answer can be huge, so report
it modulo 10⁹ + 7.

Note that 0 counts as a multiple of every number.

### Example 1

```text
Input: minLength = 1, maxLength = 3, oneGroup = 1, zeroGroup = 2
Output: 6
Explanation: The regular strings are "1", "00", "11", "100", "001", and
"111" — six in total, and no other string of length at most 3 qualifies.
```

### Example 2

```text
Input: minLength = 3, maxLength = 5, oneGroup = 2, zeroGroup = 2
Output: 4
Explanation: Both group sizes are 2, so every run must be even and the
length has to be even too. Only "0011", "1100", "0000", and "1111" work.
```

### Example 3

```text
Input: minLength = 5, maxLength = 5, oneGroup = 1, zeroGroup = 5
Output: 2
Explanation: A run of 0s must span 5 characters, so the only options are
the all-ones string "11111" and the all-zeros string "00000".
```

### Constraints

- `1 <= minLength <= maxLength <= 10⁵`
- `1 <= oneGroup, zeroGroup <= maxLength`

## Hints

### Hint 1

Let f(i, x) be the number of regular prefixes of length i whose final
character is x. Stepping forward by a whole run at a time solves it in
O(maxLength · max(oneGroup, zeroGroup)).

### Hint 2

Every transition f(i, x) → f(j, 1 − x) steps j forward by an exact
multiple of the group size, so the sources of each target form an
arithmetic progression — prefix sums collapse the recurrence to
O(maxLength).

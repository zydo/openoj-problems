# Fewest Zero-One Summands Making a Number

## Description

A positive decimal number is called **zero-one** when every one of its
digits is either `0` or `1`, written without leading zeros. For instance,
`1001` and `110` are zero-one numbers, while `202` and `340` are not.

You are given a string `n` that encodes a positive decimal integer. Return
the smallest count of zero-one numbers whose sum is exactly that integer.

### Example 1

```text
Input: n = "4291"
Output: 9
Explanation: A zero-one number adds at most 1 to any single digit, so the
tens digit `9` already forces nine summands. Nine summands also suffice,
stacked one layer per unit of every digit.
```

### Example 2

```text
Input: n = "1020301"
Output: 3
Explanation: The largest digit is `3`, and three summands cover every
position.
```

### Example 3

```text
Input: n = "9000000001"
Output: 9
Explanation: Only the biggest digit matters — the zeros and the lone `1`
need nothing beyond what the `9` already requires.
```

### Constraints

- `1 <= n.length <= 10⁵`
- `n` is made up of digit characters only.
- `n` has no leading zeros and encodes a positive integer.

## Hints

### Hint 1

First consider a single-digit input: a digit `d` needs exactly `d` ones
piled on top of each other.

### Hint 2

Adding zero-one numbers never carries between columns, so every digit
position can be settled on its own and the counts merged.

### Hint 3

The answer is nothing more than the largest digit appearing in `n`.

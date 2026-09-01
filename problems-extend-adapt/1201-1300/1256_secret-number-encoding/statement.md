# Secret Number Encoding

## Description

A hidden rule rewrites every non-negative integer `num` as a string built
from the characters `0` and `1`. The rule itself is never spelled out — the
first few inputs and their encodings are all you get:

```text
num -> encoded
  0 -> ""
  1 -> "0"
  2 -> "1"
  3 -> "00"
  4 -> "01"
  5 -> "10"
  6 -> "11"
  7 -> "000"
```

![diagram](figures/1256-1.svg)

Work out the rule from the table and return the encoding of `num`.

### Example 1

```text
Input: num = 6
Output: "11"
```

### Example 2

```text
Input: num = 0
Output: ""
Explanation: The encoding of 0 is the empty string.
```

### Example 3

```text
Input: num = 42
Output: "01011"
```

### Constraints

- `0 <= num <= 10^9`

## Hints

### Hint 1

Watch how the encoded lengths grow: one string of length 0, then two of
length 1, then four of length 2 — the pattern of a binary counter.

### Hint 2

Write `num + 1` in binary. The encoding is that binary string with its
leading `1` removed.

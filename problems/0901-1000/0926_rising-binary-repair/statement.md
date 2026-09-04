# Rising Binary Repair

## Description

A binary string is called rising when all of its `0`s come before all of its
`1`s — a block of `0`s (possibly empty) followed by a block of `1`s (also
possibly empty).

You are given a binary string `s`. In one move you may pick any position and
flip its bit, turning a `0` into a `1` or a `1` into a `0`.

Return the fewest flips needed to turn `s` into a rising string.

### Example 1

```text
Input: s = "11000"
Output: 2
Explanation: Flipping the two leading `1`s yields `00000`. The alternative
of turning the three `0`s into `1`s costs more.
```

### Example 2

```text
Input: s = "0101"
Output: 1
Explanation: Flipping the `0` in the third position produces `0111`.
```

### Example 3

```text
Input: s = "0000"
Output: 0
Explanation: The string is already rising, so nothing has to change.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of the characters `'0'` and `'1'`.

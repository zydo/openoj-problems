# Fewest Flips After Rotation

## Description

You are given a binary string `s`, on which you may repeat two kinds of
move in any order:

- **Rotate:** take the first character off the front of `s` and append it
  to the back.
- **Flip:** change one character, `'0'` into `'1'` or `'1'` into `'0'`.

A string is **alternating** when no two adjacent characters are equal —
`"101"` and `"0101"` are, `"1001"` is not.

Rotations are free; flips are what you pay for. Return the least number
of flips needed so that, after some sequence of moves, `s` is alternating.

### Example 1

```text
Input: s = "10101"
Output: 0
Explanation: The string already alternates, so no flip is needed.
```

### Example 2

```text
Input: s = "1000110"
Output: 1
Explanation: Five rotations leave "1010001", which differs from
"1010101" in exactly one character. Flipping in place would have cost 3.
```

### Example 3

```text
Input: s = "0110011"
Output: 2
Explanation: Two rotations give "1001101"; flipping its third and fifth
characters yields "1010101". No rotation does better than two flips.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s[i]` is `'0'` or `'1'`.

## Hints

### Hint 1

Only the counts of 0s and 1s sitting at odd and even positions of the
current string matter for the flip cost.

### Hint 2

For each of the `n` rotations, compare against both alternating targets
`"0101…"` and `"1010…"` and keep the smaller mismatch count. Slide a
length-`n` window over the doubled string so each rotation's counts come
from the previous one in `O(1)`.

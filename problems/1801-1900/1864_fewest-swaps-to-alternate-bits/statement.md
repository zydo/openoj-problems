# Fewest Swaps to Alternate Bits

## Description

A binary string alternates when neighbouring characters always differ —
`"1010"` qualifies, `"1001"` does not.

In one swap you may exchange the characters at any two positions of the
binary string `s`; the positions do not have to be adjacent. Return the
smallest number of swaps after which `s` alternates, or `-1` if no
sequence of swaps can ever make it alternate.

### Example 1

```text
Input: s = "1001"
Output: 1
Explanation: Swap positions 2 and 3: "1001" -> "1010".
The string alternates after a single swap.
```

### Example 2

```text
Input: s = "10101"
Output: 0
Explanation: The string already alternates, so nothing needs to move.
```

### Example 3

```text
Input: s = "0111"
Output: -1
Explanation: With three 1s and one 0 no arrangement of the string can
avoid two equal neighbours.
```

### Constraints

- `1 <= s.length <= 1000`
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

An alternating string of a given length has only two possible shapes:
one starts with `'0'`, the other starts with `'1'`.

### Hint 2

For each shape the string could reach, count the positions already
holding the wrong character. Every swap repairs two such positions at
once, so a shape costs half its mismatch count — and a shape is even
reachable only when the string's character counts match it.

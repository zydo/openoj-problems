# Reshape a Binary String with Pair Moves

## Description

You hold a binary string `s` of length `n` and a goal string `target` of
the same length. One move selects two distinct positions `i` and `j`
and rewrites both of them in a single stroke, with both right-hand
sides read from the pair as it was before the move:

- `s[i]` is set to the bit `s[i] OR s[j]`;
- `s[j]` is set to the bit `s[i] XOR s[j]`.

As a concrete demo, take s = "1001" and pick i = 1, j = 0. The OR of
the chosen pair is `0 OR 1 = 1` and the XOR is `0 XOR 1 = 1`, so both
positions end up holding `1` and the string reads "1101" afterwards.

You may perform moves any number of times, with any choices of `i` and
`j` each time. Answer whether some sequence of moves can change `s`
into exactly `target`.

### Example 1

```text
Input: s = "1100", target = "0110"
Output: true
Explanation: Pick i = 1 and j = 0: the two 1s cancel in the XOR slot,
leaving s = "0100". Then pick i = 2 and j = 1: the 0 absorbs its
neighbor through the OR slot while that neighbor drops to 0, giving
s = "0110".
```

### Example 2

```text
Input: s = "010", target = "000"
Output: false
Explanation: A string that contains a 1 can never reach the all-zero
string, so no number of moves helps here.
```

### Example 3

```text
Input: s = "00", target = "00"
Output: true
Explanation: The string already matches the goal, so the empty
sequence of moves succeeds.
```

### Constraints

- `s` and `target` have the same length `n`, where `2 <= n <= 10⁵`.
- Each character of `s` and `target` is either `0` or `1`.

## Hints

### Hint 1

Play with small cases and watch which starting strings are stuck —
there is exactly one shape a string can have that no move can ever
pull it out of.

### Hint 2

A single `1` can never be wiped out entirely: the only move that turns
a cell to `0` burns two `1`s and writes a fresh `1` next door. So
"does it contain a `1`" is preserved by every move, and that one bit
of information is the entire answer.

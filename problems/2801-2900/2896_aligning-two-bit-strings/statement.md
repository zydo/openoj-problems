# Aligning Two Bit Strings

## Description

Two binary strings `s1` and `s2` of the same length `n` are given, along
with a positive integer `x`. Your job is to turn `s1` into `s2` — or
discover that no sequence of moves can.

Two paid moves may be applied to `s1` as often as you like:

- Pick any two positions `i` and `j` and flip the bits at both, paying
  `x`.
- Pick a position `i` with `i < n - 1` and flip the neighboring bits at
  `i` and `i + 1`, paying `1`.

A flip turns a `0` into a `1` or a `1` into a `0`. Return the smallest
total price that makes `s1` equal to `s2`, or `-1` when the two strings
can never be brought together.

### Example 1

```text
Input: s1 = "1010", s2 = "0101", x = 3
Output: 2
Explanation: Every position disagrees. Flip the adjacent pairs (0, 1)
and (2, 3) at price 1 each: "1010" becomes "0110", then "0101". The
costly pair move is never needed, so the total is 2.
```

### Example 2

```text
Input: s1 = "100", s2 = "000", x = 1
Output: -1
Explanation: Exactly one position disagrees, yet every move flips two
positions at once, so the mismatch count can never be driven to zero.
```

### Example 3

```text
Input: s1 = "1001100001", s2 = "0000000000", x = 5
Output: 6
Explanation: The disagreements sit at positions 0, 3, 4, and 9. Pay 5
to flip positions 0 and 9 together, then clear the adjacent pair 3 and
4 for 1 — a total of 6. Pairing neighbors instead costs 3 for (0, 3)
plus at least 5 for (4, 9), which is worse.
```

### Constraints

- `n == s1.length == s2.length`
- `1 <= n, x <= 500`
- `s1` and `s2` consist only of the characters `'0'` and `'1'`.

## Hints

### Hint 1

A position where the strings already agree should stay untouched — the
only positions that matter are the ones where `s1` and `s2` differ.
Collect their indices and reason about that list alone.

### Hint 2

Each move flips exactly two positions, so an odd number of mismatches
means immediate failure. For the mismatch list, each position either
closes a pairing you already paid for, opens one by paying `x`, or
settles with its next neighbor at the cheaper of `x` and the distance
between them — and an open pairing is allowed to reach past other
settlements, which is exactly what beats naive neighbor pairing when
`x` is small.

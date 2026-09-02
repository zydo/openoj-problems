# Bit Bubble Time

## Description

You are watching a binary string `s` evolve. Each second, every occurrence
of `"01"` anywhere in the string flips to `"10"` at the same instant —
think of each `1` as bubbling one position leftward past a `0`. After the
flip, the next second begins, and the process stops the moment the string
no longer contains `"01"`.

Return how many seconds the process runs.

### Example 1

```text
Input: s = "0011"
Output: 3
Explanation: The seconds pass as follows:
"0011" -> "0101" -> "1010" -> "1100".
The last string has no `"01"`, so the process took 3 seconds.
```

### Example 2

```text
Input: s = "100001"
Output: 4
Explanation: The lone `1` at the end must cross the run of four zeros
ahead of it, one swap per second, ending at "110000". That takes 4
seconds.
```

### Example 3

```text
Input: s = "1100"
Output: 0
Explanation: Every `1` already sits left of every `0`, so no `"01"`
exists and the process is finished before it starts.
```

### Constraints

- `1 <= s.length <= 1000`
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

A naive loop that applies the simultaneous flip each second and counts
the passes works within the given bounds.

### Hint 2

For a one-pass answer, track how many zeros the current prefix holds: a
`1` arriving after `z` zeros needs `z` swaps, and it cannot begin until
the previous `1` has finished moving.

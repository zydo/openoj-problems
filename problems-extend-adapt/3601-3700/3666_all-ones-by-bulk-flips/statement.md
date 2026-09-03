# All Ones By Bulk Flips

## Description

A binary string `s` and an integer `k` are given. One operation picks
exactly `k` distinct positions of `s` and flips every picked character —
each '0' becomes '1' and each '1' becomes '0'.

Every operation must flip exactly `k` positions, never more and never
fewer. Return the fewest operations that turn the whole string into all
'1' characters, or `-1` when no sequence of operations can ever get there.

### Example 1

```text
Input: s = "10011", k = 1
Output: 2
Explanation: With k = 1 each operation repairs a single position, so the
two '0' characters cost one flip apiece.
```

### Example 2

```text
Input: s = "10110", k = 4
Output: 2
Explanation: Flip indices [0, 1, 2, 3]: "10110" becomes "01000".
Flip indices [0, 2, 3, 4]: "01000" becomes "11111". Breaking already
finished positions along the way is allowed — only the string after each
complete operation matters.
```

### Example 3

```text
Input: s = "0010", k = 2
Output: -1
Explanation: Every operation flips an even number of characters, so the
count of zeros changes by an even amount and stays odd forever, while an
all-ones string has no zeros at all. The goal is unreachable.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s[i]` is either `'0'` or `'1'`.
- `1 <= k <= s.length`

## Hints

### Hint 1

Positions never matter — only the count `z` of zeros does. An operation
flips `i` current zeros and `k - i` current ones, moving `z` to
`z + k - 2 * i` for any legal `i`; as `i` varies this is one contiguous
range of a single fixed parity.

### Hint 2

Treat the integers `0..n` as states and search from the starting count
toward `0` with BFS; one edge jumps from a state to every value inside
its computed interval.

### Hint 3

Keep the unvisited states in two skip lists keyed by parity and erase
whole runs as intervals are scanned, so every state enters the queue once
and the search stays near-linear.

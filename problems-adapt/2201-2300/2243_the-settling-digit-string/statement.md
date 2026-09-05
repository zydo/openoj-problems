# The Settling Digit String

## Description

Start from a string `s` of digits and a group size `k`. While `s` is still
longer than `k`, one settling pass runs:

- Cut `s` into consecutive blocks of `k` characters; the trailing block may
  come up short.
- Swap each block for the decimal string of its digit total — `"346"`
  becomes `"13"` because 3 + 4 + 6 is 13.
- String the block results back together into the new `s`.

Once the string's length is at most `k`, it has settled: return it as the
answer.

### Example 1

```text
Input: s = "9081726354", k = 3
Output: "954"
Explanation: The first pass cuts "908", "172", "635", and "4", whose digit
totals 17, 10, 14, and 4 reassemble into "1710144". The second pass cuts
"171", "014", and "4", giving 9, 5, and 4 — the string "954" now has
length 3 and has settled.
```

### Example 2

```text
Input: s = "5", k = 2
Output: "5"
Explanation: A string no longer than k never enters a pass at all.
```

### Example 3

```text
Input: s = "99999", k = 2
Output: "99"
Explanation: The passes run "99999" → "18189" (18, 18, 9) → "999"
(9, 9, 9) → "189" (18, 9) → "99" (9, 9), which finally has length 2.
```

### Constraints

- `1 <= s.length <= 100`
- `2 <= k <= 100`
- `s` consists only of the digits `'0'` through `'9'`.

### Hint 1

No shortcut is needed — replay the passes exactly as the process defines
them.

### Hint 2

Stepping through the string `k` characters at a time naturally copes with a
short final block.

# One-Heavy Substrings

## Description

You are given a binary string `s`.

Call a substring of `s` one-heavy when the number of ones it holds is at
least the square of the number of zeros it holds. Count how many of `s`'s
substrings are one-heavy.

### Example 1

```text
Input: s = "110"
Output: 5
Explanation: Every substring qualifies except the lone "0" at the end,
which holds one zero but no ones.
```

### Example 2

```text
Input: s = "100"
Output: 2
Explanation: Only "1" and "10" qualify. For instance, "100" holds two
zeros, which would demand at least four ones.
```

### Example 3

```text
Input: s = "0110"
Output: 7
Explanation: Of the ten substrings, three fail — the two lone "0"s and
the full string "0110", whose two zeros demand four ones.
```

### Constraints

- `1 <= s.length <= 4 * 10⁴`
- `s` consists only of the characters `'0'` and `'1'`.

## Hints

### Hint 1

Pin the left endpoint and work out, zero count by zero count, which right
endpoints produce a qualifying substring.

### Hint 2

A qualifying substring cannot hold many zeros: its ones never exceed the
string's length, so the zero count is capped near `sqrt(n)`.

### Hint 3

For each left endpoint, step through only its next `sqrt(n)` zeros and
count the substrings whose rightmost zero is the one currently visited.

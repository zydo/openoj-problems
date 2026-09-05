# Sawtooth String Assembly

## Description

Dismantle the input string `s` and rebuild it into a new string by cycling
through two opposing sweeps:

1. In an upward sweep, walk the alphabet from `'a'` toward `'z'`, and each
   time you meet a letter still present in `s`, remove one copy of it and
   append that copy to the result.
2. In a downward sweep, walk from `'z'` back toward `'a'` and do the same.

Run an upward sweep, then a downward sweep, then upward again, alternating
until `s` has no letters left. Return the string that accumulates.

(Each sweep is exactly the "attach the smallest unused letter greater than the
last one" — or, on the way down, "largest smaller than the last one" — rule,
since a sweep visits the letters in strict order.)

### Example 1

```text
Input: s = "banana"
Output: "abnnaa"
Explanation: The first upward sweep removes a, then b, then n. The following
downward sweep removes the second n and an a. Two a's remain, so the final
upward sweep appends them both.
```

### Example 2

```text
Input: s = "cba"
Output: "abc"
Explanation: A single upward sweep consumes the whole string in alphabetical
order.
```

### Example 3

```text
Input: s = "xylophone"
Output: "ehlnopxyo"
Explanation: The upward sweep takes e, h, l, n, o, p, x, y; the downward
sweep finds only the second o left and appends it.
```

### Constraints

- `1 <= s.length <= 500`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Nothing about the original order matters — only how many copies of each
letter the string holds.

### Hint 2

Model one wave as: scan `'a'` through `'z'`, appending and decrementing the
count of every letter still in stock; then scan `'z'` through `'a'` the same
way.

### Hint 3

Alternate the scans until every count has reached zero.

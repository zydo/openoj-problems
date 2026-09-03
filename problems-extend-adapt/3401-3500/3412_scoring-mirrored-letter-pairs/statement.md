# Scoring Mirrored Letter Pairs

## Description

Two lowercase letters are mirrors of each other when they sit at mirrored
positions of the alphabet: `'a'` pairs with `'z'`, `'b'` with `'y'`, and so
on down to `'m'` pairing with `'n'`.

You are given a string `s`, all of whose positions start out unmarked.
Scan `s` from left to right while keeping a score that starts at 0. When
the scan reaches index `i`:

- If some unmarked index `j < i` holds the mirror of `s[i]`, take the
  closest such `j`, mark both `i` and `j`, and add `i - j` to the score.
- If no such `j` exists, leave the index unmarked and move on.

Return the score once the scan reaches the end of `s`.

### Example 1

```text
Input: s = "axbycz"
Output: 9
Explanation: Index 3 pairs with index 2 (+1), index 4 pairs with
index 1 (+3), and index 5 pairs with index 0 (+5). The score is
1 + 3 + 5 = 9.
```

### Example 2

```text
Input: s = "abzoa"
Output: 2
Explanation: Index 2 is 'z', and the only unmarked 'a' before it sits at
index 0, so that pair adds 2. Every later index finds no unmarked mirror
to pair with.
```

### Example 3

```text
Input: s = "zzqqaa"
Output: 8
Explanation: Neither 'q' ever meets a 'j', so both wait unmarked. The two
trailing 'a' letters pair with the two leading 'z' letters at distances
3 and 5, giving 3 + 5 = 8.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Give each of the 26 letters its own stack of the indices still unmarked.

### Hint 2

At index `i` only the stack of the mirror letter matters, and its top is
always the closest unmarked candidate: indices enter a stack in increasing
order, and a pairing pops the position that gets marked.

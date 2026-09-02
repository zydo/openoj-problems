# Trim K of Each Letter From the Ends

## Description

You are handed a string `s` built only from the letters 'a', 'b', and 'c',
together with a non-negative integer `k`. One move consists of striking
off either the first letter or the last letter of `s`; every struck-off
letter counts as collected.

Return the smallest number of moves after which you will have collected at
least `k` copies of each of the three letters, or `-1` if the string can
never supply that many.

### Example 1

```text
Input: s = "cbaacabc", k = 2
Output: 6
Explanation: Strike off the first three letters "cba", collecting one
'a', one 'b', and one 'c'. Then strike off the last three letters "abc",
which brings every letter to at least two copies. Six moves are used, and
no shorter run of moves collects two of each letter.
```

### Example 2

```text
Input: s = "abab", k = 3
Output: -1
Explanation: The string holds no 'c' at all, so three copies of 'c' can
never be collected.
```

### Example 3

```text
Input: s = "abccba", k = 1
Output: 3
Explanation: Strike off the last three letters "cba"; they already
include one of each letter. At least three moves are necessary because
each move collects a single letter and one of every letter is required.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` contains only the letters `'a'`, `'b'`, and `'c'`.
- `0 <= k <= s.length`

## Hints

### Hint 1

Count how many copies of each letter the whole string holds first; if any
letter falls short of `k`, no amount of end-striking can succeed.

### Hint 2

Whatever survives the striking is one contiguous block in the middle. The
quota is met exactly when that block holds at most `count - k` copies of
every letter, so the goal becomes making that block as long as possible.

### Hint 3

Sweep one sliding window over the string: extend it on the right, and
pull its left edge forward whenever any letter inside exceeds its cap.
The longest legal window `w` yields the answer `s.length - w`.

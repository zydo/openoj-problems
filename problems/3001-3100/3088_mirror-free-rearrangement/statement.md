# Mirror-Free Rearrangement

## Description

A string `s` of even length `n` is mirror-free when no character matches
the one across the center from it: `s[i] != s[n - i - 1]` for every index
`0 <= i < n`.

You may rearrange `s` freely. One operation picks any two characters of
`s` and swaps them, and you may perform any number of operations,
including none.

Return the lexicographically smallest mirror-free rearrangement of `s`.
If no rearrangement qualifies, return `"-1"`.

### Example 1

```text
Input: s = "bcab"
Output: "abcb"
Explanation: plain sorted order "abbc" fails because the two "b" letters
face each other across the center (s[1] == s[2]). Exchanging the second
"b" with "c" produces "abcb", where s[0] != s[3] and s[1] != s[2].
```

### Example 2

```text
Input: s = "bead"
Output: "abde"
Explanation: the alphabetically sorted arrangement is already
mirror-free: s[0] != s[3] and s[1] != s[2].
```

### Example 3

```text
Input: s = "ccccab"
Output: "-1"
Explanation: four of the six positions hold "c", but the string has only
three mirrored pairs — by the pigeonhole principle some pair must carry
two "c" letters, so no arrangement can succeed.
```

### Constraints

- `2 <= s.length <= 10⁵`
- `s.length` is even.
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Swaps can reach every rearrangement, so the task is really about
orderings of the letter multiset — and alphabetical order is the
smallest candidate.

### Hint 2

In the sorted arrangement each mirrored pair is checked exactly once by
walking the right half. A collision there comes from a run of equal
letters straddling the center.

### Hint 3

Repair greedily: whenever a position matches its mirror, swap in the
smallest still-unused strictly larger letter, tracked by a pointer that
only ever moves right. Exhausting that pointer means some letter fills
more than half the string and no arrangement can separate it.

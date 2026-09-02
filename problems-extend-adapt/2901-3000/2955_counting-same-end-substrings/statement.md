# Counting Same-End Substrings

## Description

You are given a string `s` of lowercase English letters together with a
list of index ranges `queries[i] = [li, ri]`. Each range names a window
of `s`: the characters from index `li` through index `ri`, both ends
included.

Call a substring same-end when its first character and its last
character are equal — a one-character substring satisfies this
automatically. Throughout, a substring is any non-empty run of
consecutive characters taken from the window.

Return an array whose `i`-th entry is the number of same-end substrings
contained in the window `queries[i]`.

### Example 1

```text
Input: s = "bcbccb", queries = [[1,3],[0,5],[2,2],[0,3]]
Output: [4,12,1,6]
Explanation: Window [1,3] is "cbc": 'b' occurs once and 'c' twice, and
each pair of equal endpoints fixes one same-end substring, giving 1 and
3 for a total of 4. Window [0,5] is "bcbccb", where both letters occur
three times, so 6 + 6 = 12. Window [2,2] is "b", whose only substring
counts, giving 1. Window [0,3] is "bcbc", where each letter occurs
twice, so 3 + 3 = 6.
```

### Example 2

```text
Input: s = "wxyz", queries = [[1,3],[0,3]]
Output: [3,4]
Explanation: "xyz" has three distinct characters, so only its three
one-character substrings are same-end. "wxyz" likewise has four
distinct characters, so the answer there is 4.
```

### Constraints

- `2 <= s.length <= 3 * 10⁴`
- `s` consists only of lowercase English letters.
- `1 <= queries.length <= 3 * 10⁴`
- `queries[i] = [li, ri]`
- `0 <= li <= ri < s.length`

## Hints

### Hint 1

A same-end substring is pinned down by choosing its first and last
positions, so a character appearing `t` times inside a window accounts
for `t * (t + 1) / 2` of them.

### Hint 2

Tally each letter's occurrences with prefix counts over `s`, and every
window's frequencies become a constant-time lookup.

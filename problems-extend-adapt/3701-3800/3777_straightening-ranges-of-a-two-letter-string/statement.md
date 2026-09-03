# Straightening Ranges of a Two-Letter String

## Description

You are watching a string `s` of length `n` whose characters are only `'A'`
and `'B'`, and processing a list of `q` events against it. Each event
`queries[i]` is one of two kinds:

- `[1, j]` — toggle the character at index `j`: an `'A'` becomes `'B'` and
  the other way around. This edits `s` in place, so later events see the
  edited string.
- `[2, l, r]` — report how many characters would have to be dropped from
  the substring `s[l..r]` so that what remains is alternating, meaning no
  two neighboring characters match. A one-character substring always
  qualifies. The string itself is left alone.

Collect the answers to the second kind of event, in order, and return them
as an array.

### Example 1

```text
Input: s = "AABB", queries = [[2,0,3],[1,0],[2,0,3]]
Output: [2,1]
Explanation:
Event 0, [2, 0, 3]: the whole string "AABB" carries two clashing
neighbor pairs, AA and BB, so dropping one character from each pair —
2 in all — straightens it.
Event 1, [1, 0]: the leading 'A' toggles to 'B', making the string
"BABB".
Event 2, [2, 0, 3]: now only the trailing BB clashes, so the answer is 1.
```

### Example 2

```text
Input: s = "AAAA", queries = [[1,2],[2,0,3]]
Output: [1]
Explanation:
Event 0, [1, 2]: the character at index 2 toggles, and the string reads
"AABA".
Event 1, [2, 0, 3]: only the opening AA clashes; deleting one of its
characters leaves an alternating string, so the answer is 1.
```

### Example 3

```text
Input: s = "AB", queries = [[2,1,1],[2,0,1]]
Output: [0,0]
Explanation: Both inspected ranges — the single character "B" and the
full string "AB" — are already alternating, so nothing needs to be
dropped.
```

### Constraints

- `1 <= n == s.length <= 10⁵`
- `s[i]` is either `'A'` or `'B'`.
- `1 <= q == queries.length <= 10⁵`
- `queries[i].length == 2 or 3`
- `queries[i] == [1, j]` or `queries[i] == [2, l, r]`
- `0 <= j <= n - 1`
- `0 <= l <= r <= n - 1`

## Hints

### Hint 1

Work with an auxiliary mark per position: position `i` (for `i >= 1`) is
marked exactly when `s[i]` equals `s[i - 1]`.

### Hint 2

Each clashing neighbor pair forces one deletion and one deletion is
always enough, so a range's answer is just the number of marks inside it
— a Fenwick tree keeps both the range sums and the toggles cheap.

### Hint 3

Toggling `s[j]` can only change the marks at `j` and `j + 1`; every other
neighboring pair is unaffected.

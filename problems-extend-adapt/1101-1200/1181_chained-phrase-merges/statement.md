# Chained Phrase Merges

## Description

You are given `phrases`, a list of phrases. A phrase contains only
lowercase English letters and single spaces, never begins or ends with a
space, and never contains two spaces in a row.

Two phrases can merge when the last word of one equals the first word of
the other: the shared word is written once, so
`"a b c"` joined with `"c d"` becomes `"a b c d"`. Only that boundary word
collapses — nothing else is trimmed.

Consider every ordered pair of entries `phrases[i]` and `phrases[j]` with
`i != j` (both orders, so a phrase may merge into another and be merged
into). Collect every distinct merge result and return them sorted
lexicographically.

### Example 1

```text
Input: phrases = ["morning walk","walk home","home run"]
Output: ["morning walk home","walk home run"]
Explanation: "morning walk" hands off "walk" to "walk home", and
"walk home" hands off "home" to "home run". No other boundary words
match.
```

### Example 2

```text
Input: phrases = ["open gate","gate open"]
Output: ["gate open gate","open gate open"]
Explanation: Both orders are tried, and the two results differ.
```

### Example 3

```text
Input: phrases = ["sun","sun","moon"]
Output: ["sun"]
Explanation: A phrase never pairs with its own position, but the duplicate
copy lets "sun" merge with "sun"; the shared word collapses and the merge
result is just "sun". Nothing chains onto "moon".
```

### Constraints

- `1 <= phrases.length <= 100`
- `1 <= phrases[i].length <= 100`

## Hints

### Hint 1

With at most 100 phrases, checking every ordered pair directly is fast
enough.

### Hint 2

A pair merges exactly when the first phrase's last word equals the second
phrase's first word; bucket phrases by their first word so each phrase
only inspects the entries that can follow it, then dedupe and sort.

# Most Pattern Hits After One Insert

## Description

You are given a 0-indexed string `text` and a 0-indexed string `pattern`
of length 2, both made up of lowercase English letters.

You may insert one single character into `text` — either `pattern[0]` or
`pattern[1]` — at any position, including the very start or the very end.

Return the largest number of times `pattern` can occur as a subsequence of
`text` after that one insertion.

A subsequence is a string obtained from another string by deleting some or
no characters while keeping the surviving characters in their original
order.

### Example 1

```text
Input: text = "cbcca", pattern = "ca"
Output: 6
Explanation: The text already holds 3 "ca" subsequences — each 'c' pairs
with the final 'a'. Appending pattern[1] = 'a' turns the text into
"cbccaa", where each of the 3 c's pairs with each of the 2 a's, giving 6.
It can be shown that no single insertion beats 6.
```

### Example 2

```text
Input: text = "moon", pattern = "on"
Output: 4
Explanation: "moon" contains 2 "on" subsequences, one per 'o', each
pairing with the final 'n'. Appending pattern[1] = 'n' yields "moonn",
where both o's pair with both n's — 4 occurrences in total.
```

### Example 3

```text
Input: text = "zzz", pattern = "zz"
Output: 6
Explanation: Both pattern letters are equal, so three z's already give
3 "zz" pairs. Inserting one more z makes four, which pair in
4 · 3 / 2 = 6 ways.
```

### Constraints

- `1 <= text.length <= 10⁵`
- `pattern.length == 2`
- `text` and `pattern` consist only of lowercase English letters.

## Hints

### Hint 1

Work out where an inserted `pattern[0]` pays off most, then do the same
for an inserted `pattern[1]` — compare the two best gains.

### Hint 2

Count how many times the pattern already occurs as a subsequence of the
untouched text; each insertion option simply adds a known quantity to
that count.

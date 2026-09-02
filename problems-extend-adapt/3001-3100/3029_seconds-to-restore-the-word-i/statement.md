# Seconds To Restore The Word I

## Description

You are given a string `word` and an integer `k`.

Every second, two things happen in order:

- the first `k` characters are cut off the front of `word`;
- exactly `k` characters of your choosing are appended to the end.

The characters you append need not be the ones you cut away, but both
steps happen every second — `k` characters always leave the front and `k`
always join the back, so the length never changes.

Return the smallest number of seconds, greater than zero, after which
`word` can be brought back to exactly its starting text.

### Example 1

```text
Input: word = "abcabc", k = 3
Output: 1
Explanation: The first second removes the leading "abc", leaving
"abc" at the front. Appending "abc" to it rebuilds "abcabc", so the
word is back to its initial state after a single second. Fewer than
one second is not allowed.
```

### Example 2

```text
Input: word = "abcabca", k = 2
Output: 3
Explanation: One or two seconds cannot work: no suffix left over
after cutting 2 or 4 characters matches the front of the word. After
the third second only the final "a" survives, and it already equals
the word's first letter — the three appends then re-spell "bc",
"ab" and "ca" to complete "abcabca".
```

### Example 3

```text
Input: word = "aabcaa", k = 3
Output: 2
Explanation: After one second the surviving suffix "caa" would have
to serve as the prefix of the word, but the word starts with "aab",
so one second falls short. After the second second all six original
characters are gone and the whole word can simply be retyped.
```

### Constraints

- `1 <= word.length <= 50`
- `1 <= k <= word.length`
- `word` consists only of lowercase English letters.

## Hints

### Hint 1

After `t` seconds the only original characters still present are the
last `n - t*k` of them, parked at the front of the current word. A
restore at time `t` is possible exactly when that surviving suffix
also matches the start of `word` — or when nothing survives at all.

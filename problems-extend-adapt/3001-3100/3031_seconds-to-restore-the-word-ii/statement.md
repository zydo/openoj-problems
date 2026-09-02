# Seconds To Restore The Word II

## Description

You are given a string `word` and an integer `k`.

Each second two moves happen, in order: the first `k` characters of
`word` are deleted, and then any `k` characters of your choosing are
appended to the end. The appended text need not match what was deleted,
but both moves are mandatory every second.

Return the fewest number of seconds, greater than zero, needed to bring
`word` back to exactly the text it started with.

### Example 1

```text
Input: word = "abababab", k = 2
Output: 1
Explanation: The first second deletes the opening "ab", leaving
"ababab" at the front — precisely the word's first six letters. One
append of "ab" completes the word, so a single second suffices, and
zero seconds does not count.
```

### Example 2

```text
Input: word = "aabxaab", k = 2
Output: 2
Explanation: After one second the surviving suffix "bxaab" does not
agree with the front of the word, so the word is not restored yet.
After the second second the surviving "aab" matches the word's opening
"aab", and the two appends supply the missing "xa" and "ab".
```

### Example 3

```text
Input: word = "abcdef", k = 4
Output: 2
Explanation: One second would leave "ef" occupying the front, which
clashes with the word's opening "ab". Two seconds cut away all six
original characters, and the whole word can simply be typed again.
```

### Constraints

- `1 <= word.length <= 10⁶`
- `1 <= k <= word.length`
- `word` consists only of lowercase English letters.

## Hints

### Hint 1

After `t` seconds a restore is possible exactly when the surviving
suffix of length `n - t*k` equals the prefix of that same length — or
when nothing survives, i.e. `t*k >= n`.

### Hint 2

The workable lengths are precisely the border lengths of `word` (its
proper prefixes that are also suffixes). All of them can be collected
in linear time with a prefix function, a Z-array, or a rolling hash.

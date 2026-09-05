# How Many Copies Can You Spell?

## Description

You have a pool of letters, the string `s`, and a word you want to spell,
the string `target`. Letters may be picked out of `s` in any order and
each letter can be used at most once, but the letters of each finished
copy may be arranged however you like.

Return the greatest number of complete copies of `target` that `s` can
supply.

### Example 1

```text
Input: s = "mississippi", target = "sim"
Output: 1
Explanation: The pool holds one 'm', four 'i's, and four 's's. Spelling
"sim" once consumes the only 'm', so a second copy is impossible — the
answer is 1.
```

### Example 2

```text
Input: s = "aabbcc", target = "abcabc"
Output: 1
Explanation: Each copy of "abcabc" demands two of every letter, and the
pool holds exactly two of each — enough for one copy and nothing left
over.
```

### Example 3

```text
Input: s = "hello", target = "world"
Output: 0
Explanation: The pool has no 'r' and no 'd', so not even one copy can
be spelled.
```

### Constraints

- `1 <= s.length <= 100`
- `1 <= target.length <= 10`
- `s` and `target` contain only lowercase English letters.

## Hints

### Hint 1

Tally how often each letter appears in `s` and in `target`.

### Hint 2

Go letter by letter: if the pool has `x` copies of a letter and each
copy of `target` consumes `y` of them, that letter alone supports
`floor(x / y)` copies.

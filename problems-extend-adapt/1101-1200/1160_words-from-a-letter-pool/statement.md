# Words From a Letter Pool

## Description

You are given a pool of letters `chars` and a list of words `words`.

A word is **spellable** when every letter it uses is present in the pool at
least as many times as the word needs it. The pool is never diminished: each
word is checked against the full pool, independent of every other word.

Return the combined length of all spellable words in `words`.

### Example 1

```text
Input: words = ["book","note","pen","pencil"], chars = "pencilsbook"
Output: 13
Explanation: "book", "pen", and "pencil" can each be spelled from the pool,
so the answer is 4 + 3 + 6 = 13. "note" cannot — the pool holds no `t`.
```

### Example 2

```text
Input: words = ["moon","moss","son"], chars = "monks"
Output: 3
Explanation: "moon" needs two `o`s but the pool holds one, and "moss" needs
two `s`s but the pool holds one. Only "son" is spellable, so the answer is 3.
```

### Example 3

```text
Input: words = ["abc","aabbcc","abcx","xy"], chars = "aabbccxy"
Output: 15
Explanation: the pool carries two each of `a`, `b`, and `c` plus an `x` and
a `y`, so all four words fit and 3 + 6 + 4 + 2 = 15.
```

### Constraints

- `1 <= words.length <= 1000`
- `1 <= words[i].length, chars.length <= 100`
- `words[i]` and `chars` contain only lowercase English letters.

## Hints

### Hint 1

Handle each word on its own; the answer is a sum over independent checks.

### Hint 2

Letter order never matters — only letter counts. Tally the pool once, up
front.

### Hint 3

A word is spellable exactly when, for every letter, the word's tally does
not exceed the pool's tally.

# Two-Word Spellings Of A Target

## Description

You are handed three lowercase strings: two source words `word1` and `word2`,
and a `target` you want to spell. Build `target` one character at a time; the
character placed at each spot is copied from either `word1` or `word2`, subject
to these rules:

- The positions used inside `word1` must be strictly increasing from one
  placement to the next.
- The positions used inside `word2` must be strictly increasing too.
- Neither source may sit idle: each of the two words must supply at least one
  character of `target`.

Two builds count as different the moment some position of `target` draws from
a different word, or from a different index of the same word. Return how many
distinct builds spell `target`, modulo `10^9 + 7`.

### Example 1

```text
Input: word1 = "abb", word2 = "bba", target = "ab"

Output: 4

Explanation:

The 4 builds are:

    word1[0] = 'a', word2[0] = 'b'
    word1[0] = 'a', word2[1] = 'b'
    word2[2] = 'a', word1[1] = 'b'
    word2[2] = 'a', word1[2] = 'b'

Builds that take both characters from the same word are not allowed.
```

### Example 2

```text
Input: word1 = "aa", word2 = "aa", target = "aaaa"

Output: 6

Explanation:

Each word holds only two characters, so each word must feed exactly two of the
four spots. Picking which two spots `word1` feeds decides the build completely
(the indices inside each word are then forced to be 0 then 1), and there are 6
such picks.
```

### Example 3

```text
Input: word1 = "aba", word2 = "bab", target = "abab"

Output: 9

Explanation:

Neither word is long enough to spell the four-character target alone, so every
valid build mixes the two words. Enumerating the mixed choices yields 9 — for
instance `word1[0], word1[1], word2[1], word2[2]` spells `a, b, a, b`.
```

### Example 4

```text
Input: word1 = "zz", word2 = "qq", target = "zq"

Output: 4

Explanation:

The sources are forced — 'z' can only come from `word1` and 'q' only from
`word2` — but each character still has two possible indices, giving
2 × 2 = 4 builds.
```

### Constraints

- `1 <= word1.length, word2.length, target.length <= 100`
- `word1`, `word2`, and `target` consist of lowercase English letters only.

## Hints

### Hint 1

Frame a dynamic program keyed by how much of each word has been consumed so
far; every target character advances exactly one of the two cursors.

### Hint 2

Processing the target left to right, prefix sums over rows and columns of the
consumption table let each matching character be picked without rescanning all
earlier states.

### Hint 3

The table also counts builds that never touch one of the words. Those are just
ordinary single-word subsequence counts — compute each of them with a cheap
one-dimensional pass and subtract.

### Hint 4

Reduce modulo `10^9 + 7` at every addition, and take care that the final
subtraction stays non-negative under the modulus.

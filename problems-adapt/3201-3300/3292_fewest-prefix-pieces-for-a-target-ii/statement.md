# Fewest Prefix Pieces For A Target II

## Description

You are given an array of lowercase strings `words` and a lowercase string
`target`.

Call a string `x` a usable piece when `x` is a prefix of at least one
string in `words`. A piece may be any length from one character up to that
word's full length, and the same piece may be reused any number of times.

Return the fewest pieces that, concatenated in some order, spell out
`target` exactly. If no combination can do it, return `-1`.

This is the large-input companion of the same task: the target and the
individual words are ten times longer here, so per-offset rescans of every
word will not fit — the matching structure has to be mined in bulk.

### Example 1

```text
Input: words = ["kite","kitten","ten"], target = "kittenten"
Output: 2
Explanation: The piece "kitten" (a prefix of words[1]) followed by the
piece "ten" (a prefix of words[2]) spells the target.
```

### Example 2

```text
Input: words = ["aab","ba"], target = "aabaa"
Output: 2
Explanation: "aab" is a prefix of words[0], and the closing "aa" reuses
words[0] as well.
```

### Example 3

```text
Input: words = ["mn"], target = "no"
Output: -1
Explanation: No usable piece even begins with "n", so the target's first
character can never be covered.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 5 * 10⁴`
- The sum of all `words[i].length` is at most `10⁵`.
- `words[i]` and `target` consist only of lowercase English letters.
- `1 <= target.length <= 5 * 10⁴`

## Hints

### Hint 1

Let `dp[i]` be the fewest pieces that spell the first `i` characters of
`target`; a piece covering `target[i..j)` lets `dp[j]` take `dp[i] + 1`,
which is a range update over `j`.

### Hint 2

Hash every word's prefixes into a set, then binary-search the longest
stretch `target[i..j)` whose hash is present; inverse-modulo
precomputation keeps each rolling hash step constant time.

### Hint 3

A segment tree with range-min updates applies each `dp[i] + 1` to its
whole window of landing cells at once.

### Hint 4

Alternatively, feed the words into an Aho-Corasick automaton: scanning
`target` once reveals, at every index, the longest suffix ending there that
is a word prefix, which turns each update into a single window.

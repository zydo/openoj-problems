# Fewest Rewrites into k Palindromes

## Description

You are given a string `s` of lowercase English letters and an integer `k`.

A rewrite picks one position of `s` and replaces its letter with any other
lowercase letter.

First rewrite some positions of `s`. Then cut `s` into exactly `k` non-empty
pieces, each of which must read the same forwards and backwards.

Return the fewest rewrites that make such a cut possible.

### Example 1

```text
Input: s = "abcba", k = 2
Output: 2
Explanation: The whole string is a palindrome, but every cut damages it.
Cutting off the last letter leaves "abcb", which needs two rewrites to become
"bccb"; no two-way cut of this string costs less.
```

### Example 2

```text
Input: s = "abab", k = 2
Output: 0
Explanation: The pieces "aba" and "b" are already palindromes, so nothing
needs rewriting.
```

### Example 3

```text
Input: s = "annae", k = 3
Output: 1
Explanation: Cut into "a", "nn", "ae". The first two pieces already work;
rewriting the "e" to "a" turns the third into "aa".
```

### Constraints

- `1 <= k <= s.length <= 100`
- `s` consists of lowercase English letters.

### Follow-up

The price of a piece can be tabulated for every interval in quadratic time,
and the cutting decision needs one more factor of `n` per piece. Can you keep
the whole computation inside `O(k · n²)` time and `O(n²)` space?

## Hints

### Hint 1

Start with one piece in isolation: to make `s[i..j]` read the same both ways,
pair the first character with the last, the second with the second-to-last,
and so on. A mismatched pair is fixed by rewriting one side of it, so the
piece's price is its number of mismatched pairs — a fact about the interval
alone. Tabulate it for every interval.

### Hint 2

Fill that table by growing interval length: the price of `s[i..j]` is the
price of its interior `s[i+1..j-1]` plus one more whenever `s[i]` and `s[j]`
differ. Lengths 0 and 1 cost nothing.

### Hint 3

With prices known, decide where the cuts go. Let `dp[c][i]` be the cheapest
way to split the first `i` characters into `c` palindromic pieces. Whichever
block ends at `i` starts at some `j`, so `dp[c][i]` minimizes
`dp[c-1][j] + price[j][i-1]` over `j`; the answer is `dp[k][n]`.

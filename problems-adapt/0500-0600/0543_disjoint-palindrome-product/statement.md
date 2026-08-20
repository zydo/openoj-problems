# Disjoint Palindrome Product

## Description

You are given a string `s` of lowercase English letters.

Choose two non-overlapping substrings of `s`, one entirely before the other,
where each substring is a palindrome of odd length. The score of the choice
is the product of the two lengths. Return the maximum score.

Formally, pick indices `i <= j < k <= l` such that `s[i..j]` and `s[k..l]`
are both palindromes of odd length, and maximize `(j - i + 1) * (l - k + 1)`,
where `s[i..j]` runs from `i` to `j` inclusive.

A palindrome reads the same forwards and backwards, and a substring occupies
contiguous positions. Every lone character qualifies, so a valid pair always
exists.

### Example 1

```text
Input: s = "ababab"
Output: 9
Explanation: "aba" (positions 0-2) and "bab" (positions 3-5) score 3 * 3 = 9.
Taking the longer palindrome "ababa" instead leaves only the final "b", which
scores 5 * 1 = 5 — shorter pieces can win.
```

### Example 2

```text
Input: s = "aabaa"
Output: 3
Explanation: The whole string is an odd palindrome, but the two picks must
not overlap, so it cannot pair with anything. The best split keeps "a" on
one side and "aba" on the other for 1 * 3 = 3.
```

### Example 3

```text
Input: s = "xyxyxzqz"
Output: 15
Explanation: "xyxyx" (length 5) and "zqz" (length 3) sit side by side and
score 5 * 3 = 15.
```

### Constraints

- `2 <= s.length <= 10⁵`
- `s` consists of lowercase English letters

## Hints

### Hint 1

Since one palindrome lies wholly before the other, some boundary between two
adjacent positions separates them. For each boundary, what two numbers would
you like to multiply?

### Hint 2

Manacher's sweep returns, for every center, the reach of the longest odd
palindrome around it. From that, derive the longest odd palindrome that ends
at each index and the longest that starts at each index — trimming one
character off both ends moves the ending index left by one.

### Hint 3

Turn per-index bests into "best inside each prefix" and "best inside each
suffix" with running maxima, then multiply across every boundary. Single
characters guarantee neither side is ever empty.

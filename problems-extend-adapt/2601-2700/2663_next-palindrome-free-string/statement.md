# Next Palindrome-Free String

## Description

Call a string palindrome-free when:

- every letter it uses comes from the first `k` lowercase English letters,
- and it contains no palindromic substring of length 2 or more.

You are given a palindrome-free string `s` of length `n` and a positive
integer `k`. Return the palindrome-free string of length `n` that is
lexicographically larger than `s` but smaller than every other such string,
or an empty string if none exists.

A string `a` of equal length is lexicographically larger than a string `b`
when, at the first position where the two differ, `a` holds a strictly larger
character. For instance, `"abcd"` outranks `"abcc"` because they first differ
at the last position, where `d` beats `c`.

### Example 1

```text
Input: s = "cabd", k = 4
Output: "cadb"
Explanation: The last letter `d` is already the largest allowed letter, so
the third letter is raised from `b` to `d` (`c` would echo the opening `c`
two places back), and the final slot is then rewritten with the smallest
letter that stays palindrome-free, `b`. The result is "cadb".
```

### Example 2

```text
Input: s = "zyxwv", k = 26
Output: "zyxwy"
Explanation: Only the final letter needs to move: `v` steps up to `y`,
because `w` would repeat its immediate neighbor and `x` would repeat the
letter two places back. Leaving every earlier letter untouched is exactly
what makes the answer as small as possible.
```

### Example 3

```text
Input: s = "zyxz", k = 26
Output: ""
Explanation: No position accepts a larger letter — each candidate collides
with a letter one or two places before it — so `s` is already the largest
palindrome-free string of its length and no answer exists.
```

### Constraints

- `1 <= n == s.length <= 10⁵`
- `4 <= k <= 26`
- `s` is palindrome-free.

## Hints

### Hint 1

A palindrome of any length always has one of length 2 or 3 nested around its
center, so it is enough to forbid palindromes of just those two lengths.

### Hint 2

Scan from right to left and raise the first letter that accepts a larger
value without creating a palindrome of length 2 or 3.

### Hint 3

After raising that letter, fill everything to its right with the smallest
letter allowed at each step. That keeps every position before the raised one
identical to `s`, which is what makes the result lexicographically minimal.

### Hint 4

The fill itself is where leftover short palindromes get prevented — reuse
the same rule of never matching either of the two previous letters.

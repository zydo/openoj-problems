# Distinct Three-Letter Palindromes

## Description

You are given a string `s` of lowercase English letters. Count the distinct
palindromes of length three that occur in `s` as subsequences.

A palindrome reads the same in both directions. A subsequence is what
remains of a string after deleting zero or more characters while keeping the
survivors in their original order — `"ace"` inside `"abcde"`, for instance.

A palindrome spotted in more than one way still counts once.

### Example 1

```text
Input: s = "bacabab"
Output: 6
Explanation: The distinct palindromic subsequences of length three are:
- "bab", "bcb", "bbb" — a `b` at each end with `a`, `c`, or `b` between
- "aca", "aaa", "aba" — an `a` at each end with `c`, `a`, or `b` between
```

### Example 2

```text
Input: s = "aabb"
Output: 0
Explanation: Both letters repeat, but only next to themselves, so no
character ever sits between two equal ones.
```

### Example 3

```text
Input: s = "cdcdcc"
Output: 3
Explanation: "cdc" and "ccc" put a `c` at both ends; "dcd" puts a `d` at
both ends.
```

### Constraints

- `3 <= s.length <= 10⁵`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

A three-letter palindrome is fixed once its outer letter and its middle
letter are chosen, so at most 26 × 26 candidate strings exist at all.

### Hint 2

For the palindrome x-y-x to appear, `x` needs two occurrences with room
between them. Its first and last occurrence are the pair to inspect.

### Hint 3

Every letter found strictly between the first and last occurrence of `x`
serves as a middle — and only the *set* of such letters matters, since each
palindrome counts once.

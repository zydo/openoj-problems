# Smallest Palindromic Rearrangement Beating The Target

## Description

You are given two strings `s` and `target`, both of length n and built from
lowercase English letters.

A palindromic rearrangement of `s` is an arrangement of its characters that
reads identically forwards and backwards. Among all palindromic
rearrangements of `s` whose string value is strictly greater than `target`,
return the lexicographically smallest. Exactly one such string deserves the
answer whenever any qualify; if no palindromic rearrangement of `s` sorts
strictly after `target`, return the empty string `""`.

A string a is strictly greater than an equal-length string b when, at their
first differing position, a carries a letter later in the alphabet than b
does. Equal-length strings that never differ are equal, and being equal does
not count as strictly greater.

### Example 1

```text
Input: s = "abab", target = "aabb"
Output: "abba"
Explanation: Rearranging s into palindromes yields exactly "abba" and
"baab". The first of those already sorts strictly after "aabb", so it is
the answer.
```

### Example 2

```text
Input: s = "cbbc", target = "baab"
Output: "bccb"
Explanation: The palindromic rearrangements of s are "bccb" and "cbbc",
and "bccb" is the smallest one that sorts strictly after "baab".
```

### Example 3

```text
Input: s = "xyz", target = "aaa"
Output: ""
Explanation: No arrangement of s reads the same in both directions, so no
palindromic rearrangement exists at all and the answer is "".
```

### Example 4

```text
Input: s = "aab", target = "aaa"
Output: "aba"
Explanation: The only palindromic rearrangement of s is "aba". It sorts
strictly after "aaa", so the answer is "aba".
```

### Constraints

- `1 <= n == s.length == target.length <= 300`
- `s` and `target` consist of lowercase English letters.

## Hints

### Hint 1

A palindromic rearrangement can exist only when the letter counts fit the
length's parity: all counts even, or — for an odd length — exactly one odd
count to absorb into the middle.

### Hint 2

Only the first half needs constructing. With the middle pinned by the odd
count (when present), mirroring the half always completes the palindrome.

### Hint 3

Comparing two full palindromes is decided by their (half, middle,
mirrored half) triple, so beating target reduces to making the half beat —
or in one pinned case, tie past — target's own first half.

### Hint 4

Greedy construction settles the half: keep matching target's first-half
letters with the smallest available counts, and remember the last position
where a still-unused strictly larger letter could replace one.

### Hint 5

When the half is fixed, assemble the palindrome, then confirm the whole
string sorts strictly after target — a tie inside the half must be broken
by the mirrored tail or the middle letter.

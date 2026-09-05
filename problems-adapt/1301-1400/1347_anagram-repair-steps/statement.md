# Anagram Repair Steps

## Description

Two strings `s` and `t` are handed in with the same length. In one move,
any single character of `t` may be swapped out for any other character.
Return the fewest moves that turn `t` into an anagram of `s` — a string
made of exactly the same characters as `s`, possibly rearranged.

### Example 1

```text
Input: s = "listen", t = "silent"
Output: 0
Explanation: The two strings already hold identical characters, so `t`
is an anagram of `s` as it stands.
```

### Example 2

```text
Input: s = "flower", t = "flight"
Output: 4
Explanation: Only `f` and `l` are shared. Replacing `i`, `g`, `h`, and
`t` with `o`, `w`, `e`, and `r` makes `t` an anagram of `s`.
```

### Example 3

```text
Input: s = "abcd", t = "aabd"
Output: 1
Explanation: One extra `a` sits in `t` where a `c` belongs; a single
replacement evens out the counts.
```

### Constraints

- `1 <= s.length <= 5 * 10⁴`
- `s.length == t.length`
- Both strings consist only of lowercase English letters.

## Hints

### Hint 1

Order never matters for an anagram — only how many copies of each letter
each string carries.

### Hint 2

Walk the alphabet once: wherever `t` holds fewer copies of a letter than
`s` does, every missing copy is one unavoidable replacement.

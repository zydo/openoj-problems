# Longest Palindrome-Forming Piece

## Description

You are given a string `s` made up entirely of digits.

Call a piece of `s` — any non-empty run of consecutive characters —
_palindrome-forming_ when its characters can be shuffled into an order
that reads the same forwards and backwards. The reshuffling is
unrestricted: any number of swaps of any two positions is allowed, as
long as they stay inside the piece.

Return the length of the longest palindrome-forming piece of `s`.

### Example 1

```text
Input: s = "707089"
Output: 5
Explanation: The piece "70708" is the longest one; its characters can be
reordered into the palindrome "07870".
```

### Example 2

```text
Input: s = "5551234"
Output: 3
Explanation: The piece "555" is already a palindrome, and no four
consecutive characters can be laid out as one.
```

### Example 3

```text
Input: s = "99001122"
Output: 8
Explanation: Every digit appears an even number of times, so the whole
string can be rearranged into a palindrome such as "90122109".
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of digits.

## Hints

### Hint 1

A collection of characters can be laid out as a palindrome exactly when
at most one of them occurs an odd number of times — that character, if
it exists, takes the middle seat and everything else pairs around it.

### Hint 2

Only parities matter, not the counts themselves. Keep a 10-bit mask in
which bit `d` is flipped once per occurrence of digit `d` (`mask ^=
1 << digit`); a piece is palindrome-forming exactly when the masks of
its two bounding prefixes differ in at most one bit.

### Hint 3

Store the first index at which each mask appears in a hash map, and for
every position try both the identical mask and the ten single-bit
variants. The expected running time is `O(n * A)` with `A = 10` digits.

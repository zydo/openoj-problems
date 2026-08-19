# Fewest Adjacent Swaps to a Palindrome

## Description

You are given a string `s` of lowercase English letters.

One move swaps two adjacent characters of `s`.

Return the fewest moves needed to turn `s` into a palindrome.

The input is guaranteed to be rearrangeable into a palindrome at all — that
is, at most one letter occurs an odd number of times.

### Example 1

```text
Input: s = "caacr"
Output: 2
Explanation: Swap the fourth and fifth characters, then the third and
fourth: "caacr" -> "caarc" -> "carac". Two moves suffice, and one move can
only move a single character one position — no single swap fixes both
mismatched pairs, so two is minimal.
```

### Example 2

```text
Input: s = "ababc"
Output: 3
Explanation: Walk the second `a` rightward to the end ("ababc" -> "abbac"
-> "abbca"), then swap the inner `b` and `c` to reach "abcba". The only
palindromes these letters form are "abcba" and "bacab"; in either one the
`c` sits in the middle, two positions from where it starts, and an `a`
must move besides — so fewer than three swaps cannot succeed.
```

### Example 3

```text
Input: s = "cbaab"
Output: 2
Explanation: The leading `c` has no partner, so it is the middle letter of
the final palindrome: nudge it inward twice as the others close around it —
"cbaab" -> "bcaab" -> "bacab".
```

### Constraints

- `1 <= s.length <= 2000`
- `s` contains only lowercase English letters.
- `s` can be turned into a palindrome by some sequence of moves.

## Hints

### Hint 1

The outermost pair is the cheapest place to start. How many adjacent swaps
does it cost to give the first character a matching partner at the very end?

### Hint 2

Settle the outer pair, shrink the window by one on each side, and repeat on
the inner substring. Why does resolving a pair never make what remains more
expensive?

### Hint 3

When the first character has no partner anywhere in the window, it must be
the odd letter destined for the exact center — swap it one step inward and
try again.

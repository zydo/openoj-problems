# Fewest Palindromic Picks

## Description

A string built solely from the letters `'a'` and `'b'` is to be
erased one pick at a time. Each pick removes any single palindromic
subsequence of the current string — the characters taken need not sit
next to each other, only the order in which they are read must run the
same in both directions.

Return the fewest picks that empties the string completely.

### Example 1

```text
Input: s = "aabbaa"
Output: 1
Explanation: The string already reads identically both ways, so a
single pick takes all of it.
```

### Example 2

```text
Input: s = "bbba"
Output: 2
Explanation: Pick "bbb" first, leaving "a", which the second pick
removes.
```

### Example 3

```text
Input: s = "abab"
Output: 2
Explanation: All the a's together form one palindromic pick, and the
b's left behind form the other.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists only of the letters `'a'` and `'b'`.

## Hints

### Hint 1

Only two distinct letters ever appear, and that alone caps how large
the answer can get.

### Hint 2

Every occurrence of one letter, gathered as a group, reads as a
palindrome by itself. What two-step plan does that immediately suggest,
and when can one step do instead?

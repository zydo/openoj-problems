# The Longest Substring One Deletion From a Palindrome

## Description

A lowercase string `s` is given. Call a substring of `s` fixable if
removing exactly one character from it turns what remains into a
palindrome — a string that reads the same forwards and backwards. The
removed character may sit anywhere in the substring, and the substring
itself must still be non-empty afterwards.

Return the length of the longest fixable substring of `s`.

### Example 1

```text
Input: s = "bcabc"
Output: 4
Explanation: Take the substring "bcab" and drop its 'c'. What survives
is "bab", which reads the same both ways, so "bcab" is fixable and no
longer fixable substring exists.
```

### Example 2

```text
Input: s = "xyzzyq"
Output: 5
Explanation: Take the substring "xyzzy" and drop its leading 'x'. The
remainder "yzzy" is a palindrome, so the answer is 5.
```

### Example 3

```text
Input: s = "kayakk"
Output: 6
Explanation: Drop the final 'k' from the whole string; "kayak" is a
palindrome, so all 6 characters count.
```

### Constraints

- `2 <= s.length <= 2500`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

Fix a center and grow the window outwards from it; treat odd-length and
even-length windows separately.

### Hint 2

At the first pair of unequal ends, you get two chances: pretend the
left character was removed, or pretend the right one was.

### Hint 3

Take whichever of the two rescues stretches further and keep the best
length seen over all centers.

### Hint 4

An interval view also works: a window is fixable when dropping one end
of it leaves a palindrome, or when its ends match and its interior is
itself fixable.

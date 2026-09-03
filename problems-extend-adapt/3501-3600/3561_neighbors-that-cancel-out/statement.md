# Neighbors That Cancel Out

## Description

A string `s` holds lowercase English letters, and the alphabet is treated
as circular — `a` and `z` count as next to each other.

While `s` still contains two side-by-side characters, keep applying this
operation:

- Find the leftmost pair of adjacent characters that sit next to each
  other in the alphabet (in either orientation, so `a` then `b` or `b`
  then `a` both qualify) and delete both.
- Close the gap by shifting everything after the pair one position left.

Return the string that remains once no removable pair is left.

### Example 1

```text
Input: s = "monk"
Output: "mk"
Explanation: The leftmost removable pair is "on" — the letters o and n
sit next to each other. Deleting it leaves "mk", and m and k are two
letters apart, so nothing more can go.
```

### Example 2

```text
Input: s = "cza"
Output: "c"
Explanation: The pair "za" is removable because the alphabet wraps — z is
next to a. Removing it leaves the lone "c", which can never cancel.
```

### Example 3

```text
Input: s = "zayb"
Output: "yb"
Explanation: Removing "za" first leaves "yb"; y and b are far apart in
the alphabet, so "yb" is the final string.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Walk the string once with a stack: the fully reduced prefix always sits
below the top, so an incoming letter can only ever cancel against it —
and that pair is exactly the leftmost one the rule would pick.

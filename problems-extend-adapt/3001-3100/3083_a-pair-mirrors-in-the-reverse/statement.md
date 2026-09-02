# A Pair Mirrors In The Reverse

## Description

Given a string `s`, decide whether some length-2 substring of `s` also occurs
in `s` written backwards.

Return `true` when such a pair of adjacent letters exists, and `false`
otherwise.

### Example 1

```text
Input: s = "google"
Output: true
Explanation: The adjacent pair "oo" is a substring of s and also of reverse(s) == "elgoog".
```

### Example 2

```text
Input: s = "potato"
Output: true
Explanation: The pair "ta" occurs in s, and reading s backwards as "otatop" turns it into "at", which occurs there.
```

### Example 3

```text
Input: s = "abc"
Output: false
Explanation: The reverse "cba" offers the pairs "cb" and "ba", and neither occurs in "abc".
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists only of lowercase English letters

## Hints

### Hint 1

Reading `s` backwards turns every adjacent pair `xy` into `yx`, so a shared
pair exists exactly when some `xy` and its flip `yx` both occur in `s` — a
doubled letter `xx` counts immediately.

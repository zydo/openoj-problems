# Balanced Vowel Halves

## Description

You are given a string `s` whose length is even. Cut it in the middle: the
opening half is `a` and the closing half is `b`.

Call the two halves balanced when they contain the same number of vowels.
Vowels are the ten letters `a`, `e`, `i`, `o`, `u` in either case; every
other letter — and case itself — is irrelevant to the count. The string
mixes uppercase and lowercase letters.

Return `true` when `a` and `b` are balanced, and `false` otherwise.

### Example 1

```text
Input: s = "mister"
Output: true
Explanation: a = "mis" holds one vowel (i) and b = "ter" holds one vowel
(e). The halves are balanced.
```

### Example 2

```text
Input: s = "keyboard"
Output: false
Explanation: a = "key" holds one vowel (e) while b = "board" holds two
(o and a). The halves are not balanced.
```

### Example 3

```text
Input: s = "AbCdEfGh"
Output: true
Explanation: a = "AbCd" holds one vowel (A) and b = "EfGh" holds one
vowel (E). Case does not matter, so the halves are balanced.
```

### Constraints

- `2 <= s.length <= 1000`
- `s.length` is even.
- `s` consists of lowercase and uppercase English letters.

## Hints

### Hint 1

Halfway through the string, flip the sign of your counting: add for every
vowel before the midpoint, subtract for every vowel after it.

### Hint 2

The halves are balanced exactly when that running count finishes at zero,
so no second pass or stored totals are needed.

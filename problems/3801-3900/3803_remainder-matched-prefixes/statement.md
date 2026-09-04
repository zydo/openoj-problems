# Remainder-Matched Prefixes

## Description

You are given a string `s` of lowercase English letters.

Call a prefix of `s` matched when the number of distinct characters it
contains equals its length modulo 3. A prefix is any non-empty leading
portion of `s`, from one character up to the whole string.

Return how many prefixes of `s` are matched.

### Example 1

```text
Input: s = "onion"
Output: 2
Explanation: "o" holds 1 distinct character and 1 % 3 is 1 — matched.
"on" holds 2 distinct characters and 2 % 3 is 2 — matched. "oni" holds
3 distinct characters but 3 % 3 is 0, and later prefixes keep missing:
"onio" has 3 distinct against 1, "onion" has 3 against 2. The answer
is 2.
```

### Example 2

```text
Input: s = "ee"
Output: 1
Explanation: "e" pairs 1 distinct character with length 1 % 3 = 1, so it
matches. "ee" still holds only 1 distinct character while its length
modulo 3 is 2, so it does not. The answer is 1.
```

### Example 3

```text
Input: s = "kebab"
Output: 2
Explanation: "k" (1 distinct, length 1) and "ke" (2 distinct, length 2)
both match. "keb" has 3 distinct characters but length 3 % 3 = 0; "keba"
and "kebab" hold 4 distinct against 1 and 2. The answer is 2.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Walk the string once, carrying the set of characters seen so far — its
size after step i is the distinct count of the prefix of length i, and
the check is one comparison against i % 3.

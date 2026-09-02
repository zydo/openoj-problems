# Two Encodings, One Original

## Description

Take a string made of lowercase English letters and compress it like this:

- Cut it into a sequence of non-empty pieces.
- Keep the pieces you like, but swap any subset of them (possibly none)
  for their length written out in digits.
- Glue everything together, in order, into one string.

For instance, starting from `"javadeveloper"`, you could cut it as
`["java", "developer"]`, replace the second piece with its length, and
concatenate to obtain `"java9"`.

You are given two strings `s1` and `s2`, each built only from lowercase
letters and the digits `1`-`9`. Decide whether some single original string
could have been compressed into `s1` by the process above and, perhaps by
a different cutting and replacing choice, into `s2` as well. Return
`true` when such a shared original exists and `false` otherwise.

Note: in the given strings, no run of consecutive digits is longer than 3.

### Example 1

```text
Input: s1 = "hello5", s2 = "helloworld"
Output: true
Explanation: The original "helloworld" works for both. Cut as
["hello", "world"] and replace the second piece with its length to get
"hello5"; leave the single piece unreplaced to get "helloworld".
```

### Example 2

```text
Input: s1 = "12ab", s2 = "3ab"
Output: true
Explanation: The original "xyzab" works for both. Cut as ["xyz", "ab"]
and replace "xyz" with its length to get "3ab". Cut as ["x", "yz", "ab"]
and replace "x" with "1" and "yz" with "2" to get "12ab".
```

### Example 3

```text
Input: s1 = "3z", s2 = "4z"
Output: false
Explanation: s1 describes 3 letters followed by z, while s2 describes 4
letters followed by z. No original can have both lengths.
```

### Constraints

- `1 <= s1.length, s2.length <= 40`
- `s1` and `s2` contain only the digits `1`-`9` and lowercase English
  letters.
- No run of consecutive digits in either string exceeds 3.

## Hints

### Hint 1

Read each encoded string as an alternating sequence of letter chunks and
digit chunks; the question becomes whether the two sequences can describe
the same string.

### Hint 2

A digit chunk of up to three digits can be carved into numbers in several
ways — "124" may stand for 1+2+4 letters, 12+4, 1+24, or all 124 at
once — and each reading contributes that many wildcard letters.

### Hint 3

Track how many wildcard letters one side still owes the other; literals
on the owing side pay off the debt one letter at a time.

### Hint 4

Memoize the state (position in s1, position in s2, outstanding balance);
the search succeeds exactly when both strings are consumed with balance
zero.

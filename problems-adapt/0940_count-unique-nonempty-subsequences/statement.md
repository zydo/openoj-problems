# Count Unique Nonempty Subsequences

## Description

Given a lowercase string `s`, count the different non-empty strings obtainable
by deleting zero or more characters while preserving the order of those that
remain.

Return the count modulo `10^9 + 7`.

### Example 1

```text
Input: s = "abca"
Output: 14
Explanation: There are 14 different non-empty results; repeated choices of
the letter a do not create extra copies of the same string.
```

### Example 2

```text
Input: s = "bcbc"
Output: 11
```

### Example 3

```text
Input: s = "kkkk"
Output: 4
Explanation: The possible strings are "k", "kk", "kkk", and "kkkk".
```

### Constraints

- `1 <= s.length <= 2000`
- Every character of `s` is a lowercase English letter.

## Hints

### Hint 1

When a character is appended to the processed prefix, every existing result
can either omit it or include it.

### Hint 2

If that character appeared earlier, some of the newly formed strings already
exist. The duplicate group corresponds to the results available immediately
before its previous occurrence.

### Hint 3

Include the empty string while building the recurrence, perform each update
modulo `10^9 + 7`, and remove the empty string from the final count.

# Run-Length Compaction

## Description

Compress an array of characters `chars` by collapsing each run of identical
characters into the character itself followed by the run's length, written
with decimal digits. A run of length 1 keeps only its character.

The compressed form is written back into the front of `chars`, and the
function returns the new usable length; entries beyond that length may be
ignored. Only constant extra space may be used.

### Example 1

```text
Input: chars = ["a","a","a","b","a"]
Output: 4
Explanation: The runs `aaa`, `b`, and `a` become `a3`, `b`, and `a`, so the
front of the array reads `["a","3","b","a"]`.
```

### Example 2

```text
Input: chars = ["c"]
Output: 1
Explanation: A single character is its own compressed form.
```

### Example 3

```text
Input: chars = ["b","b","b","b","b","b","b","b","b","b","b","b"]
Output: 3
Explanation: Twelve `b` characters compress to `"b12"`, needing two digit
slots for the count.
```

### Constraints

- `chars` has between `1` and `2000` characters.
- Each entry is a lowercase or uppercase English letter, a digit, or a
  symbol.

## Hints

### Hint 1

How do you recognize where one run of equal characters ends and the next
begins?

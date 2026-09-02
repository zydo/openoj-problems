# Fewest Insertions to Repeat abc

## Description

You are given a string `word` built only from the letters "a", "b" and
"c". In one move you may insert any one of those three letters at any
position of `word`, and you may keep inserting for as long as you like.
A string counts as finished when it is exactly the block "abc" glued to
itself some positive number of times.

Return the fewest letters that have to be inserted into `word` to make
it finished.

### Example 1

```text
Input: word = "ac"
Output: 1
Explanation: Placing "b" between the two letters gives "abc", which is
the block "abc" repeated once.
```

### Example 2

```text
Input: word = "bcb"
Output: 3
Explanation: Insert "a" at the front, then another "a" before the final
"b", and finally "c" at the end to obtain "abcabc".
```

### Example 3

```text
Input: word = "cccc"
Output: 8
Explanation: Each "c" belongs in the third slot of its own block, so
four blocks are required: the finished string is "abcabcabcabc", and
eight letters were inserted.
```

### Constraints

- `1 <= word.length <= 50`
- `word` contains only the letters "a", "b" and "c".

## Hints

### Hint 1

Walk through `word` with one finger and through the endless line
"abcabc..." with another; a letter that agrees with the current pattern
slot stays where it is.

### Hint 2

When the two fingers disagree, one insertion is unavoidable at that
spot — pay one and advance only the pattern finger. Whatever pattern
slots remain after the last kept letter costs insertions the same way.

# Spacing Out a String

## Description

A string `s` arrived with every space stripped out, and a strictly
increasing list `spaces` records where the gaps belong: for each value
`v` in `spaces`, a single space goes immediately before the character
currently sitting at index `v` of `s`. Indices refer to the original
string, so inserting one space never shifts where the next one lands.

As a worked illustration, spacing `s = "OpenTheDoor"` at indices `4` and
`7` puts a space before the `'T'` and before the `'D'`, producing
`"Open The Door"`.

Return the restored string with all requested spaces in place.

### Example 1

```text
Input: s = "OpenTheDoor", spaces = [4,7]
Output: "Open The Door"
Explanation: A space is placed before the character at index 4 and
another before the character at index 7, splitting the text into three
words.
```

### Example 2

```text
Input: s = "abracadabra", spaces = [2,5,9]
Output: "ab rac adab ra"
Explanation: Spaces land before the characters at indices 2, 5, and 9 of
the original string, yielding four fragments.
```

### Example 3

```text
Input: s = "repeat", spaces = [0]
Output: " repeat"
Explanation: Index 0 is legal, so the restored string may begin with a
space placed before the very first character.
```

### Constraints

- `1 <= s.length <= 3 * 10⁵`
- `s` consists only of lowercase and uppercase English letters.
- `1 <= spaces.length <= 3 * 10⁵`
- `0 <= spaces[i] <= s.length - 1`
- The values in `spaces` are strictly increasing.

## Hints

### Hint 1

Build the answer in an appendable buffer while walking `s` once, emitting
a space just before any character that the list calls for.

### Hint 2

Keep a pointer into `spaces`; because its values increase strictly, one
advance per emitted space suffices and no character ever gets two.

### Hint 3

Appending to a resizable buffer keeps each step constant time — repeated
whole-string concatenation does not.

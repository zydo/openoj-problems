# Peeling Pairs Off A String

## Description

You are given a string `s` containing only uppercase English letters.

One operation deletes any single occurrence of the substring "AB" or the
substring "CD" from `s`. The pieces on either side join back together,
which can bring fresh occurrences into being, and you may continue
operating for as long as some occurrence remains.

Return the length of the shortest string that can be reached this way.

### Example 1

```text
Input: s = "DACABCDGB"
Output: 5
Explanation: Delete "AB" to get "DACCDGB", then delete "CD" to get
"DACGB". Nothing further can be removed, and no sequence of operations
ends up shorter than 5.
```

### Example 2

```text
Input: s = "XYZQ"
Output: 4
Explanation: Neither "AB" nor "CD" occurs anywhere, so the string never
changes.
```

### Example 3

```text
Input: s = "ABCD"
Output: 0
Explanation: Removing "AB" first leaves "CD", and removing that empties
the string completely.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists only of uppercase English letters.

## Hints

### Hint 1

Plain simulation is enough to get started.

### Hint 2

Sweep the string repeatedly, cutting out every "AB" or "CD" you meet,
until a whole sweep finds nothing left to cut.

### Hint 3

A stack settles it in one pass — consider what each incoming character
can do to the one before it.

# Run-Length Cursor

## Description

A run-length compressed string pairs each letter with the positive integer
count of how many times it repeats in the original string. Build a cursor
that walks the decompressed characters one at a time without ever
materializing the full string.

Implement the `RunLengthCursor` class:

- `RunLengthCursor(String compressedString)` initializes the cursor over
  `compressedString`.
- `String nextChar()` returns the next decompressed character as a
  single-character string, or `" "` (a space) once nothing remains.
- `boolean hasMore()` reports whether any decompressed character is still
  left.

### Example 1

```text
Input:
["RunLengthCursor", "nextChar", "nextChar", "hasMore", "nextChar", "nextChar", "hasMore", "nextChar"]
[["a2b1c3"], [], [], [], [], [], [], []]
Output: [null, "a", "a", true, "b", "c", true, "c"]
Explanation: "a2b1c3" decompresses to "aabccc"; each nextChar call peels
off the next character in that order.
```

### Constraints

- `1 <= compressedString.length <= 1000`
- `compressedString` consists of lowercase and uppercase English letters and
  digits.
- Each character's repeat count is in `[1, 10⁹]`.
- At most `100` calls are made to `nextChar` and `hasMore`.

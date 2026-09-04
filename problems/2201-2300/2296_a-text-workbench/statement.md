# A Text Workbench

## Description

A minimal editor holds one line of text with a cursor sitting somewhere
inside it — before the first character, after the last, or between two
characters. The cursor can never leave the text: both of its bounds,
`0` and `text.length`, are hard limits.

Implement the `TextBench` class:

- `TextBench()` initializes the workbench with empty text.
- `void addText(String text)` inserts `text` at the cursor position; the
  cursor ends up just after the inserted text.
- `int deleteText(int k)` deletes up to `k` characters immediately to
  the left of the cursor (like holding backspace) and returns how many
  characters were actually removed.
- `String cursorLeft(int k)` moves the cursor `k` positions left,
  stopping at the start of the text. Returns the last
  `min(10, len)` characters before the cursor, where `len` is the number
  of characters before it.
- `String cursorRight(int k)` moves the cursor `k` positions right,
  stopping at the end of the text. Returns the last
  `min(10, len)` characters before the cursor, where `len` is the number
  of characters before it.

### Example 1

```text
Input:
["TextBench", "addText", "addText", "cursorLeft", "deleteText", "addText", "cursorRight", "cursorLeft", "deleteText", "cursorRight", "deleteText", "addText", "cursorLeft"]
[[], ["merge"], ["sorted"], [4], [3], ["ly"], [9], [6], [2], [2], [50], ["odd"], [1]]
Output: [null, null, null, "mergeso", 3, null, "merglyrted", "merg", 2, "mely", 4, null, "od"]
Explanation:
TextBench bench = new TextBench(); // the text is "|" ('|' marks the cursor).
bench.addText("merge");   // text is "merge|".
bench.addText("sorted");  // text is "mergesorted|".
bench.cursorLeft(4);      // cursor moves to "mergeso|rted"; the last
                          // 7 characters before it are "mergeso".
bench.deleteText(3);      // return 3; text is "merg|rted".
bench.addText("ly");      // text is "mergly|rted".
bench.cursorRight(9);     // cursor stops at the end: "merglyrted|";
                          // the last 10 characters before it are
                          // "merglyrted".
bench.cursorLeft(6);      // cursor moves to "merg|lyrted"; return "merg".
bench.deleteText(2);      // return 2; text is "me|lyrted".
bench.cursorRight(2);     // cursor moves to "mely|rted"; return "mely".
bench.deleteText(50);     // return 4; only the 4 characters "mely"
                          // existed left of the cursor, text is "|rted".
bench.addText("odd");     // text is "odd|rted".
bench.cursorLeft(1);      // cursor moves to "od|drted"; return "od".
```

### Constraints

- `1 <= text.length, k <= 40`
- `text` consists of lowercase English letters.
- At most `2 * 10⁴` calls in total are made to `addText`, `deleteText`,
  `cursorLeft`, and `cursorRight`.

### Follow-up

Can you make every call run in `O(k)` time?

## Hints

### Hint 1

Editing the middle of a single array is the awkward case; structures
that only change at their ends are much friendlier.

### Hint 2

Split the document at the cursor into two halves — everything left of
it and everything from it onward. Then every operation touches only the
end of one half.

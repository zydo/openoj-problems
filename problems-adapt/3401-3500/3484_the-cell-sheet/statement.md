# The Cell Sheet

## Description

A cell sheet is a grid with 26 columns (labeled `'A'` to `'Z'`) and a
given number of rows. Every cell holds an integer between `0` and
`10⁵`.

Implement the `CellSheet` class:

- `CellSheet(int rows)` initializes the sheet with 26 columns and the
  given number of rows, every cell starting at `0`.
- `void setCell(String cell, int value)` stores `value` in the named
  cell. A cell reference looks like `"AX"` (for example `"A1"`,
  `"B10"`): the letter is the column and the number is the 1-indexed
  row.
- `void resetCell(String cell)` stores `0` in the named cell.
- `int getValue(String formula)` evaluates a formula of the form
  `"=X+Y"`, where `X` and `Y` are each either a cell reference or a
  non-negative integer, and returns the sum.

Note: a formula may mention a cell that was never explicitly set; such
a cell reads as `0`.

### Example 1

```text
Input:
["CellSheet", "getValue", "setCell", "getValue", "setCell", "getValue", "resetCell", "getValue"]
[[4], ["=12+9"], ["C3", 100], ["=C3+8"], ["D4", 45], ["=C3+D4"], ["C3"], ["=C3+D4"]]
Output: [null, 21, null, 108, null, 145, null, 45]
Explanation:
CellSheet sheet = new CellSheet(4); // 4 rows, 26 columns, all zeros.
sheet.getValue("=12+9");  // 21 — both operands are literals.
sheet.setCell("C3", 100); // C3 holds 100.
sheet.getValue("=C3+8");  // 108 — cell plus literal.
sheet.setCell("D4", 45);  // D4 holds 45.
sheet.getValue("=C3+D4"); // 145 — cell plus cell.
sheet.resetCell("C3");    // C3 goes back to 0.
sheet.getValue("=C3+D4"); // 45 — C3 reads as 0 again.
```

### Example 2

```text
Input:
["CellSheet", "setCell", "getValue", "resetCell", "getValue"]
[[2], ["Z26", 7], ["=Z26+0"], ["Z26"], ["=Z26+9"]]
Output: [null, null, 7, null, 9]
Explanation:
CellSheet sheet = new CellSheet(2);
sheet.setCell("Z26", 7);  // Z26 holds 7.
sheet.getValue("=Z26+0"); // 7.
sheet.resetCell("Z26");   // Z26 goes back to 0.
sheet.getValue("=Z26+9"); // 9 — Z26 contributes 0.
```

### Constraints

- `1 <= rows <= 10³`
- `0 <= value <= 10⁵`
- Every formula has the form `"=X+Y"`, where `X` and `Y` are each
  either a valid cell reference or a non-negative integer of at most
  `10⁵`.
- A cell reference is one capital letter `'A'`–`'Z'` followed by a row
  number between `1` and `rows`.
- At most `10⁴` calls in total are made to `setCell`, `resetCell`, and
  `getValue`.

## Hints

### Hint 1

A map from cell reference to stored value represents the whole sheet;
cells absent from the map read as `0`.

### Hint 2

To evaluate a formula, strip the leading `=`, split on `+`, and treat
each operand as a cell lookup if it starts with a capital letter, or as
an integer literal otherwise.

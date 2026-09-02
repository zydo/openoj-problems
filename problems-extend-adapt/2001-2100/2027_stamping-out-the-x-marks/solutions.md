# Solutions — Stamping Out the X Marks

## Cover the earliest remaining X

Scan from left to right. When the current character is `'O'`, it needs no work
and the scan advances once. When it is `'X'`, some stamp must cover this earliest
remaining `'X'`; choosing that stamp immediately also covers the next two
positions, so count one stamp and advance three positions.

No later choice can cover more useful positions to the right while still
covering the same earliest `'X'`. Repeating this forced best placement therefore
uses the minimum possible number of stamps without modifying the string.

**Complexity:** `O(n)` time and `O(1)` space.

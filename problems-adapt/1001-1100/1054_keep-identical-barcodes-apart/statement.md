# Keep Identical Barcodes Apart

## Description

A conveyor carries a row of `barcodes`, where `barcodes[i]` is the code
printed at position `i`. Codes repeat, and two identical codes printed
side by side scan as one, so the row must be shuffled: rearrange the
values so that no two neighboring positions ever hold the same code.
An answer is guaranteed to exist, and you may return any arrangement —
with one caveat below.

Because many arrangements are valid, this judge compares the returned
array exactly, so your answer must come from one deterministic
procedure. Count how many times each distinct value appears in
`barcodes`. Take the distinct values from the highest frequency to the
lowest, breaking frequency ties by ascending numeric value. Write the
values into the output following the fixed slot order consisting of
every even index in increasing order (`0, 2, 4, ...`) followed by every
odd index in increasing order (`1, 3, 5, ...`), giving each value as
many consecutive slots in that order as its count.

### Example 1

```text
Input: barcodes = [7,7,2]
Output: [7,2,7]
Explanation: Value 7 occurs twice and takes slots 0 and 2; value 2
takes slot 1. The two 7s no longer touch.
```

### Example 2

```text
Input: barcodes = [2,2,1,3,3]
Output: [2,3,2,1,3]
Explanation: Values 2 and 3 tie at frequency 2, so 2 is processed
first, filling slots 0 and 2; value 3 fills slots 4 and 1, and value 1
fills slot 3.
```

### Example 3

```text
Input: barcodes = [5,5,5,5,9,9,1]
Output: [5,9,5,9,5,1,5]
Explanation: Value 5 has the highest frequency (4) and claims the even
slots 0, 2, 4, 6 first; value 9 then fills slots 1 and 3, and value 1
fills slot 5.
```

### Constraints

- `1 <= barcodes.length <= 10000`
- `1 <= barcodes[i] <= 10000`

## Hints

### Hint 1

The most frequent value is the dangerous one — seat it first, spaced
onto alternating slots, and every scarcer value then fits into the
gaps without ever colliding with itself.

# Distant Barcodes

## Description

In a warehouse, there is a row of barcodes, where the ith barcode is
`barcodes[i]`.

Rearrange the barcodes so that no two adjacent barcodes are equal. It is
guaranteed an answer exists.

Many valid rearrangements exist for most inputs, but this judge compares
the returned array exactly, so the rearrangement must come from one
deterministic procedure. Count the number of occurrences of each
distinct barcode value, then process the distinct values from highest
occurrence count to lowest; among values tied on occurrence count,
process them in ascending numeric order. Fill the output array's
positions in the fixed order 0, 2, 4, ... (all even indices, low to
high) followed by 1, 3, 5, ... (all odd indices, low to high), placing
each value's occurrences into the next available positions in that
order before moving on to the next value.

### Example 1

```text
Input: barcodes = [1,1,1,2,2,2]
Output: [1,2,1,2,1,2]
```

### Example 2

```text
Input: barcodes = [1,1,1,1,2,2,3,3]
Output: [1,2,1,2,1,3,1,3]
```

### Constraints

- `1 <= barcodes.length <= 10000`
- `1 <= barcodes[i] <= 10000`

## Hints

### Hint 1

We want to always choose the most common or second most common element
to write next. What data structure allows us to query this effectively?

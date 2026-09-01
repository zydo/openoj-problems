# Spelling a Target Across Word Columns

## Description

You are given a list `words` of equally long strings, and a string
`target`. Line the words up as a table: `words[j]` is row `j`, and
column `k` holds the `k`th character of every word.

Spell `target` from left to right, one character per step, under these
rules:

- To write `target[i]`, pick a column `k` and a row `j` such that
  `words[j][k] == target[i]`.
- Using column `k` consumes it for good: column `k` and every column to
  its left become off-limits in all rows for the rest of the spelling.
  The columns used across the whole construction therefore increase
  strictly from one step to the next.
- Consecutive steps may draw from different rows, and a single row may
  supply several characters, provided the column rule above is kept.

Two spellings count as different if some step uses a different column,
a different row, or both. Return the number of distinct ways to spell
`target`, modulo `10⁹ + 7`.

### Example 1

```text
Input: words = ["bab","acb"], target = "ab"
Output: 4
Explanation: The four spellings, each written as the (column, row)
picks for 'a' then 'b':
column 0, row 1 ("acb"), then column 2, row 0 ("bab")
column 0, row 1 ("acb"), then column 2, row 1 ("acb")
column 1, row 1 ("acb"), then column 2, row 0 ("bab")
column 1, row 1 ("acb"), then column 2, row 1 ("acb")
```

### Example 2

```text
Input: words = ["aba","aba"], target = "aa"
Output: 4
Explanation: The first 'a' must use column 0, which both rows supply,
and the second 'a' must use column 2, which both rows also supply —
2 row choices times 2 row choices gives 4 spellings.
```

### Example 3

```text
Input: words = ["cd"], target = "dc"
Output: 0
Explanation: The only 'd' sits in column 1, and no column to its right
holds a 'c', so the strictly increasing column order can never be met.
```

### Constraints

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 1000`
- All strings in `words` have the same length.
- `1 <= target.length <= 1000`
- `words[i]` and `target` contain only lowercase English letters.

## Hints

### Hint 1

For every column, count how many rows carry each letter there — a
26-way letter census per column. A census entry is exactly the number
of row choices for placing that letter at that column.

### Hint 2

Dynamic programming over two indices — how many characters of `target`
are already placed, and how many columns have been passed — settles the
count, since each column is either spent on the next needed character
or skipped for good.

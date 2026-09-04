# Whole-Word Tallies In Documents

## Description

Table: `Documents`

| Column Name | Type    |
| ----------- | ------- |
| doc_name    | varchar |
| body        | text    |

`doc_name` is the column with unique values of this table. Each row is one
document: its name and the text it holds.

Count how many documents contain the word `bull` and how many contain the
word `bear`, but only as a standalone word. An occurrence stands alone
when a space sits immediately on both sides of it. Anything welded on —
`bullfrog`, `bears`, `bull.` — does not count, and neither does a word
flush against the very start or end of the body with no space there: only
the space-separated words of the body are eligible. Matching is
case-sensitive, so `Bull` is a different string and does not count.

Return two rows: one carrying `'bull'` with the number of documents that
contain it standalone, one carrying `'bear'` with its own. A document
contributes 1 to a word's tally no matter how many times the word occurs
inside it, and both rows are always returned, even when a word appears in
no document. The rows may come back in any order.

Every test case ships its own `dataset`: the statements inside it populate
`Documents` before your query executes. The result format is in the
following examples.

### Example 1

```text
Input:
Documents table:
+------------+------------------------------+
| doc_name   | body                         |
+------------+------------------------------+
| notes1.txt | bull and bear both visited   |
| notes2.txt | the bullfrog sat still       |
| notes3.txt | bear; then bull appeared     |
+------------+------------------------------+
Output:
+------+-------+
| word | count |
+------+-------+
| bull | 2     |
| bear | 1     |
+------+-------+
Explanation:
- `bull` stands alone in notes1.txt and in notes3.txt, so 2 documents;
  `bullfrog` in notes2.txt has letters welded to it and does not count.
- `bear` stands alone in notes1.txt only. In notes3.txt it is written
  `bear;` — a semicolon where the trailing space must be — so it does
  not count.
```

### Example 2

```text
Input:
Documents table:
+------------+------------------------------+
| doc_name   | body                         |
+------------+------------------------------+
| log1.txt   | bull bull and more bull      |
| log2.txt   | a bear, a bull, a bear again |
| log3.txt   | quiet day                    |
+------------+------------------------------+
Output:
+------+-------+
| word | count |
+------+-------+
| bull | 1     |
| bear | 1     |
+------+-------+
Explanation:
- log1.txt says `bull` three times, but a document adds 1 to the tally,
  not one per occurrence, so `bull` counts 1.
- In log2.txt only the last `bear` has a space on both sides; `bear,`
  and `bull,` carry a comma and are skipped.
- log3.txt contains neither word.
```

Write your solution as a single `SELECT` query returning two columns —
`word` and `count` — one row carrying `'bull'` and its number of
documents, one carrying `'bear'` and its own, in any order.

## Hints

### Hint 1

An occurrence lives or dies by its immediate neighbors: pad the value
into `' ' || body || ' '` and even the first and last word gain a
neighbor on each side, so the whole question becomes whether the fixed
substring `' bull '` (or `' bear '`) appears anywhere inside the padded
text.

### Hint 2

Use GLOB rather than LIKE: GLOB is case-sensitive, so `'* bear *'`
passes `a bear market` (only the neighbors around `bear` matter) yet
rejects `Bear`, `bears`, and `(bear)`, exactly as the statement demands —
LIKE would fold case and wrongly pass `Bear`.

### Hint 3

`COUNT(*)` tallies qualifying rows, and one row is one document, so
repeated occurrences inside a document still contribute 1; computing each
word's tally unconditionally keeps a zero-count word as a row with 0,
`UNION ALL` stacks the two results, and the judge compares rows as an
unordered multiset so no `ORDER BY` is needed.

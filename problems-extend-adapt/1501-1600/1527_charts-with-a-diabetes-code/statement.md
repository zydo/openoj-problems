# Charts With a Diabetes Code

## Description

Table: `Charts`

| Column    | Type    |
| --------- | ------- |
| chart_id  | int     |
| patient   | varchar |
| diagnoses | varchar |

`chart_id` is the primary key (column with unique values) for this
table. Each row is one patient's chart: the patient's name and the
patient's recorded condition codes, packed into a single string of 0 or
more codes separated by single spaces.

Report the `chart_id`, `patient`, and `diagnoses` of every patient who
has Type I Diabetes. Type I Diabetes always carries a code that starts
with the `DIAB1` prefix.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds the `Charts`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: the Charts table from the dataset below.
chart_id | patient | diagnoses
1        | Noor    | MIGRAINE IBS
2        | Owen    | DIAB100
3        | Petra   | ACNE DIAB150 RHINITIS
4        | Quill   | DIAB200 FLU
5        | Rhea    | PREDIAB1
6        | Sami    |
Output:
chart_id | patient | diagnoses
2        | Owen    | DIAB100
3        | Petra   | ACNE DIAB150 RHINITIS
Explanation: Owen's list opens with DIAB100 and Petra carries DIAB150 mid-list — both codes start with DIAB1. Quill's DIAB200 begins with DIAB2, Rhea's DIAB1 sits mid-word inside PREDIAB1 rather than starting a code of its own, and Noor and Sami have no matching code at all.
```

### Example 2

```text
Input: the Charts table from the dataset below.
chart_id | patient | diagnoses
7        | Tala    | DIAB1
8        | Ugo     | FLU XDIAB199
9        | Vic     | COLD DIAB1
10       | Wren    | DIAB11 SEASONAL
Output:
chart_id | patient | diagnoses
7        | Tala    | DIAB1
9        | Vic     | COLD DIAB1
10       | Wren    | DIAB11 SEASONAL
Explanation: Tala's and Vic's lists contain the bare code DIAB1, and Wren's DIAB11 starts with the prefix. Ugo's XDIAB199 merely contains DIAB1 inside another code, which does not count.
```

Write your solution as a single `SELECT` query returning the
`chart_id`, `patient`, and `diagnoses` of every chart that carries a
Type I Diabetes code. Rows may be returned in any order.

## Hints

### Hint 1

`diagnoses` is a single space-separated string, not a list — a naive
`diagnoses LIKE '%DIAB1%'` would also match a code like `XDIAB199`
where `DIAB1` sits inside some other word, which does not count.

### Hint 2

A qualifying code either opens the string (`diagnoses LIKE 'DIAB1%'`)
or is preceded by the space that ends the previous code
(`diagnoses LIKE '% DIAB1%'`). Combine the two with `OR` to cover a
code in any position.

### Hint 3

The rule is a prefix, not an exact match — `DIAB100`, `DIAB11`, and
`DIAB1` itself all qualify, but `DIAB200` does not, since it starts
with `DIAB2`.

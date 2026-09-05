# Capitalize Each Word

## Description

Table: `notes`

| Column Name | Type    |
| ----------- | ------- |
| note_id     | int     |
| note_text   | varchar |

`note_id` is the unique key for this table.
Each row holds one saved note: its id and the text written into it.

Write a query that re-cases the text of every note in title style:

- the opening letter of each word becomes uppercase
- every other letter of the word becomes lowercase
- every space stays exactly where it is, however many there are

`note_text` never contains special characters — only English letters
and spaces.

Return the result table carrying each note's id, its text as it was
stored, and the text after the transformation.

Every testcase ships its own `dataset`: the setup script fills the
`notes` table with that testcase's rows before your query runs. Treat a
word as any maximal run of English letters; a word's first character is
uppercased and the remainder lowercased, while spaces pass through
untouched — consecutive runs included — so a transformed text always has
exactly the length of its original. Submit a single `SELECT` query that
returns three columns — `note_id`, the stored text as `original_text`,
and the transformed text as `converted_text` — one row per note, in any
order.

The result format is shown in the examples below.

### Example 1

```text
Input:
notes table:
+---------+------------------------------------+
| note_id | note_text                          |
+---------+------------------------------------+
| 1       | rivers cut through quiet valleys   |
| 2       | MOONLIGHT settles over still WATER |
| 3       | seven  spaced    words here        |
+---------+------------------------------------+
Output:
+---------+------------------------------------+------------------------------------+
| note_id | original_text                      | converted_text                     |
+---------+------------------------------------+------------------------------------+
| 1       | rivers cut through quiet valleys   | Rivers Cut Through Quiet Valleys   |
| 2       | MOONLIGHT settles over still WATER | Moonlight Settles Over Still Water |
| 3       | seven  spaced    words here        | Seven  Spaced    Words Here        |
+---------+------------------------------------+------------------------------------+
Explanation: note 1 is already lowercase, so each word merely gains its
capital: "Rivers Cut Through Quiet Valleys". Note 2 arrives shouting —
"MOONLIGHT settles over still WATER" — and settles into title case with
only each word's first letter capitalized. Note 3 keeps its irregular
spacing verbatim: the double and quadruple gaps between words survive
intact in "Seven  Spaced    Words Here".
```

### Example 2

```text
Input:
notes table:
+---------+-------------------------+
| note_id | note_text               |
+---------+-------------------------+
| 10      |   leading and trailing  |
| 11      | A B C small caps END    |
| 12      | alphabet                |
+---------+-------------------------+
Output:
+---------+-------------------------+-------------------------+
| note_id | original_text           | converted_text          |
+---------+-------------------------+-------------------------+
| 10      |   leading and trailing  |   Leading And Trailing  |
| 11      | A B C small caps END    | A B C Small Caps End    |
| 12      | alphabet                | Alphabet                |
+---------+-------------------------+-------------------------+
Explanation: spaces at either end are positions, not separators to
trim, so note 10 keeps both. In note 11 the standalone letters A, B and
C are their own words and stay capitalized, while "END" is calmed down
to "End". Note 12 is a single lowercase word, and its lone opening
letter is all there is to capitalize.
```

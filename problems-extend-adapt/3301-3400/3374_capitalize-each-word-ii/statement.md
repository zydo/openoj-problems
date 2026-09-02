# Capitalize Each Word II

## Description

Table: `notes`

| Column Name | Type    |
| ----------- | ------- |
| note_id     | int     |
| note_text   | varchar |

`note_id` is the unique key for this table.
Each row holds one saved note: its id and the text written into it.

Write a query that re-cases the text of every note in title style,
with special treatment for the punctuation the notes may contain:

- the opening letter of each word becomes uppercase and the rest of the
  word becomes lowercase
- a hyphen joins two words rather than ending one, so both sides of a
  hyphenated pair get their own capital — `top-rated` turns into
  `Top-Rated`
- every other character is copied through unchanged, in the same
  position and count

Return the result table carrying each note's id, its text as it was
stored, and the text after the transformation.

Every testcase ships its own `dataset`: the setup script fills the
`notes` table with that testcase's rows before your query runs. The
clean way to see the rule is that one capitalization unit is any maximal
run of English letters: a unit's first letter is uppercased and its
remaining letters lowercased. A hyphen simply splits one printed word
into two units, and each of the other allowed characters — space, `@`,
`/`, `^`, comma, backslash — is inert: it passes through verbatim and
the units on either side of it are capitalized independently. Submit a
single `SELECT` query returning three columns — `note_id`, the stored
text as `original_text`, and the transformed text as `converted_text` —
one row per note, in any order.

The result format is shown in the examples below.

### Example 1

```text
Input:
notes table:
+---------+----------------------------------+
| note_id | note_text                        |
+---------+----------------------------------+
| 1       | sun-KISSED meadows bloom early   |
| 2       | a well-known STATE of mind       |
| 3       | e-mail and co-workers HIGH-speed |
+---------+----------------------------------+
Output:
+---------+----------------------------------+----------------------------------+
| note_id | original_text                    | converted_text                   |
+---------+----------------------------------+----------------------------------+
| 1       | sun-KISSED meadows bloom early   | Sun-Kissed Meadows Bloom Early   |
| 2       | a well-known STATE of mind       | A Well-Known State Of Mind       |
| 3       | e-mail and co-workers HIGH-speed | E-Mail And Co-Workers High-Speed |
+---------+----------------------------------+----------------------------------+
Explanation: each hyphenated compound takes a capital on both sides of
the dash — "Sun-Kissed", "Well-Known", "E-Mail", "Co-Workers",
"High-Speed" — while the plain words behave exactly as in the first
problem of this pair: "STATE" calms down to "State" and every other
word keeps just its opening capital.
```

### Example 2

```text
Input:
notes table:
+---------+-------------------------------------+
| note_id | note_text                           |
+---------+-------------------------------------+
| 10      | mail ann@work or visit site/docs^ok |
| 11      |   padded  multi-part TEXT           |
| 12      | back\slash, comma, caret^here       |
+---------+-------------------------------------+
Output:
+---------+-------------------------------------+-------------------------------------+
| note_id | original_text                       | converted_text                      |
+---------+-------------------------------------+-------------------------------------+
| 10      | mail ann@work or visit site/docs^ok | Mail Ann@Work Or Visit Site/Docs^Ok |
| 11      |   padded  multi-part TEXT           |   Padded  Multi-Part Text           |
| 12      | back\slash, comma, caret^here       | Back\Slash, Comma, Caret^Here       |
+---------+-------------------------------------+-------------------------------------+
Explanation: the inert characters never merge or move. In note 10 the
`@` splits `ann@work` into two units ("Ann@Work") and the slashes do
the same for `site/docs`. Note 11 keeps its double space and both edge
spaces while "TEXT" settles to "Text". In note 12 the backslash,
comma, and caret all pass through untouched, and each letter run beside
them is capitalized on its own.
```

### Constraints

- `note_text` uses only English letters, spaces, and the characters
  `@`, `-`, `/`, `^`, `,`, `\`.

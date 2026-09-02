# Tag Each Post With Its Topics

## Description

Table: `TagTerms`

| Column Name | Type    |
| ----------- | ------- |
| tag_id      | int     |
| term        | varchar |

`(tag_id, term)` is the primary key (combination of columns with unique
values) for this table. Each row pairs a topic's id with one word that can
express it. A topic may have several words, and the same word may serve
several topics.

Table: `Notes`

| Column Name | Type    |
| ----------- | ------- |
| note_id     | int     |
| body        | varchar |

`note_id` is the primary key (column with unique values) for this table.
Each row holds one collected post's id and its text, which contains only
English letters and spaces.

A post carries a topic whenever one of that topic's terms occurs in its
text, and the match ignores letter case but must respect whole words —
`warning` does not contain the term `war`.

Tag every post by these rules:

- If none of the terms of any topic occur in the post, tag it with the
  string `"Ambiguous!"`.
- Otherwise tag it with a string listing the ids of the topics it carries,
  sorted ascending and separated by commas `','`, with no id repeated.

Return the result table in any order.

The result format is in the following example.

### Example 1

```text
Input:
TagTerms table:
+--------+--------+
| tag_id | term   |
+--------+--------+
| 4      | island |
| 4      | reef   |
| 2      | STORM  |
| 7      | harbor |
+--------+--------+
Notes table:
+---------+--------------------------------------------------+
| note_id | body                                             |
+---------+--------------------------------------------------+
| 1       | The ferry docked at the harbor before sunrise    |
| 2       | Reefs and islands draw divers from everywhere    |
| 3       | A storm grounded every ferry near the harbor     |
| 4       | harboring doubts about the whole itinerary       |
+---------+--------------------------------------------------+
Output:
+---------+------------+
| note_id | tag_list   |
+---------+------------+
| 1       | 7          |
| 2       | Ambiguous! |
| 3       | 2,7        |
| 4       | Ambiguous! |
+---------+------------+
Explanation:
Post 1 contains "harbor", a term of topic 7.
Post 2 only contains the plurals "Reefs" and "islands", neither of
which is a whole-word match for a term, so its tag is ambiguous.
Post 3 contains "storm" (topic 2, matched case-insensitively against
the stored "STORM") and "harbor" (topic 7), so it carries both topics.
Post 4 contains "harboring", which merely shares a prefix with
"harbor" and does not match, so its tag is ambiguous too.
```

### Example 2

```text
Input:
TagTerms table:
+--------+------+
| tag_id | term |
+--------+------+
| 1      | echo |
+--------+------+
Notes table:
+---------+------------------------+
| note_id | body                   |
+---------+------------------------+
| 5       | An echo returned twice |
| 6       | silence                |
+---------+------------------------+
Output:
+---------+------------+
| note_id | tag_list   |
+---------+------------+
| 5       | 1          |
| 6       | Ambiguous! |
+---------+------------+
```

Note that one word may express more than one topic; such a topic still
appears only once in the tag.

Write your solution as a single `SELECT` query returning columns `note_id`
and `tag_list`.

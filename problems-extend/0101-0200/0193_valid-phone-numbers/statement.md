# Valid Phone Numbers

## Description

Table: `Person`

| Column Name  | Type    |
| ------------ | ------- |
| id           | int     |
| phone_number | varchar |

`id` is the primary key (column with unique values) for this table. Each row
of this table holds one line of the input file: `phone_number` is the line's
content.

Write a query to print all valid phone numbers.

You may assume that a valid phone number must appear in one of the following
two formats: `(xxx) xxx-xxxx` or `xxx-xxx-xxxx` (`x` means a digit).

You may also assume each row in the table must not contain leading or
trailing white spaces.

Each testcase's `dataset` seeds the `Person` table with the lines of its
input file. The result format is in the following example.

### Example 1

```text
Input: Person table from the dataset below.
phone_number
987-123-4567
123 456 7890
(123) 456-7890
Output:
phone_number
987-123-4567
(123) 456-7890
Explanation: 123 456 7890 appears in neither of the two formats, so it is
not printed.
```

Write your solution as a single `SELECT` query returning one row with one
column, `phone_number`, for each valid phone number. Rows may be returned in
any order; if a valid phone number occurs more than once, return one row per
occurrence.

## Hints

### Hint 1

GLOB matches the whole value against the pattern, and `[0-9]` stands for exactly one digit — so `'[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'` spells xxx-xxx-xxxx digit group by digit group.

### Hint 2

The parenthesized format is a second pattern — `(`, `)` and the space are literal characters in GLOB. Combine the two patterns with OR.

### Hint 3

Because the pattern must consume the entire value, no anchoring is needed: a doubled dash, a stray trailing character, or a leading space all fail the match.

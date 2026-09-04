# Phone Numbers In Proper Form

## Description

Table: `Directory`

| Column Name | Type    |
| ----------- | ------- |
| entryId     | int     |
| phone       | varchar |

`entryId` is the primary key (column with unique values) for this
table. Each row is one listing in a phone directory: `phone` holds the
number exactly as it was written down.

A listing is well-formed only when its number follows one of these two
shapes:

- `(xxx) xxx-xxxx`
- `xxx-xxx-xxxx`

where every `x` stands for a single digit — the hyphens, the
parentheses, and the space appear exactly where shown, and nothing else
may surround the number.

Report the `phone` value of every well-formed listing. Rows may come
back in any order, and a number that appears on several listings is
reported once per listing.

Each testcase's `dataset` seeds the `Directory` table with that
testcase's rows; no listing carries leading or trailing white space.
The result format is in the following example.

### Example 1

```text
Input: Directory table from the dataset below.
Output:
phone
(312) 555-0110
312-555-0111
444-555-0114
Explanation: listings 1, 2, and 5 follow one of the two shapes exactly.
Listing 3 separates its groups with spaces instead of hyphens, and
listing 4 drops the space after the area-code parentheses, so neither
qualifies.
```

Write your solution as a single `SELECT` query returning one row with
one column, `phone`, for every well-formed listing.

## Hints

### Hint 1

`GLOB` matches the whole value against the pattern, and `[0-9]` stands
for exactly one digit — so
`'[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'` spells
`xxx-xxx-xxxx` digit group by digit group.

### Hint 2

The parenthesized shape is a second pattern — `(`, `)`, and the space
are literal characters to `GLOB` — and one `OR` combines the two.

### Hint 3

Because a pattern must consume the entire value, nothing needs
anchoring: a doubled hyphen, a stray trailing character, or a leading
space all fail the match on their own.

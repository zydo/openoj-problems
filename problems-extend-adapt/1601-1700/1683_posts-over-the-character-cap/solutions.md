# Solutions — Posts Over the Character Cap

One predicate per row decides everything: a post is over the cap exactly
when its `body` is strictly longer than 15 characters, so filtering the
table on that character count and projecting `post_id` is the whole
answer.

## Filter on the body length

`LENGTH(body)` counts the characters in `body`, and the comparison
`> 15` keeps only the rows whose count is strictly greater than 15 — a
body of exactly 15 characters stays within the cap, 16 is already over
it, and every character in the allowed alphabet (letters, digits,
`'!'`, and spaces) counts toward the total. The `WHERE` clause applies
the predicate to each row of `Posts` independently, and the projection
returns just `post_id`, so the result carries one row per over-cap
post. Example 1 sits right on the line: post 2 counts exactly 15 and is
left out, while post 1 counts 16 and is kept.

The statement allows the result in any order, so the query needs no
`ORDER BY` — the judge compares result multisets, and row order cannot
fail a case.

**Complexity:** `O(n)` time, `O(n)` space.

# Well-Formed Registration E-mails

## Description

Table: `Registrants`

| Column        | Type    |
| ------------- | ------- |
| registrant_id | int     |
| name          | varchar |
| email         | varchar |

`registrant_id` is the primary key (column with unique values) for this
table. Each row records one signup on the site: the registrant's name
and e-mail address. Some of the addresses are malformed.

An address counts as well-formed when it splits into a prefix and a
domain:

- The prefix is a string that may contain letters (upper or lower
  case), digits, underscore `'_'`, period `'.'`, and/or dash `'-'`,
  and it must begin with a letter.
- The domain must be exactly `'@leetcode.com'`, all lowercase.

Report the `registrant_id`, `name`, and `email` of every registrant
whose address is well-formed.

Return the result table in any order.

Each testcase supplies its own `dataset`: the DDL seeds the
`Registrants` table with that testcase's rows. The result format is in
the following example.

### Example 1

```text
Input: the Registrants table from the dataset below.
registrant_id | name  | email
1             | Mira  | mira.hale@leetcode.com
2             | Oscar | oscar-wild.9@leetcode.com
3             | Tessa | tessa@leetcode.org
4             | Umar  | 9umar@leetcode.com
5             | Vera  | ve#ra@leetcode.com
6             | Wade  | wade@LEETCODE.com
7             | Xena  | .xena@leetcode.com
8             | Yusuf | yusuf@leetcode.com
Output:
registrant_id | name  | email
1             | Mira  | mira.hale@leetcode.com
2             | Oscar | oscar-wild.9@leetcode.com
8             | Yusuf | yusuf@leetcode.com
Explanation: Tessa's address ends in .org rather than the required domain, Umar's prefix starts with a digit, Vera's contains '#', Wade's domain is upper case, and Xena's begins with a period. Mira, Oscar, and Yusuf pass every rule.
```

### Example 2

```text
Input: the Registrants table from the dataset below.
registrant_id | name  | email
11            | Pia   | p@leetcode.com
12            | Quinn | qu.inn_9@leetcode.com
13            | Rosa  | rosa..@@leetcode.com
14            | Sami  | sami@leetcode.co
15            | Tove  | @leetcode.com
16            | Uno   | uno_@leetcode.com
Output:
registrant_id | name  | email
11            | Pia   | p@leetcode.com
12            | Quinn | qu.inn_9@leetcode.com
16            | Uno   | uno_@leetcode.com
Explanation: Rosa's prefix carries a second '@', Sami's domain is truncated, and Tove's prefix is empty. Pia, Quinn, and Uno are well-formed.
```

Write your solution as a single `SELECT` query returning the
`registrant_id`, `name`, and `email` of every registrant whose address
is well-formed. Rows may be returned in any order.

## Hints

### Hint 1

The domain test is a fixed, case-sensitive literal: `substr(email, -13)`
pulls the last 13 characters to compare against `'@leetcode.com'` with
`=`, so an upper-case host and any truncated or different domain both
fail.

### Hint 2

`GLOB` understands character classes. Anchor the prefix's first
character with `'[a-zA-Z]*'`, and use
`NOT GLOB '*[^a-zA-Z0-9_.-]*'` to require that no character anywhere in
the prefix falls outside letters, digits, `_`, `.`, and `-`.

### Hint 3

An address that is exactly the domain has an empty prefix, and an empty
string cannot match a pattern that demands one leading letter — no
separate length check is needed.

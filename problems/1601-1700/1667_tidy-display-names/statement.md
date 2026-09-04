# Tidy Display Names

## Description

Table: `Profiles`

| Column Name  | Type    |
| ------------ | ------- |
| profile_id   | int     |
| display_name | varchar |

`profile_id` is the primary key (column with unique values) for this
table. Each row holds one account's id and the display name shown for
it. A display name consists only of lowercase and uppercase letters,
mixed in any way.

Tidy every display name into one canonical form: an uppercase first
character followed by an all-lowercase remainder.

Return `profile_id` together with the tidied `display_name`, ordered
by `profile_id`.

Each testcase's `dataset` seeds the `Profiles` table: its script
inserts the testcase's `Profiles` rows before your query runs. The
result format is in the following example.

### Example 1

```text
Input:
Profiles table:
+------------+--------------+
| profile_id | display_name |
+------------+--------------+
| 3          | mChael       |
| 7          | aVA          |
| 12         | Z            |
| 15         | okay         |
| 20         | sIRIuS       |
+------------+--------------+
Output:
+------------+--------------+
| profile_id | display_name |
+------------+--------------+
| 3          | Mchael       |
| 7          | Ava          |
| 12         | Z            |
| 15         | Okay         |
| 20         | Sirius       |
+------------+--------------+
Explanation:
Every name is rebuilt the same way: its first character is uppercased
and everything after it is lowercased. mChael becomes Mchael (its
capital C is lowercased like the rest), aVA becomes Ava, and sIRIuS
becomes Sirius. okay only needs its first character raised to Okay,
and Z is already a single uppercase character, so it is returned
unchanged.
```

### Example 2

```text
Input:
Profiles table:
+------------+--------------+
| profile_id | display_name |
+------------+--------------+
| 9          | W            |
| 2          | eR           |
| 5          | q            |
+------------+--------------+
Output:
+------------+--------------+
| profile_id | display_name |
+------------+--------------+
| 2          | Er           |
| 5          | Q            |
| 9          | W            |
+------------+--------------+
Explanation:
The rows were inserted with their ids out of order, but the result
comes back ordered by `profile_id`. eR is tidied to Er by uppercasing
the first character, q to Q, and W is already a single uppercase
character, so it passes through unchanged.
```

Write your solution as a single `SELECT` query returning `profile_id`
and the tidied `display_name` — first character uppercased, the rest
lowercased — for every profile, ordered by `profile_id` ascending.

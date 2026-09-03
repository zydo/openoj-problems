# Serial Codes In The Catalog

## Description

Table: `catalog`

| Column Name | Type    |
| ----------- | ------- |
| item_id     | int     |
| item_name   | varchar |
| blurb       | varchar |

(`item_id`) is the unique key for this table.
Every row is one stocked item: an id, a display name, and a short blurb of
marketing text.

Somewhere in those blurbs the warehouse hides serial codes. A serial code
counts as well formed when all of these hold:

- It opens with the two letters SN, in exactly that case.
- Exactly four digits come next.
- A hyphen (-) separates them from exactly four further digits.
- The code may sit anywhere inside the blurb; it does not have to open the
  text.

Report every catalog item whose blurb contains at least one well-formed
serial code. Return the result table ordered by `item_id` in ascending
order.

Each testcase supplies its own `dataset`: the script seeds the `catalog`
table before your query runs. The result format is in the following
example.

### Example 1

```text
Input:

catalog table:

+---------+--------------+------------------------------------------+
| item_id | item_name    | blurb                                    |
+---------+--------------+------------------------------------------+
| 1       | Trail Cam    | Weatherproof model SN4021-8834 in stock  |
| 2       | Drone Kit    | Serial SN77-1234 does not fit the format |
| 3       | Power Bank   | SN9042-1187 sold out                     |
| 4       | Desk Lamp    | lowercase sn3344-9902 never matches      |
| 5       | Bike Bell    | Ring SN5150-6203 loudly                  |
| 6       | Card Reader  | SN88123-4057 is too long before the dash |
| 7       | Laptop Stand | Riser SN2450-7789                        |
| 8       | Speaker Dock | SN3049-55512 was mislabeled              |
+---------+--------------+------------------------------------------+

Output:

+---------+--------------+-----------------------------------------+
| item_id | item_name    | blurb                                   |
+---------+--------------+-----------------------------------------+
| 1       | Trail Cam    | Weatherproof model SN4021-8834 in stock |
| 3       | Power Bank   | SN9042-1187 sold out                    |
| 5       | Bike Bell    | Ring SN5150-6203 loudly                 |
| 7       | Laptop Stand | Riser SN2450-7789                       |
+---------+--------------+-----------------------------------------+

Explanation:

Item 1 carries the well-formed code SN4021-8834, and item 3's sits right at
the start of its blurb — both qualify. Item 5's code SN5150-6203 floats in
the middle of surrounding words. Item 7's code runs to the very end of the
text, which still counts. Item 2 only has two digits before the hyphen,
item 4 spells the prefix lowercase, item 6 crams five digits in before the
hyphen, and item 8 lets a fifth digit trail the second group — none of
those is well formed, so those items are left out.

The result table is ordered by item_id in ascending order.
```

Write your solution as a single `SELECT` query returning three columns —
`item_id`, `item_name`, and `blurb` — one row for every catalog item whose
blurb contains a well-formed serial code, ordered by `item_id` in ascending
order.

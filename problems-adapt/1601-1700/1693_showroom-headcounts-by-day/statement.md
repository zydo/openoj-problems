# Showroom Headcounts by Day

## Description

Table: `Showroom`

| Column Name | Type    |
| ----------- | ------- |
| day         | date    |
| model       | varchar |
| seller_id   | int     |
| buyer_id    | int     |

There is no primary key (column with unique values) for this table. It
may contain duplicates. This table logs the cars a showroom sold: the
day of the sale, the name of the model sold, and the ids of the seller
and the buyer involved. Model names use only lowercase English letters.

Report, for each (`day`, `model`) pair in the table, how many distinct
`seller_id`s and how many distinct `buyer_id`s appear on it.

Return the result table in any order.

Each testcase's `dataset` seeds the `Showroom` table: its script inserts
the testcase's `Showroom` rows before your query runs. The result format
is in the following examples.

### Example 1

```text
Input:
Showroom table:
+-----------+-------+-----------+----------+
| day       | model | seller_id | buyer_id |
+-----------+-------+-----------+----------+
| 2021-03-2 | atlas | 0         | 1        |
| 2021-03-2 | atlas | 1         | 0        |
| 2021-03-2 | atlas | 1         | 2        |
| 2021-03-1 | atlas | 0         | 2        |
| 2021-03-1 | atlas | 0         | 1        |
| 2021-03-2 | prime | 1         | 2        |
| 2021-03-2 | prime | 2         | 1        |
| 2021-03-1 | prime | 0         | 1        |
| 2021-03-1 | prime | 1         | 2        |
| 2021-03-1 | prime | 2         | 1        |
+-----------+-------+-----------+----------+
Output:
+-----------+-------+----------------+---------------+
| day       | model | unique_sellers | unique_buyers |
+-----------+-------+----------------+---------------+
| 2021-03-1 | atlas | 1              | 2             |
| 2021-03-1 | prime | 3              | 2             |
| 2021-03-2 | atlas | 2              | 3             |
| 2021-03-2 | prime | 2              | 2             |
+-----------+-------+----------------+---------------+
Explanation:
On 2021-03-2, atlas was sold by sellers = [0, 1] to buyers = [1, 0, 2],
while prime was sold by sellers = [1, 2] to buyers = [2, 1]. On
2021-03-1, atlas was sold by sellers = [0] to buyers = [2, 1], while
prime was sold by sellers = [0, 1, 2] to buyers = [1, 2].
```

### Example 2

```text
Input:
Showroom table:
+-----------+-------+-----------+----------+
| day       | model | seller_id | buyer_id |
+-----------+-------+-----------+----------+
| 2021-05-9 | quark | 4         | 7        |
| 2021-05-9 | quark | 4         | 7        |
| 2021-05-9 | quark | 5         | 7        |
| 2021-05-9 | zest  | 2         | 9        |
| 2021-05-9 | zest  | 2         | 8        |
| 2021-05-9 | zest  | 2         | 7        |
| 2021-05-8 | quark | 1         | 1        |
| 2021-05-8 | zest  | 6         | 0        |
+-----------+-------+-----------+----------+
Output:
+-----------+-------+----------------+---------------+
| day       | model | unique_sellers | unique_buyers |
+-----------+-------+----------------+---------------+
| 2021-05-8 | quark | 1              | 1             |
| 2021-05-8 | zest  | 1              | 1             |
| 2021-05-9 | quark | 2              | 1             |
| 2021-05-9 | zest  | 1              | 3             |
+-----------+-------+----------------+---------------+
Explanation:
The first two quark rows on 2021-05-9 are exact duplicates — both count
seller 4 selling to buyer 7 — so quark folds its three rows down to
sellers = [4, 5] and buyers = [7]. Zest's three rows that day all share
seller 2 but reach buyers = [9, 8, 7]. On 2021-05-8 each model saw a
single sale, quark's between seller 1 and that same buyer id.
```

Write your solution as a single `SELECT` query returning `day`, `model`,
`unique_sellers`, and `unique_buyers` for every (`day`, `model`) pair
present in `Showroom`, in any order.

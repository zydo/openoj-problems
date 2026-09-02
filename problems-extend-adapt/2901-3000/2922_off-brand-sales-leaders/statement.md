# Off-Brand Sales Leaders

## Description

Table: `Sellers`

| Column Name     | Type    |
| --------------- | ------- |
| seller_id       | int     |
| joined_on       | date    |
| preferred_brand | varchar |

`seller_id` is the unique key of this table. Each row records one
seller, the date they joined the marketplace, and the brand they
personally favor.

Table: `Listings`

| Column Name   | Type    |
| ------------- | ------- |
| listing_id    | int     |
| listing_brand | varchar |

`listing_id` is the unique key of this table. Each row is one listed
product and the brand that sells it.

Table: `Sales`

| Column Name | Type |
| ----------- | ---- |
| sale_id     | int  |
| sale_date   | date |
| listing_id  | int  |
| seller_id   | int  |

`sale_id` is the unique key of this table. `listing_id` references
`Listings`, and `seller_id` references `Sellers`. Each row is one
completed sale of a listing by a seller.

Report every seller who sold the largest number of distinct listings
whose brand differs from that seller's own preferred brand. Sellers
that tie for the largest count are all reported. A seller who only ever
sold listings of their preferred brand — or sold nothing at all — is
never reported.

Return columns `seller_id` and `distinct_listings`, ordered by
`seller_id` in ascending order.

Every testcase carries its own `dataset`: the DDL loads the `Sellers`,
`Listings`, and `Sales` tables with that testcase's rows. The example
below shows the result format.

### Example 1

```text
Input:
Sellers table:
+-----------+------------+-----------------+
| seller_id | joined_on  | preferred_brand |
+-----------+------------+-----------------+
| 1         | 2019-02-01 | Nimbus          |
| 2         | 2019-02-14 | Quartz          |
| 3         | 2019-03-02 | Harbor          |
+-----------+------------+-----------------+
Listings table:
+------------+---------------+
| listing_id | listing_brand |
+------------+---------------+
| 1          | Quartz        |
| 2          | Nimbus        |
| 3          | Harbor        |
| 4          | Juniper       |
+------------+---------------+
Sales table:
+---------+------------+------------+-----------+
| sale_id | sale_date  | listing_id | seller_id |
+---------+------------+------------+-----------+
| 1       | 2019-07-01 | 4          | 2         |
| 2       | 2019-07-02 | 4          | 2         |
| 3       | 2019-07-05 | 2          | 3         |
| 4       | 2019-07-09 | 1          | 2         |
+---------+------------+------------+-----------+
Output:
+-----------+-------------------+
| seller_id | distinct_listings |
+-----------+-------------------+
| 2         | 1                 |
| 3         | 1                 |
+-----------+-------------------+
Explanation:
- Seller 2 sold listing 4 twice, but repeated sales of one listing
count once, so their off-brand total is one distinct listing. Their
sale of listing 1 does not count at all, because listing 1's brand is
Quartz — seller 2's own preferred brand.
- Seller 3 made a single off-brand sale, listing 2.
Sellers 2 and 3 tie at one distinct off-brand listing, so both are
reported.
```

### Example 2

```text
Input:
Sellers table:
+-----------+------------+-----------------+
| seller_id | joined_on  | preferred_brand |
+-----------+------------+-----------------+
| 1         | 2019-01-05 | Copper          |
| 2         | 2019-01-09 | Slate           |
| 3         | 2019-01-20 | Linen           |
+-----------+------------+-----------------+
Listings table:
+------------+---------------+
| listing_id | listing_brand |
+------------+---------------+
| 1          | Copper        |
| 2          | Slate         |
| 3          | Willow        |
| 4          | Willow        |
| 5          | Copper        |
| 6          | Onyx          |
+------------+---------------+
Sales table:
+---------+------------+------------+-----------+
| sale_id | sale_date  | listing_id | seller_id |
+---------+------------+------------+-----------+
| 1       | 2019-06-03 | 3          | 1         |
| 2       | 2019-06-04 | 4          | 1         |
| 3       | 2019-06-08 | 5          | 2         |
| 4       | 2019-06-10 | 1          | 2         |
| 5       | 2019-06-11 | 2          | 3         |
| 6       | 2019-06-15 | 2          | 3         |
| 7       | 2019-06-18 | 6          | 1         |
+---------+------------+------------+-----------+
Output:
+-----------+-------------------+
| seller_id | distinct_listings |
+-----------+-------------------+
| 1         | 3                 |
+-----------+-------------------+
Explanation:
- Seller 1 sold three distinct off-brand listings: 3, 4, and 6.
- Seller 2 managed two distinct off-brand listings (5 and 1), and
seller 3 only one (listing 2, sold twice).
Seller 1 therefore leads on their own.
```

Write your answer as one `SELECT` query producing the two columns
`seller_id` and `distinct_listings`, one row per reported seller,
sorted by `seller_id` ascending.

# Counting .com Signups

## Description

Table: `Signups`

| Column Name | Type    |
| ----------- | ------- |
| signup_id   | int     |
| address     | varchar |

`signup_id` is the primary key (column with unique values) for this
table. Each row is one registered person: their id and the email
address they signed up with. The addresses never contain uppercase
letters.

A newsletter team wants a roster of the commercial domains its readers
arrive from.

For every distinct email domain that ends with `.com`, count how many
registered people carry an address at that domain.

Return the result table ordered by domain in ascending order.

Every testcase brings its own `dataset`: the DDL loads the `Signups`
table with that testcase's rows before your query runs. The result
format is shown in the examples below.

### Example 1

```text
Input:
Signups table:
+-----------+----------------------+
| signup_id | address              |
+-----------+----------------------+
| 7         | ria@plumeria.com     |
| 12        | omar@plumeria.com    |
| 3         | tess@grove.org       |
| 25        | nik@grove.org        |
| 31        | lev@mail.grove.org   |
| 44        | ada@pine.dev         |
| 58        | sam@cedar.com        |
+-----------+----------------------+
Output:
+--------------+-------+
| domain       | total |
+--------------+-------+
| cedar.com    | 1     |
| plumeria.com | 2     |
+--------------+-------+
Explanation:
- Only `cedar.com` and `plumeria.com` end with `.com`. The `.org` and
`.dev` domains are skipped, and `mail.grove.org` is a domain of its
own that does not end with `.com` either.
- `plumeria.com` is credited to two people, `cedar.com` to one.
Output table is ordered by domain in ascending order.
```

### Example 2

```text
Input:
Signups table:
+-----------+---------------------+
| signup_id | address             |
+-----------+---------------------+
| 101       | kim@nettle.com      |
| 102       | kim@nettle.com      |
| 103       | lee@nettle.com      |
| 104       | fay@shop.nettle.com |
| 105       | gus@nettlecom       |
| 106       | ivy@nettle.com      |
| 107       | joe@fern.org        |
+-----------+---------------------+
Output:
+-----------------+-------+
| domain          | total |
+-----------------+-------+
| nettle.com      | 4     |
| shop.nettle.com | 1     |
+-----------------+-------+
Explanation:
- Four people sit at `nettle.com` — two of them even share the exact
address kim@nettle.com, and each of them counts.
- `shop.nettle.com` is a different domain from `nettle.com` and gets
its own row.
- `nettlecom` fails the `.com` test because nothing sits before the
com but a letter, and `fern.org` is not a `.com` domain at all.
```

Write your solution as a single `SELECT` query returning two columns —
`domain`, the part of the address after the `@`, and `total`, how many
registered people carry an address at that domain — with one row for
every domain that ends with `.com`. The domain is read literally: an
address at `shop.nettle.com` belongs to the domain `shop.nettle.com`,
never merged with `nettle.com`. Matching is exact on the stored
strings, which the constraint above guarantees to be lowercase. Return
the result table ordered by `domain` in ascending order.

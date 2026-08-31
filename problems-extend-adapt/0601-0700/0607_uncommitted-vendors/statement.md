# Uncommitted Vendors

## Description

Table: `Representatives`

| Column Name | Type    |
| ----------- | ------- |
| rep_id      | int     |
| full_name   | varchar |
| base_pay    | int     |
| bonus_rate  | int     |
| started_on  | date    |

`rep_id` uniquely identifies a representative.

Table: `Clients`

| Column Name  | Type    |
| ------------ | ------- |
| client_id    | int     |
| client_name  | varchar |
| municipality | varchar |

`client_id` uniquely identifies a client.

Table: `Purchases`

| Column Name  | Type |
| ------------ | ---- |
| purchase_id  | int  |
| purchased_on | date |
| client_id    | int  |
| rep_id       | int  |
| total        | int  |

A purchase links one representative to one client.

Return `full_name` for every representative who has never made a purchase
for the client named `RED`. Result order does not matter.

### Example 1

```text
Input: Representatives, Clients, Purchases
Representatives: (11, Rhea), (12, Omar), (13, Tess), (14, Kai)
Clients: (20, RED), (21, AZURE)
Purchases: (1, 20, 11), (2, 21, 12)

Output:
full_name
Omar
Tess
Kai
```

Rhea made a purchase for RED and is excluded. Omar purchased only from
AZURE; Tess and Kai have no purchases, so all three are returned.

Write one `SELECT` query returning `full_name`.

### Constraints

- A representative is excluded after even one RED purchase.
- A representative with no purchases qualifies.

## Hints

### Hint 1

First find representative identifiers on purchases joined to the RED
client.

### Hint 2

Select from `Representatives` and exclude that identifier set, which retains
representatives with no purchases automatically.

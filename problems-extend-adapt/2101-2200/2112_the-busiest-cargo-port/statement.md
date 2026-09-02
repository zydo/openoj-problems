# The Busiest Cargo Port

## Description

Table: `CargoRoutes`

| Column Name      | Type |
| ---------------- | ---- |
| origin_port      | int  |
| destination_port | int  |
| voyage_count     | int  |

`(origin_port, destination_port)` is the primary key column (combination of
columns with unique values) for this table.
Each row of this table records `voyage_count` cargo voyages that sailed out
of `origin_port` and docked at `destination_port`.

A port's traffic is the total number of voyages touching it — those that
sailed out of it plus those that docked there. Rank the ports by traffic and
report the ID of every port sitting at the top; when several ports share the
largest traffic figure, list all of them.

Return the result table in any order.

Every test case ships its own `dataset`: the statements inside it populate
`CargoRoutes` before your query executes. The result format is in the
following examples.

### Example 1

```text
Input:
CargoRoutes table:
origin_port | destination_port | voyage_count
3           | 8                | 12
8           | 5                | 9
5           | 3                | 6
Output:
port_id
8
Explanation:
Port 3 handled 18 voyages (12 departures, 6 arrivals).
Port 8 handled 21 voyages (12 arrivals, 9 departures).
Port 5 handled 15 voyages (9 arrivals, 6 departures).
Port 8 has the heaviest traffic.
```

### Example 2

```text
Input:
CargoRoutes table:
origin_port | destination_port | voyage_count
2           | 4                | 5
4           | 6                | 5
6           | 8                | 5
8           | 2                | 5
7           | 9                | 3
Output:
port_id
2
4
6
8
Explanation:
Ports 2, 4, 6, and 8 form a loop in which each port logs 5 departures and 5
arrivals — 10 voyages apiece.
Ports 7 and 9 each touch only 3 voyages.
The busiest ports are therefore 2, 4, 6, and 8, and all four are reported.
```

Write your solution as a single `SELECT` query returning the column
`port_id`, one row for every port tied for the heaviest traffic.

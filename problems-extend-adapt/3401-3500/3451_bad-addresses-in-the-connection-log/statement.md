# Bad Addresses In The Connection Log

## Description

Table: `Probes`

| Column Name   | Type    |
| ------------- | ------- |
| probe_id      | int     |
| origin        | varchar |
| response_code | int     |

`probe_id` is the unique key for this table.
Each row records one connection an edge proxy handled: `origin` is the
dotted address the client claimed to come from, and `response_code` is
the status the proxy answered with.

Some clients report malformed addresses. A dotted address is malformed
when any of these holds:

- some component exceeds 255,
- some component carries a leading zero (as in `01.02.03.04` — a lone
  `0` on its own is fine),
- the address splits into anything other than four components.

For every distinct malformed address in the log, count how many probe
rows carry it. Return the result ordered by `bad_count` first and the
address second, both descending.

The result format is in the following example.

### Example 1

```text
Input:
Probes table:
+----------+-----------+---------------+
| probe_id | origin    | response_code |
+----------+-----------+---------------+
| 5        | 10.0.0.7  | 200           |
| 6        | 310.4.4.4 | 502           |
| 7        | 10.0.0.7  | 200           |
| 8        | 01.2.3.4  | 502           |
| 9        | 10.0.0    | 500           |
| 10       | 310.4.4.4 | 502           |
| 11       | 5.6.7.8.9 | 403           |
| 12       | 01.2.3.4  | 200           |
+----------+-----------+---------------+
Output:
+-----------+-----------+
| origin    | bad_count |
+-----------+-----------+
| 310.4.4.4 | 2         |
| 01.2.3.4  | 2         |
| 5.6.7.8.9 | 1         |
| 10.0.0    | 1         |
+-----------+-----------+
Explanation:
310.4.4.4 is malformed because its first component exceeds 255, and two
probe rows carry it.
01.2.3.4 is malformed because 01 carries a leading zero, and two rows
carry it.
5.6.7.8.9 splits into five components, and 10.0.0 splits into only
three — one row each.
The well-formed address 10.0.0.7 never appears in the output.

The output is ordered by bad_count, then by origin, both descending.
```

Write your solution as a single `SELECT` query returning each malformed
`origin` and its `bad_count` — the number of probe rows carrying that
address — ordered by `bad_count` descending, then `origin` descending.
Each testcase supplies its own `dataset`: the script seeds the `Probes`
table before your query runs.

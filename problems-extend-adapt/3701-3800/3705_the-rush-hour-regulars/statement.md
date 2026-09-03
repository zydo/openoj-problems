# The Rush-Hour Regulars

## Description

Table: `diner_tickets`

| Column Name | Type     |
| ----------- | -------- |
| ticket_id   | int      |
| guest_id    | int      |
| served_at   | datetime |
| bill_total  | decimal  |
| pay_channel | varchar  |
| star_score  | int      |

`ticket_id` uniquely identifies each row. Every row is one ticket from a
diner: `pay_channel` is `'cash'`, `'card'` or `'app'`, `served_at` carries
the calendar date together with the clock time, and `star_score` grades
the visit from 1 to 5 (5 being the top score), or is NULL when the guest
left no score.

A ticket is a _rush ticket_ when its clock time sits inside the midday
window from 11:00 inclusive to 14:00 exclusive, or inside the dinner
window from 18:00 inclusive to 21:00 exclusive — the date part plays no
role. A guest counts as a _rush-hour regular_ when every one of these
holds:

- The guest has at least 3 tickets.
- Rush tickets make up at least 60% of them, judged on the exact ratio.
- At least half of the tickets carry a star score, and the mean of those
  scores is at least 4.0.

No value is rounded before a guest qualifies. For every regular, report:

- `ticket_count`, how many tickets the guest has in total;
- `rush_share`, the exact rush fraction scaled to a percentage and
  rounded to two decimals;
- `avg_stars`, the mean score over scored tickets, rounded to two
  decimals.

Sort the result by `avg_stars` from highest to lowest, breaking ties by
`guest_id` from highest to lowest.

Each testcase supplies its own `dataset`: its statements fill the table
before your query runs. The result format is shown in the following
example.

### Example 1

```text
Input: the diner_tickets table from the dataset below.
ticket_id | guest_id | served_at           | bill_total | pay_channel | star_score
1         | 501      | 2025-05-02 12:30:00 | 21.40      | card        | 5
2         | 501      | 2025-05-03 18:15:00 | 17.85      | app         | 4
3         | 501      | 2025-05-04 09:00:00 | 12.60      | cash        | NULL
4         | 501      | 2025-05-05 20:45:00 | 33.20      | card        | 4
5         | 502      | 2025-05-02 12:00:00 | 14.75      | app         | 5
6         | 502      | 2025-05-03 15:00:00 | 26.10      | card        | 4
7         | 502      | 2025-05-04 19:00:00 | 19.95      | cash        | 5
8         | 503      | 2025-05-02 13:00:00 | 22.30      | cash        | 3
9         | 503      | 2025-05-03 18:40:00 | 15.15      | app         | 2
10        | 503      | 2025-05-04 11:20:00 | 28.90      | card        | 4
11        | 504      | 2025-05-02 12:10:00 | 18.25      | card        | 5
12        | 504      | 2025-05-03 16:45:00 | 23.80      | cash        | 4
13        | 504      | 2025-05-04 19:20:00 | 20.05      | app         | 5
14        | 504      | 2025-05-05 10:30:00 | 16.50      | card        | 4
15        | 505      | 2025-05-02 12:05:00 | 24.60      | app         | 5
16        | 505      | 2025-05-03 18:55:00 | 29.15      | cash        | 5
17        | 506      | 2025-05-02 13:30:00 | 31.70      | card        | 5
18        | 506      | 2025-05-03 19:05:00 | 13.45      | app         | NULL
19        | 506      | 2025-05-04 11:50:00 | 22.85      | cash        | NULL
20        | 507      | 2025-05-02 11:00:00 | 19.35      | card        | 4
21        | 507      | 2025-05-03 13:59:59 | 17.20      | app         | 4
22        | 507      | 2025-05-04 14:00:00 | 26.75      | cash        | NULL
23        | 507      | 2025-05-05 18:00:00 | 15.55      | app         | 5
24        | 507      | 2025-05-06 20:59:59 | 28.40      | cash        | NULL
25        | 507      | 2025-05-07 21:00:00 | 12.95      | card        | 5
Output:
guest_id | ticket_count | rush_share | avg_stars
502      | 3            | 66.67      | 4.67
507      | 6            | 66.67      | 4.33
501      | 4            | 75         | 4.33
Explanation: Guest 502 visited three times, twice inside a window
(12:00 and 19:00; 15:00 sits between them) for a 66.67% share, and their
three scores average (5+4+5)/3 = 4.67. Guest 507 bought six tickets, and
the four window hits include both edges of each span — 11:00:00 and
13:59:59 count, 14:00:00 does not, 20:59:59 counts, 21:00:00 does not —
so the share is 4/6 = 66.67%; exactly half their tickets are scored
(4+4+5)/3 = 4.33, which just meets both bars. Guest 501 also lands on a
4.33 average over their three scored tickets, and with the averages tied
the larger guest id is listed first. The rest fall short: 503 scored
only (3+2+4)/3 = 3.0, 504 managed just 50% rush tickets, 505 never
reached three visits, and 506 scored only one ticket in three.
```

Answer with one `SELECT` whose output columns are `guest_id`,
`ticket_count`, `rush_share` and `avg_stars`, in that order.

# Visits On Autopilot

## Description

Table: `telemetry`

| Column Name | Type     |
| ----------- | -------- |
| ping_id     | int      |
| device_id   | int      |
| logged_at   | datetime |
| event_kind  | varchar  |
| visit_id    | varchar  |
| metric      | int      |

`ping_id` is the unique ID for this table. Each row records one signal
an app fired during a visit, and all rows that share a `visit_id`
belong to the same visit from one device. `event_kind` is one of
`'app_open'`, `'click'`, `'scroll'`, `'purchase'` or `'app_close'`.
`metric` holds the purchase amount in dollars when the kind is
`'purchase'` and the pixels scrolled when it is `'scroll'`; every other
signal stores NULL. Every `logged_at` value falls exactly on a minute
boundary.

A visit runs **on autopilot** when its device looks busy but shows an
abnormal pattern: endless scrolling with almost no interaction and
nothing bought. A visit qualifies when it meets all of the following:

- Its span — the time from its earliest logged signal to its last — is
  more than 30 minutes.
- It contains at least 5 scroll signals.
- Its click-to-scroll ratio — the number of click signals divided by
  the number of scroll signals — is less than 0.20.
- No purchases were made during the visit.

For every qualifying visit, report:

- `visit_minutes`, its span expressed in whole minutes.
- `scroll_total`, its number of scroll signals.

Return the result table ordered by `scroll_total` in descending order,
then by `visit_id` in ascending order.

Each testcase supplies its own `dataset`: its statements fill the table
before your query runs. The result format is shown in the following
example.

### Example 1

```text
Input: the telemetry table from the dataset below.
ping_id | device_id | logged_at           | event_kind | visit_id | metric
1201    | 301       | 2025-06-07 10:00:00 | app_open   | V01      | NULL
1202    | 301       | 2025-06-07 10:04:00 | scroll     | V01      | 300
1203    | 301       | 2025-06-07 10:08:00 | scroll     | V01      | 450
1204    | 301       | 2025-06-07 10:12:00 | scroll     | V01      | 380
1205    | 301       | 2025-06-07 10:16:00 | scroll     | V01      | 520
1206    | 301       | 2025-06-07 10:20:00 | scroll     | V01      | 410
1207    | 301       | 2025-06-07 10:24:00 | scroll     | V01      | 490
1208    | 301       | 2025-06-07 10:28:00 | scroll     | V01      | 360
1209    | 301       | 2025-06-07 10:32:00 | app_close  | V01      | NULL
1210    | 302       | 2025-06-07 11:00:00 | app_open   | V02      | NULL
1211    | 302       | 2025-06-07 11:02:00 | scroll     | V02      | 200
1212    | 302       | 2025-06-07 11:04:00 | click      | V02      | NULL
1213    | 302       | 2025-06-07 11:06:00 | scroll     | V02      | 260
1214    | 302       | 2025-06-07 11:08:00 | click      | V02      | NULL
1215    | 302       | 2025-06-07 11:10:00 | scroll     | V02      | 310
1216    | 302       | 2025-06-07 11:12:00 | purchase   | V02      | 35
1217    | 302       | 2025-06-07 11:14:00 | app_close  | V02      | NULL
1218    | 303       | 2025-06-07 12:00:00 | app_open   | V03      | NULL
1219    | 303       | 2025-06-07 12:07:00 | scroll     | V03      | 700
1220    | 303       | 2025-06-07 12:14:00 | scroll     | V03      | 820
1221    | 303       | 2025-06-07 12:21:00 | click      | V03      | NULL
1222    | 303       | 2025-06-07 12:28:00 | scroll     | V03      | 640
1223    | 303       | 2025-06-07 12:35:00 | scroll     | V03      | 750
1224    | 303       | 2025-06-07 12:42:00 | scroll     | V03      | 690
1225    | 303       | 2025-06-07 12:50:00 | app_close  | V03      | NULL
1226    | 304       | 2025-06-07 13:00:00 | app_open   | V04      | NULL
1227    | 304       | 2025-06-07 13:06:00 | scroll     | V04      | 150
1228    | 304       | 2025-06-07 13:12:00 | scroll     | V04      | 180
1229    | 304       | 2025-06-07 13:18:00 | scroll     | V04      | 160
1230    | 304       | 2025-06-07 13:24:00 | scroll     | V04      | 190
1231    | 304       | 2025-06-07 13:30:00 | app_close  | V04      | NULL
Output:
visit_id | device_id | visit_minutes | scroll_total
V01      | 301       | 32            | 7
Explanation: Visit V01 runs from 10:00 to 10:32 — 32 minutes, over the
30-minute bar. It holds 7 scrolls and no clicks, so its click-to-scroll
ratio is 0/7 = 0.00, under 0.20, and it recorded no purchases. Every
criterion holds, so V01 is on autopilot. Visit V02 lasts only 11:00 to
11:14 — 14 minutes — and includes a purchase, so it misses two criteria
however its 3 scrolls look. Visit V03 also spans more than 30 minutes
(12:00 to 12:50) with 5 scrolls, but its 1 click puts the ratio at
exactly 1/5 = 0.20, which is not less than 0.20, so it falls short.
Visit V04 runs exactly 30 minutes — not more than 30 — and manages only
4 scrolls, missing both bars. Only V01 qualifies.
```

Answer with one `SELECT` whose output columns are `visit_id`,
`device_id`, `visit_minutes` and `scroll_total`, in that order.

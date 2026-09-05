# Impression-Free Streams

## Description

A video service keeps two tables: the viewing streams it served, and the
ad impressions it delivered around them.

Table: `Stream`

| Column Name | Type |
| ----------- | ---- |
| stream_id   | int  |
| viewer_id   | int  |
| start_at    | int  |
| end_at      | int  |

`stream_id` is the primary key (column with unique values) for this
table.

`viewer_id` is the viewer watching this stream.

The stream runs during the inclusive interval between `start_at` and
`end_at`. It is guaranteed that `start_at <= end_at` and that two
streams belonging to the same viewer never overlap.

Table: `Impressions`

| Column Name   | Type |
| ------------- | ---- |
| impression_id | int  |
| viewer_id     | int  |
| shown_at      | int  |

`impression_id` is the primary key (column with unique values) for this
table.

`viewer_id` is the viewer the impression was served to.

`shown_at` is the moment the impression went out.

An impression counts against a stream when it went to that stream's own
viewer while the stream was running — its `shown_at` falls inside the
stream's inclusive `[start_at, end_at]` window. Report every stream
that no impression counts against.

Each testcase's `dataset` seeds the `Stream` and `Impressions` tables
with that testcase's rows. Return the result table in any order. The
result format is in the following example.

### Example 1

```text
Input:
Stream table:
+-----------+-----------+----------+--------+
| stream_id | viewer_id | start_at | end_at |
+-----------+-----------+----------+--------+
| 11        | 4         | 10       | 60     |
| 12        | 4         | 90       | 120    |
| 13        | 6         | 15       | 45     |
| 14        | 6         | 70       | 110    |
| 15        | 9         | 80       | 130    |
+-----------+-----------+----------+--------+
Impressions table:
+---------------+-----------+----------+
| impression_id | viewer_id | shown_at |
+---------------+-----------+----------+
| 400           | 4         | 60       |
| 401           | 6         | 110      |
| 402           | 9         | 79       |
+---------------+-----------+----------+
Output:
+-----------+
| stream_id |
+-----------+
| 12        |
| 13        |
| 15        |
+-----------+
Explanation:
Impression 400 went to viewer 4 at time 60 — exactly the `end_at` of
stream 11, and window ends are inclusive, so stream 11 was
interrupted. Impression 401 went to viewer 6 at time 110, exactly the
`end_at` of stream 14, so stream 14 was interrupted too. Impression
402 went out at time 79, before viewer 9's stream 15 even begins at
80, so it counts against nothing. Streams 12, 13, and 15 saw no
impressions and are reported.
```

Write your solution as a single `SELECT` query returning `stream_id`.

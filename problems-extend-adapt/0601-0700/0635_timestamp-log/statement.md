# Timestamp Log

## Description

Each log entry carries a unique integer id and a timestamp string in
`Year:Month:Day:Hour:Minute:Second` form, every field zero-padded.

Implement the `TimestampLog` class:

- `TimestampLog()` creates an empty log.
- `void put(int id, String timestamp)` stores one entry.
- `int[] retrieve(String start, String end, String granularity)` returns,
  in storage order, the ids of every entry whose timestamp falls within
  `[start, end]` inclusive when compared only down to the given
  `granularity` (`"Year"`, `"Month"`, `"Day"`, `"Hour"`, `"Minute"`, or
  `"Second"`) — finer fields are ignored on both the entries and the bounds.

### Example 1

```text
Input:
["TimestampLog", "put", "put", "put", "retrieve", "retrieve"]
[[], [1,"2017:03:11:16:00:00"], [2,"2017:03:11:15:00:00"], [3,"2016:07:01:00:00:00"], ["2016:06:01:00:00:00","2017:03:11:23:00:00","Year"], ["2017:03:11:00:00:00","2017:03:11:23:00:00","Day"]]
Output: [null, null, null, null, [1,2,3], [1,2]]
Explanation: Comparing by Year keeps all three entries — 2016 and 2017 both
fall in range. Comparing by Day against a range that starts on 2017-03-11
excludes entry 3, whose day (2016-07-01) falls outside that narrower
window.
```

### Constraints

- `1 <= id <= 500`
- `2000 <= Year <= 2017`, valid month/day/hour/minute/second fields.
- `granularity` is one of the six named levels.
- At most `500` calls are made to `put` and `retrieve`.

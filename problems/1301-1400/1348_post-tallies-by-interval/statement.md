# Post Tallies By Interval

## Description

A feed records short posts, each tagged with the moment it was posted, and
answers questions of the form "how many of this person's posts landed in
each bucket of this size?"

Implement the `PostTally` class:

- `PostTally()` initializes an empty tally.
- `void recordPost(string name, int time)` records that the person `name`
  posted at time `time`; the same person may post many times, even at the
  same moment.
- `int[] countsPerInterval(string span, string name, int startTime, int
endTime)` splits `[startTime, endTime]` into consecutive buckets of
  length `span` — the first bucket starts exactly at `startTime` — and
  returns, in order, how many of `name`'s recorded posts fall in each
  bucket. `span` is one of `"minute"`, `"hour"`, or `"day"`, meaning 60,
  3600, or 86400 seconds. A recorded post at time `t` — every recorded
  time satisfies `startTime <= t <= endTime` — lands in bucket
  `(t - startTime) // span`. The last bucket may extend past `endTime`
  and can even be empty.

### Example 1

```text
Input:
["PostTally","recordPost","recordPost","recordPost","recordPost","countsPerInterval","countsPerInterval","countsPerInterval","countsPerInterval"]
[[],["memo",10],["memo",60],["memo",130],["note",55],["minute","memo",0,130],["hour","memo",0,3600],["minute","note",0,130],["day","memo",0,130]]
Output: [null,null,null,null,null,[1,1,1],[3,0],[1,0,0],[3]]
Explanation: "memo" posted at 10, 60, and 130. Per minute over [0,130],
the buckets [0,59], [60,119], [120,130] hold 1, 1, and 1 posts. Per hour
over [0,3600], all three fall in the first bucket and the second
bucket — which starts exactly where the window ends — is empty.
"note" posted once at 55, which lands in the first minute bucket; the
next two minute buckets are empty.
Per day, everything is one bucket of 3.
```

### Constraints

- `0 <= time, startTime, endTime <= 10⁹`
- `0 <= endTime - startTime <= 10⁴`
- At most `10⁴` calls are made in total to `recordPost` and
  `countsPerInterval`.

## Hints

### Hint 1

Keep every recorded time per person; a query only cares about one person's
times.

### Hint 2

For a query, bucket index and time relate by division: `(t - startTime) //
span` places a post instantly, so sorting or scanning per query is enough
at these limits.

# Timeline Leader Tracker

## Description

A time-stamped ballot trail records which candidate received each vote and
when it was cast. In the `labels` array, `labels[i]` is the candidate voted
for by ballot `i`; that ballot was cast at the strictly increasing time
`times[i]`.

Implement the `TimelineLeaderTracker` class:

- `TimelineLeaderTracker(int[] labels, int[] times)` initializes the tracker
  with the ballot trail.
- `int leaderAt(int t)` returns the candidate who is leading the election at
  time `t`. A ballot cast exactly at time `t` counts towards the result. When
  two or more candidates are tied for the most votes, the candidate whose
  most recent vote was cast latest is the one leading.

### Example 1

```text
Input:
["TimelineLeaderTracker", "leaderAt", "leaderAt", "leaderAt", "leaderAt", "leaderAt"]
[[[1, 2, 1, 2, 0], [0, 5, 10, 15, 20]], [3], [12], [17], [20], [25]]
Output: [null, 1, 1, 2, 2, 2]
Explanation: Through time 3 only ballot 0 has arrived, so candidate 1 leads.
By time 12 ballots 0, 1, and 2 have counted (candidate 1 twice, candidate 2
once) and 1 still leads. At time 17 the count is tied 2-2 between candidates
1 and 2, and candidate 2's most recent vote (cast at 15) is later than
candidate 1's (cast at 10), so 2 leads. Candidate 0's ballot at time 20 does
not change the 2-2 tie, and time 25 sees no new votes.
```

### Constraints

- `1 <= labels.length <= 5000`
- `times.length == labels.length`
- `0 <= labels[i] < labels.length`
- `0 <= times[i] <= 10⁹`
- `times` is sorted in a strictly increasing order.
- `times[0] <= t <= 10⁹`
- At most `10⁴` calls are made to `leaderAt`.

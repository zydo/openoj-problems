# Transit Trip Log

## Description

A transit network logs journeys with tap-in/tap-out cards. Build the log as
the `TransitLog` class:

- `void tapIn(int id, string stop, int t)` records that card `id` tapped in at
  stop `stop` at time `t`. A card is only ever mid-journey once at a time.
- `void tapOut(int id, string stop, int t)` records that card `id` tapped out
  at stop `stop` at time `t`, completing the journey it started.
- `double averageTrip(string fromStop, string toStop)` returns the average
  duration, over all completed journeys that ran directly from `fromStop` to
  `toStop`, of `tap-out time - tap-in time`.

A journey from `fromStop` to `toStop` and one the other way are different
quantities and are averaged separately. Every `averageTrip` call is preceded
by at least one completed journey over the pair it asks about.

Events arrive in chronological order, and a card's tap-out time is always
later than its tap-in time.

### Example 1

```text
Input:
["TransitLog", "tapIn", "tapIn", "tapIn", "tapOut", "tapOut", "tapOut",
 "averageTrip", "averageTrip", "tapIn", "averageTrip", "tapOut", "averageTrip"]
[[], [7,"Harbor",2], [12,"Central",6], [3,"Harbor",9], [7,"Museum",17],
 [3,"Museum",21], [12,"Docks",26], ["Harbor","Museum"], ["Central","Docks"],
 [9,"Harbor",30], ["Harbor","Museum"], [9,"Museum",36], ["Harbor","Museum"]]
Output: [null, null, null, null, null, null, null, 13.5, 20.0, null, 13.5, null, 11.0]
Explanation:
// card 7: Harbor -> Museum in 15; card 3: Harbor -> Museum in 12
log.averageTrip("Harbor", "Museum"); // (15 + 12) / 2 = 13.5
log.averageTrip("Central", "Docks"); // one journey, 26 - 6 = 20.0
// card 9 taps in at 30 but has not tapped out yet — the average is unchanged
// card 9 taps out at 36: Harbor -> Museum in 6
log.averageTrip("Harbor", "Museum"); // (15 + 12 + 6) / 3 = 11.0
```

### Example 2

```text
Input:
["TransitLog", "tapIn", "tapOut", "averageTrip", "tapIn", "tapOut",
 "averageTrip", "tapIn", "tapOut", "averageTrip", "averageTrip"]
[[], [4,"Central",1], [4,"Docks",8], ["Central","Docks"], [5,"Central",10],
 [5,"Docks",13], ["Central","Docks"], [6,"Docks",20], [6,"Central",29],
 ["Docks","Central"], ["Central","Docks"]]
Output: [null, null, null, 7.0, null, null, 5.0, null, null, 9.0, 5.0]
Explanation:
// Central -> Docks: 7, then 3, average (7 + 3) / 2 = 5.0
// Docks -> Central is a separate pair: one journey of 9, average 9.0,
// which leaves the Central -> Docks average at 5.0
```

### Constraints

- `1 <= id, t <= 10^6`
- `1 <= stop.length, fromStop.length, toStop.length <= 10`
- Stop names use uppercase letters, lowercase letters, and digits.
- At most `2 * 10^4` calls are made in total across the three methods.
- Answers within `10^-5` of the true value are accepted.

## Hints

### Hint 1

A journey has two halves with different storage needs. Between the taps, the
only things worth remembering about a card are where and when it tapped in —
one small record keyed by card id. After the tap-out, the card no longer
matters; the statistic belongs to the stop pair.

### Hint 2

On `tapOut`, fetch and discard the pending record, and add `t_out - t_in` to a
per-(from, to) bucket. The bucket is the key of a second map.

### Hint 3

An average that stays cheap to recompute needs no history of durations: a
running sum and a count per pair make `averageTrip` one division. Because the
pending record is consumed at tap-out, a card can immediately begin another
journey.

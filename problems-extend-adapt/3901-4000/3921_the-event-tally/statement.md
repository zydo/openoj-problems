# The Event Tally

## Description

A scoring feed arrives as an array of event codes `events`. Two tallies
start at zero: a total score and a counter.

Scan the feed once from front to back. Each code does one of three things:

- Any of the digit codes `"0" "1" "2" "3" "4" "6"` contributes that many
  points to the total score.
- The code `"W"` scores nothing but bumps the counter up by one.
- Either of the codes `"WD"` or `"NB"` adds exactly one point to the total
  score and leaves the counter untouched.

The scan ends early the moment the counter climbs to `10`, discarding every
remaining event unread; otherwise it ends after the last code.

Return the pair `[score, counter]` holding the two final tallies.

### Example 1

```text
Input: events = ["6","WD","W","1","NB","2"]
Output: [11,1]
Explanation: The codes score 6, then 1 (WD) for 7, then W lifts the counter
to 1, then 1, 1 (NB), and 2 bring the total to 11. No early stop happens.
```

### Example 2

```text
Input: events =
["4","W","W","W","W","W","W","W","W","W","W","6","6"]
Output: [4,10]
Explanation: The leading 4 scores four points, and the ten W codes in a row
push the counter to 10, so the scan stops right there. The two trailing 6
codes are never applied.
```

### Example 3

```text
Input: events = ["WD","NB","W","WD","W","3"]
Output: [6,2]
Explanation: WD and NB each add a point, the two W codes raise the counter
to 2, the second WD adds another, and the closing 3 lands the total at 6.
```

### Constraints

- `1 <= events.length <= 1000`
- Each element of `events` is one of `"0"`, `"1"`, `"2"`, `"3"`, `"4"`,
  `"6"`, `"W"`, `"WD"`, or `"NB"`.

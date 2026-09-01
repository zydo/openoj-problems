# Which Sensor Failed

## Description

A lab rig logs readings through two identical sensors firing at the same
instants. You receive both streams as arrays `sensor1` and `sensor2`:
`sensor1[i]` and `sensor2[i]` were captured at the same moment `i`.

One model of these sensors carries a defect: it occasionally drops a single
reading. When that happens, every later reading slides one position to the
left, and the final slot is filled with an arbitrary value guaranteed to
differ from the dropped reading. For example, if the true stream is
`[1,2,3,4,5]` and reading `3` is dropped, the sensor may report
`[1,2,4,5,7]` — that trailing value could be anything except `3`.

At most one of the two sensors is defective. Name it: return `1` or `2`
for the defective sensor, and `-1` when neither is defective or the
evidence cannot single one out.

### Example 1

```text
Input: sensor1 = [5,6,8,9], sensor2 = [5,6,7,8]
Output: 1
Explanation: Sensor 2's stream is the intact one. Sensor 1 dropped the 7,
shifting the 8 one position left, and 9 is the arbitrary filler in the last
slot.
```

### Example 2

```text
Input: sensor1 = [3,1,4,5], sensor2 = [3,1,5,8]
Output: 2
Explanation: Sensor 1's stream is intact. Sensor 2 dropped the 4, so its 5
sits one position early and the trailing 8 is filler.
```

### Example 3

```text
Input: sensor1 = [6,6,6,6], sensor2 = [6,6,6,9]
Output: -1
Explanation: The streams differ only in the final slot — the very slot a
defect overwrites — so dropping the last reading of either stream explains
the other, and no culprit can be named.
```

### Constraints

- `sensor1.length == sensor2.length`
- `1 <= sensor1.length <= 100`
- `1 <= sensor1[i], sensor2[i] <= 100`

### Hint 1

The two streams agree up to the instant the defect struck; find that common
prefix first.

### Hint 2

Past the prefix, a defective stream matches the intact one shifted one
position to the left, with its final slot exempt from comparison.

### Hint 3

If both streams pass that shifted-suffix test — or neither does — no single
sensor can be blamed, and the answer is `-1`.

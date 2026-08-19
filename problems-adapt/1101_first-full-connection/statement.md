# First Full Connection

## Description

You are given `n` elements numbered `0` through `n - 1`, each starting on its
own, and an array `events`. Each element `events[i] = [time, a, b]` records
that at moment `time`, elements `a` and `b` are linked.

Links never disappear, and being connected travels along them: two elements
are connected when a chain of links leads from one to the other.

Return the earliest moment at which all `n` elements are connected into one
group. Return `-1` if the events never achieve that.

### Example 1

```text
Input: events = [[5,0,1],[2,1,2],[9,0,3],[7,2,3]], n = 4
Output: 7
Explanation: Sorted by moment: 1–2 at time 2, 0–1 at 5, 2–3 at 7, 0–3 at 9.
The link at 7 merges {0,1,2} with {3}, leaving one group, so the answer is 7
— the link at 9 arrives too late to matter.
```

### Example 2

```text
Input: events = [[900000000,3,4],[5,0,2],[600,1,3],[750000000,2,4]], n = 5
Output: 900000000
Explanation: The events arrive out of order. After the link at 750000000 two
groups remain, {0,2,4} and {1,3}; the final link at 900000000 joins them.
```

### Example 3

```text
Input: events = [[1,0,1],[2,2,3]], n = 4
Output: -1
Explanation: Element 3's group never meets element 0's, so no moment makes
all four connected.
```

### Constraints

- `2 <= n <= 100`
- `1 <= events.length <= 10⁴`
- `events[i].length == 3`
- `0 <= time <= 10⁹`
- `0 <= a, b <= n - 1`
- `a != b`
- All `time` values are distinct.
- Each unordered pair `{a, b}` appears in at most one event.

## Hints

### Hint 1

Only the sequence of the events matters, never the gaps between moments —
replay them soonest to latest.

### Hint 2

The bookkeeping that answers "are these two already connected?" in near-
constant time is the structure built for exactly that question, started
with every element alone.

### Hint 3

Replaying in order, each link either fuses two groups or changes nothing.
Count the groups as you go; the moment a link leaves exactly one, that
link's time is the answer.

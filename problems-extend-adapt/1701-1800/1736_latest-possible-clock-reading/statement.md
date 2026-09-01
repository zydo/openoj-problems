# Latest Possible Clock Reading

## Description

A 24-hour clock face is handed to you as a five-character string in
`hh:mm` form, but an unknown number of its digits have been wiped and
show as `?` instead. Only readings from `00:00` through `23:59` count as
legal. Choose a digit for every wiped position so the resulting reading
is as late in the day as it can possibly be, and return that string.
The given pattern always admits at least one legal reading.

### Example 1

```text
Input: time = "?9:4?"
Output: "19:49"
Explanation: An hour ending in 9 must stay in the teens, so the first
digit tops out at '1'; the minute ending in 4 climbs to 49.
```

### Example 2

```text
Input: time = "?5:?3"
Output: "15:53"
```

### Example 3

```text
Input: time = "2?:0?"
Output: "23:09"
```

### Constraints

- `time` has exactly five characters in `hh:mm` form.
- The pattern is guaranteed to allow at least one valid reading.

## Hints

### Hint 1

The search space of candidate readings is tiny — even sweeping it from
the largest candidate downward is fast enough.

### Hint 2

A candidate works only if every one of its characters agrees with the
pattern: revealed digits must match exactly, and `?` accepts anything.

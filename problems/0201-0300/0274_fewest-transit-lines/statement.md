# Fewest Transit Lines

## Description

A transit network contains several repeating lines. `lines[i]` lists every
stop served by line `i`; after boarding a line, you may leave it at any stop
in that list.

You begin at `startStop` without having boarded a line and want to reach
`endStop`. Return the minimum number of lines that must be boarded, or `-1` if
the destination is unreachable. Transferring from one line to another is only
possible at a stop served by both.

### Example 1

```text
Input: lines = [[2,5,9],[9,12,14],[14,20],[7,20]], startStop = 2, endStop = 7
Output: 4
Explanation: Board the four lines in order, transferring at stops 9, 14, and 20.
```

### Example 2

```text
Input: lines = [[4,8,13],[2,13,17]], startStop = 8, endStop = 4
Output: 1
Explanation: Both endpoints are served by the first line.
```

### Example 3

```text
Input: lines = [[1,4],[6,9],[4,10]], startStop = 1, endStop = 9
Output: -1
```

### Constraints

- `1 <= lines.length <= 500`
- `1 <= lines[i].length <= 10^5`
- Stops do not repeat within one line.
- The sum of all `lines[i].length` values is at most `10^5`.
- `0 <= lines[i][j] < 10^6`
- `0 <= startStop, endStop < 10^6`

## Hints

### Hint 1

Build an index from each stop to all transit lines that serve it.

### Hint 2

Use breadth-first search. From a reached stop, boarding one unused line makes
all stops on that line reachable with one additional boarding.

### Hint 3

Expand each line at most once. Boarding it again cannot discover a stop at a
smaller distance.

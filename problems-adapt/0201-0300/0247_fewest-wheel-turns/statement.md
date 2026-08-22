# Fewest Wheel Turns

## Description

A combination lock has four wheels in a row. Each wheel carries the digits
`'0'` through `'9'` and rotates in both directions with wraparound, so turning
brings `'9'` to `'0'` and `'0'` to `'9'`. One move turns a single wheel by one
position in either direction.

The lock reads `'0000'` at the start. You are given:

- `deadends`, a list of readings that jam the lock — the moment the wheels
  display one of them, nothing can be turned again;
- `target`, the reading that opens the lock.

Return the smallest number of moves that takes the lock from `'0000'` to
`target` without ever passing through a deadend, or `-1` if that is not
possible.

### Example 1

```text
Input: deadends = ["1000","0111"], target = "2000"
Output: 4
Explanation: Turning the first wheel upward twice would do it in 2 moves, but the intermediate reading "1000" is a deadend. Instead go around it: "0000" -> "0001" -> "1001" -> "2001" -> "2000", using the last wheel to sidestep the jam.
```

### Example 2

```text
Input: deadends = ["1234"], target = "0001"
Output: 1
Explanation: One downward turn of the last wheel opens the lock.
```

### Example 3

```text
Input: deadends = ["1000","9000","0100","0900","0010","0090","0001","0009"], target = "1111"
Output: -1
Explanation: Every one-move reading from "0000" is a deadend, so the wheels cannot move at all.
```

### Constraints

- `1 <= deadends.length <= 500`
- `deadends[i].length == 4`
- `target.length == 4`
- `target` does not occur in `deadends`
- `target` and every `deadends[i]` consist of digits only

## Hints

### Hint 1

Call each of the 10,000 possible readings a node, and join two nodes when one
move changes one into the other. What does the answer become on that graph?

### Hint 2

Every edge has the same weight, so breadth-first search from `"0000"` measures
the minimum move count — provided the search never steps on a deadend.

### Hint 3

Check the starting reading too: if `"0000"` itself is jammed, no sequence of
moves exists.

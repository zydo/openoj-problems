# Course Feasibility

## Description

A programme lists its `courseCount` courses under the numbers `0` to
`courseCount - 1`. An array `prerequisites` spells out the ordering rules:
each entry `[a, b]` says that course `b` must be completed before course `a`
begins.

Decide whether every course in the programme can be completed under those
rules. Return `true` when a completion order exists and `false` when the rules
contradict each other.

### Example 1

```text
Input: courseCount = 5, prerequisites = [[1,0],[2,0],[3,1],[4,3]]
Output: true
Explanation: Taking 0 first unlocks 1 and 2, then 3 follows 1, and 4 follows 3.
One legal completion order is 0, 1, 2, 3, 4.
```

### Example 2

```text
Input: courseCount = 4, prerequisites = [[1,0],[2,1],[3,2],[1,3]]
Output: false
Explanation: Course 1 must precede 2, 2 must precede 3, and 3 must precede 1
again. Each of the three waits on another, so none can start.
```

### Example 3

```text
Input: courseCount = 3, prerequisites = []
Output: true
Explanation: With no rules at all, the courses may be taken in any order.
```

### Constraints

- `1 <= courseCount <= 2000`
- `0 <= prerequisites.length <= 5000`
- each entry of `prerequisites` holds exactly two course numbers
- `0 <= a, b < courseCount` for every entry `[a, b]`
- no entry of `prerequisites` repeats

## Hints

### Hint 1

Turn each entry `[a, b]` into an arrow `b -> a` and the programme becomes a
directed graph. The question is whether that graph is free of loops — a loop
is exactly a set of courses each waiting on another member of the set.

### Hint 2

One test peels the graph from its free ends: a course with no unfinished
predecessor can be taken now, and taking it may free the next. If the peeling
consumes every course, no loop existed.

### Hint 3

The other test walks each chain of prerequisites as deep as it goes, marking
what is currently on the walking path. Reaching a course already on the path
means the chain folded back onto itself — that is the loop.

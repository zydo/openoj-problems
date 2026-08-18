# Course Order

## Description

A programme lists its `courseCount` courses under the numbers `0` to
`courseCount - 1`. An array `prerequisites` spells out the ordering rules:
each entry `[a, b]` says that course `b` must be completed before course `a`
begins.

Produce a sequence listing every course exactly once in which each course
appears only after everything the rules put in front of it. Any sequence that
respects the rules is accepted. If the rules contradict each other, return an
empty sequence.

### Example 1

```text
Input: courseCount = 3, prerequisites = [[2,1],[1,0]]
Output: [0,1,2]
Explanation: The rules form a single chain 0 before 1 before 2, so the
sequence is forced.
```

### Example 2

```text
Input: courseCount = 4, prerequisites = [[2,0],[3,0],[1,2],[1,3]]
Output: [0,2,3,1]
Explanation: Course 0 must come first and course 1 last. Between them, 2 and 3
are interchangeable; this sequence takes 2 first. [0,3,2,1] is equally legal.
```

### Example 3

```text
Input: courseCount = 4, prerequisites = [[2,0],[1,2],[3,1],[2,3]]
Output: []
Explanation: Course 2 waits on 3, which waits on 1, which waits on 2 again.
No sequence can satisfy the three together.
```

### Constraints

- `1 <= courseCount <= 2000`
- `0 <= prerequisites.length <= 5000`
- each entry of `prerequisites` holds exactly two course numbers
- `0 <= a, b < courseCount` for every entry `[a, b]`
- `a != b` for every entry `[a, b]`
- no entry of `prerequisites` repeats

## Hints

### Hint 1

Turn each entry `[a, b]` into an arrow `b -> a`. The sequence you want lists
each course after every course with an arrow into it — an arrangement a
directed graph admits exactly when it holds no loop.

### Hint 2

Build it by repeatedly taking a course nothing points into: such a course is
legal now, so append it, remove its outgoing arrows, and let that free the
next course.

### Hint 3

Keep a count of arrows entering each course. Start from the courses at zero,
decrement the count of every course fed by the one you take, and add each
course that falls to zero. If the finished sequence is shorter than
`courseCount`, a loop blocked the rest — return empty.

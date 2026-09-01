# Students Stuck Without a Sandwich

## Description

At lunch the canteen hands out sandwiches of two shapes — round ones, written
`0`, and square ones, written `1`. Every student queues up, and each one is
willing to eat only one of the two shapes.

There are exactly as many sandwiches as students, stacked with the first
sandwich on top. One student is served at a time, always the one at the
queue's front:

- If that student wants the shape of the top sandwich, they take it and
  leave the queue for good.
- If not, they step out of the way and rejoin at the queue's back,
  taking nothing.

Serving continues this way until the whole queue takes a full turn without
anyone wanting the top sandwich — everyone still standing is stuck without
food.

You are given two arrays: `students`, where `students[j]` is the preference
of the `j`-th student in the initial queue (`j = 0` at the front), and
`sandwiches`, where `sandwiches[i]` is the shape of the `i`-th sandwich in
the stack (`i = 0` on top). Return how many students end up unable to eat.

### Example 1

```text
Input: students = [0,1,1,0], sandwiches = [1,1,0,0]
Output: 0
Explanation:
- The front student (0) does not want the top sandwich (1) and rejoins at
  the back: students = [1,1,0,0].
- The front student takes the top sandwich and leaves: students = [1,0,0],
  sandwiches = [1,0,0].
- The front student takes the top sandwich and leaves: students = [0,0],
  sandwiches = [0,0].
- The front student takes the top sandwich and leaves: students = [0],
  sandwiches = [0].
- The last student takes the last sandwich: students = [], sandwiches = [].
Everyone eats.
```

### Example 2

```text
Input: students = [1,1,0,0,1], sandwiches = [0,1,1,0,0]
Output: 1
Explanation: Serving goes around, four sandwiches leave the stack, and then
the queue is a single student who wants a square sandwich (1) while only a
round one (0) remains. A full turn passes with no taker, so one student
stays unfed.
```

### Constraints

- `1 <= students.length, sandwiches.length <= 100`
- `students.length == sandwiches.length`
- `sandwiches[i]` is `0` or `1`.
- `students[i]` is `0` or `1`.

## Hints

### Hint 1

Play the process out directly: a queue for the students, a stack for the
sandwiches. Each pass either feeds somebody or comes back around unchanged
— and an unchanged pass means the line has stalled.

### Hint 2

The order of the queue never actually matters, only how many waiting
students still want each shape. Walk the stack from the top while at least
one remaining student wants its sandwich; whoever is left over once that
fails is the answer.

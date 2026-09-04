# Rebuild Line From Taller Counts

## Description

A line of people was scrambled, and all that survives of it is one pair per
person. The pair `people[i] = [h, k]` says that this person's height is `h`, and
that `k` of the people standing ahead of them in the line were at least as tall
as they were.

Put the line back. Return the same pairs arranged from the front of the line to
the back, so that each pair's second entry really does count the
at-least-as-tall people preceding it. Some line matches the input, and only one
does.

### Example 1

```text
Input: people = [[8,1],[4,3],[3,0],[6,1],[5,3],[8,0]]
Output: [[3,0],[8,0],[6,1],[8,1],[4,3],[5,3]]
Explanation: Reading the answer front to back: the 3 leads, so nothing precedes
it. The first 8 has only the 3 ahead, which is shorter, so its count is 0. The
6 is preceded by one taller person, the 8. The second 8 likewise sees one 8
ahead of it. The 4 is preceded by 8, 6 and 8 — three of them reach its height.
The 5 sees the same three.
```

### Example 2

```text
Input: people = [[5,2],[5,0],[5,1]]
Output: [[5,0],[5,1],[5,2]]
Explanation: Everyone is the same height, so each person's count is exactly the
number of people ahead of them, and the counts spell out the order.
```

### Example 3

```text
Input: people = [[3,3],[5,2],[9,0],[7,1]]
Output: [[9,0],[7,1],[5,2],[3,3]]
Explanation: Heights fall from front to back, so every person is preceded only
by people taller than themselves and the counts equal the positions.
```

### Constraints

- `1 <= people.length <= 2000`
- `0 <= people[i][0] <= 10^6`
- `0 <= people[i][1] < people.length`
- The input is guaranteed to be the description of an actual line.

## Hints

### Hint 1

A count only ever refers to people who reach the person's own height, so
everyone strictly shorter is invisible to it. Adding a short person to a line
cannot change what anybody taller has already been told about their own
position.

### Hint 2

That invisibility says which end to work from. Handle people in decreasing order
of height: at the moment you place someone, every person already placed reaches
their height, so their count _is_ the index they must sit at among those already
placed. Slot them in there and move on.

### Hint 3

People of the same height need an order among themselves. Take the smaller count
first: then when its equal-height peer is inserted at its own count, exactly
that many equal-height people are already ahead of it, and no later insertion of
a shorter person can shift the total.

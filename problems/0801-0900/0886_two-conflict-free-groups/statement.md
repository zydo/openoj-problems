# Two Conflict-Free Groups

## Description

`n` people, numbered `1` through `n`, are to be handed one of two badges
each. Some pairs of them clash: a clashing pair must not receive the same
badge. Nothing else is required — either badge may go to any number of
people, including none at all.

The clashes arrive as `conflicts`, where each entry `[a, b]` says that person
`a` and person `b` clash. Return `true` when badges can be handed out with no
clashing pair sharing one, and `false` otherwise.

### Example 1

```text
Input: n = 5, conflicts = [[1,3],[2,3],[3,5],[1,4]]
Output: true
Explanation: Give the first badge to 3 and 4, the second to 1, 2 and 5.
Every listed pair now spans the two badges.
```

### Example 2

```text
Input: n = 4, conflicts = [[1,2],[2,3],[1,3],[2,4]]
Output: false
Explanation: People 1, 2 and 3 clash with each other, so two of them are
forced to share a badge whichever way it is done.
```

### Example 3

```text
Input: n = 7, conflicts = [[1,2],[3,4],[5,6],[2,3],[4,5]]
Output: true
Explanation: Alternate badges along the chain 1-2-3-4-5-6. Person 7 clashes
with nobody and takes either badge.
```

### Constraints

- `1 <= n <= 2000`
- `conflicts` holds from `0` to `10^4` entries.
- Every entry has exactly two numbers, `[a, b]` with `1 <= a < b <= n`.
- No entry is repeated.

## Hints

### Hint 1

Read the clashes as edges of an undirected graph over the people. Handing out
two badges is painting every vertex one of two colours, and the requirement is
that no edge has both ends the same colour — so the question is whether this
graph admits such a painting.

### Hint 2

Painting is forced once you start: pick any unpainted person, give them a
badge, and every neighbour must take the other, and so on outward. Walk the
component with a stack or a queue, painting each newly reached person the
opposite of the one you reached it from. If you ever meet an already-painted
neighbour wearing the same badge as the person you came from, the answer is
`false`.

### Hint 3

Some people may clash with nobody, and the graph can fall into several pieces,
so repeat the walk from every person who is still unpainted; each walk settles
one piece independently. An alternative route avoids colours entirely: all the
people a single person clashes with must end up together, so merge them in a
disjoint-set structure, then answer `false` exactly when some listed pair has
been merged into one set.

# Where the Route Ends

## Description

The array `paths` holds the legs of a route: `paths[i] = [cityA, cityB]`
means a direct leg runs from `cityA` to `cityB`. One city on this route
has no leg leaving it — that is where any full trip finishes. Return
that city.

The legs are guaranteed to join into a single line with no branching
and no loop, so exactly one such city exists.

### Example 1

```text
Input: paths = [["Rome","Athens"],["Athens","Cairo"]]
Output: "Cairo"
Explanation: A traveler lands in Rome and moves on from city to city:
Rome -> Athens -> Cairo. Cairo has no onward leg, so it is the answer.
```

### Example 2

```text
Input: paths = [["Oslo","Bern"],["Bern","Kyiv"],["Riga","Oslo"]]
Output: "Kyiv"
Explanation: The legs may be listed in any order; chained together
they form Riga -> Oslo -> Bern -> Kyiv, and Kyiv is where the line
stops.
```

### Example 3

```text
Input: paths = [["Port","Haven"]]
Output: "Haven"
Explanation: A single leg makes a two-city route, and its far end has
nowhere further to go.
```

### Constraints

- `1 <= paths.length <= 100`
- `paths[i].length == 2`
- `1 <= cityA.length, cityB.length <= 10`
- `cityA != cityB`
- City names use only English letters in either case, plus the space
  character.

## Hints

### Hint 1

A city that ever appears as the first element of a leg has somewhere to
go; the answer is the city that never does.

### Hint 2

Collect every first-of-pair city into a set, then look for a
second-of-pair city that is missing from it.

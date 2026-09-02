# Asteroid Feast

## Description

A planet starts with an integer mass `mass`. Scattered around it are
asteroids, given as an array `asteroids` where `asteroids[i]` is the mass of
the `i`-th one.

The planet may steer itself into the asteroids in any order it likes. When it
meets an asteroid whose mass does not exceed its own, that asteroid is
swallowed and the planet's mass grows by exactly the asteroid's mass. If the
asteroid is the heavier of the two, the planet breaks apart instead and
everything stops.

Decide whether some collision order lets the planet swallow every asteroid.
Return `true` if such an order exists, or `false` if the planet is doomed to
be broken by one of them.

### Example 1

```text
Input: mass = 6, asteroids = [4,5,8,2]
Output: true
Explanation: Eat them smallest-first: 2, 4, 5, then 8.
- Swallow the asteroid of mass 2. The planet grows: 6 + 2 = 8
- Swallow the asteroid of mass 4. The planet grows: 8 + 4 = 12
- Swallow the asteroid of mass 5. The planet grows: 12 + 5 = 17
- Swallow the asteroid of mass 8. The planet grows: 17 + 8 = 25
Nothing survives the feast.
```

### Example 2

```text
Input: mass = 5, asteroids = [9,2]
Output: false
Explanation: The only useful first bite is the asteroid of mass 2, which
brings the planet to 5 + 2 = 7. That is still lighter than the asteroid of
mass 9, so the planet cannot survive that collision.
```

### Constraints

- `1 <= mass <= 10⁵`
- `1 <= asteroids.length <= 10⁵`
- `1 <= asteroids[i] <= 10⁵`

## Hints

### Hint 1

The order that matters is by mass, so sorting is a natural first move.

### Hint 2

If some asteroid outweighs the planet at a given moment, then every heavier
asteroid outweighs it too at that same moment.

### Hint 3

So all the planet ever needs to test is the lightest asteroid it has not yet
swallowed: if that one is fatal, no order works.

### Hint 4

Sort ascending and walk through the asteroids, growing the planet's mass as
you go; the first fatal encounter answers `false`.

# Largest Minimum City Power

## Description

`n` cities sit along a line, numbered `0` to `n - 1`. The array `stations`
records how many power plants already stand in each city, and every plant —
existing or future — serves every city within distance `r` of its own
location: a plant at city `i` powers each city `j` with `|i - j| <= r`.

A city's power is the number of plants serving it.

The grid may add `k` more plants, all with the same reach `r`, and several may
share a city. Place them so that the least-powered city ends up with as much
power as possible, and return that value.

### Example 1

```text
Input: stations = [2,0,3,1,4], r = 1, k = 2
Output: 4
Explanation: City 0 starts weakest: its own 2 plants plus city 1's none give
power 2. Building both new plants in city 1 lifts city 0 to 4, and every other
city then holds at least 4 as well. Reaching 5 would demand three plants in
reach of city 0, and only two may be built.
```

### Example 2

```text
Input: stations = [3,7,3,3], r = 0, k = 4
Output: 4
Explanation: With no reach at all, a plant serves only its own city, so the
three weaker cities need one plant each to climb from 3 to 4. That uses three
of the four plants; the fourth cannot push all of them to 5.
```

### Example 3

```text
Input: stations = [5,1,0,2], r = 2, k = 3
Output: 6
Explanation: City 3 starts at power 3. All three new plants go to city 3
itself, raising it to 6, and no city is left below 6. Power 7 would need four
extra plants in city 3's reach.
```

### Constraints

- `n == stations.length`
- `1 <= n <= 10⁵`
- `0 <= stations[i] <= 10⁵`
- `0 <= r <= n - 1`
- `0 <= k <= 10⁹`

## Hints

### Hint 1

Start by computing every city's initial power. Each plant adds its count
across a whole window of cities, and windows lining up along a line is
exactly what a difference array turns into one linear pass.

### Hint 2

"Can every city reach power `t`?" is monotone in `t`, so the answer can be
bisected. How large can the upper bound be, given what a single plant adds to
a single city?

### Hint 3

To test a target `t`, sweep the cities left to right. When a city falls
short, build the missing plants at the farthest position that still reaches
it — that placement helps this city and the most cities still to come. Retire
the plants' effect with a second difference array as the sweep leaves their
reach, and abort once the plants built exceed `k`.

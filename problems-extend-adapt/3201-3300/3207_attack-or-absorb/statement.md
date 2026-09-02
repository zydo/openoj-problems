# Attack Or Absorb For The Most Points

## Description

The array `enemyEnergies` holds the energy value of every foe, and you
begin holding `currentEnergy` energy with 0 points banked. Every foe
starts unabsorbed. Take one of these two actions any number of times:

- **Attack** — pick a foe `i` you have not absorbed while your energy is
  at least `enemyEnergies[i]`: bank 1 point and lose that much energy,
  i.e. `currentEnergy = currentEnergy - enemyEnergies[i]`.
- **Absorb** — with at least 1 point banked, pick a foe `i` you have not
  yet absorbed: gain its energy, i.e.
  `currentEnergy = currentEnergy + enemyEnergies[i]`, and foe `i` leaves
  play for good.

Return the largest point total reachable by choosing the two actions
optimally.

### Example 1

```text
Input: enemyEnergies = [4,6], currentEnergy = 9
Output: 3
Explanation: Attack the 4-energy foe twice (2 points, 1 energy left),
absorb the 6-energy foe to climb back to 7, then attack once more.
That banks 3 points, and no fourth attack ever fits.
```

### Example 2

```text
Input: enemyEnergies = [5,3,7], currentEnergy = 4
Output: 5
Explanation: Keep draining the 3-energy foe and absorb the other two as
refills. The 16 total energy on the table pays for five attacks but not
a sixth.
```

### Example 3

```text
Input: enemyEnergies = [1,1000000000], currentEnergy = 0
Output: 0
Explanation: With 0 energy not even the cheapest foe can be attacked,
and absorbing requires a point already banked, so nothing can start.
```

### Constraints

- `1 <= enemyEnergies.length <= 10⁵`
- `1 <= enemyEnergies[i] <= 10⁹`
- `0 <= currentEnergy <= 10⁹`

## Hints

### Hint 1

Think greedily about which foe should never be absorbed — that choice
sets the price of every point.

### Hint 2

The cheapest foe is the natural keeper: absorbing it would give up the
least expensive point source, so leave it unabsorbed forever.

### Hint 3

Once the plan is fixed, every absorbed foe's energy is eventually spent
in lots of the keeper's size, and the total is simply
`(currentEnergy + sum(enemyEnergies) - min) // min` — no simulation
needed.

### Hint 4

Watch the dead case: if the starting energy cannot beat even the
smallest foe, no first point exists and no refill can ever begin.

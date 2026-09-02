# Lineup Prep Hours

## Description

You are about to fight a lineup of `n` opponents, in order. Your own
condition is described by two positive integers `initialEnergy` and
`initialExperience`, and each opponent `i` brings `energy[i]` and
`experience[i]`.

To beat opponent `i` you must arrive with **strictly** more energy than
`energy[i]` **and** strictly more experience than `experience[i]`.
Winning drains your energy by `energy[i]` and teaches you a lesson:
your experience grows by `experience[i]`.

Before the first fight you may buy any number of prep hours; each hour
raises either your starting energy or your starting experience by one
point. Return the fewest prep hours that let you beat every opponent in
the lineup.

### Example 1

```text
Input: initialEnergy = 4, initialExperience = 2, energy = [2,1], experience = [3,5]
Output: 2
Explanation: Two hours on experience raise it to 4, which beats the
first opponent's 3 strictly. Energy 4 already survives both fights
(4 -> 2 -> 1). After the first win experience jumps to 7, covering the
second opponent's 5, so 2 prep hours suffice.
```

### Example 2

```text
Input: initialEnergy = 10, initialExperience = 5, energy = [3,3,3], experience = [4,4,4]
Output: 0
Explanation: No preparation is needed: energy never drops below 1 and
experience 5 already beats every 4, growing after each win.
```

### Example 3

```text
Input: initialEnergy = 1, initialExperience = 1, energy = [5], experience = [6]
Output: 11
Explanation: Both stats fall short: 5 hours lift energy to 6 (leaving 1
after the win) and 6 hours lift experience to 7, so the total is 11.
```

### Constraints

- `n == energy.length == experience.length`
- `1 <= n <= 100`
- `1 <= initialEnergy, initialExperience, energy[i], experience[i] <= 100`

## Hints

### Hint 1

Energy only ever decreases, so its share of the answer is a single
shortfall: whatever margin keeps the running drain positive throughout
the whole lineup.

### Hint 2

Experience climbs after each win, so handle it fight by fight: whenever
the current value fails to beat the opponent strictly, pay exactly the
missing difference plus one and move on. The two shares never interact —
sum them.

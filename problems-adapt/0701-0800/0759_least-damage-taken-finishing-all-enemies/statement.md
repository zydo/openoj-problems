# Least Damage Taken Finishing All Enemies

## Description

You are given an integer `power` and two integer arrays `damage` and `health`,
all describing a fight you are in against `n` enemies.

While enemy `i` is alive it hits you for `damage[i]` every second. Each
second, after absorbing every living enemy's hit, you strike one living enemy
of your choice for `power` points, reducing its health by that much. An enemy
dies when its health reaches `0` or below.

Return the least total damage you can take over the whole fight, assuming you
choose your targets as wisely as possible.

### Example 1

```text
Input: power = 1, damage = [9,3], health = [9,1]
Output: 93
Explanation: The weak enemy dies in one strike, the strong one needs nine.
Taking the weak one out first costs 12 for that one second; the strong enemy
then hits you for 9 per second across its nine dying seconds: 12 + 81 = 93.
Striking the strong one first would instead cost 12 · 9 + 3 = 111 — the
cheaper ratio, not the bigger damage, decides.
```

### Example 2

```text
Input: power = 1, damage = [6,2], health = [3,1]
Output: 26
Explanation: Both enemies have the same damage-to-kill-time ratio, so either
order gives 8 · 3 + 2 = 8 · 1 + 6 = 26.
```

### Example 3

```text
Input: power = 5, damage = [7], health = [12]
Output: 21
Explanation: A lone enemy needs ⌈12/5⌉ = 3 strikes to die, and hits you for
7 during each of them: 21.
```

### Constraints

- `1 <= power <= 10⁴`
- `1 <= n == damage.length == health.length <= 10⁵`
- `1 <= damage[i], health[i] <= 10⁴`

## Hints

### Hint 1

Enemy `i` dies after exactly `⌈health[i] / power⌉` seconds of your focused
strikes. Once the elimination order is fixed, the total damage is forced — so
only the order needs deciding.

### Hint 2

Compare two enemies scheduled back to back. Flipping the pair changes only
what the later one deals while the earlier one is dying; write both totals
down and simplify.

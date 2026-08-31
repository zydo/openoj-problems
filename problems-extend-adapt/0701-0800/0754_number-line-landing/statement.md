# Number Line Landing

## Description

You start at position `0` on an infinite number line and want to land
exactly on position `target`.

You make a sequence of moves. On the `i`-th move (moves are numbered
starting from `1`), you choose a direction — left or right — and take
exactly `i` steps that way. So move 1 covers 1 step, move 2 covers 2
steps, move 3 covers 3 steps, and so on; only the direction is yours to
pick each time.

Return the fewest moves that let you land exactly on `target`.

### Example 1

```text
Input: target = 5
Output: 5
Explanation: One valid sequence of directions is +1, +2, +3, +4, -5, landing
at 1 + 2 + 3 + 4 - 5 = 5. No sequence of 4 or fewer moves can reach exactly
5: with 3 moves the farthest right you can go is 1+2+3=6 and every shorter
combination lands on a different total, and with 4 moves every reachable
total is even farther off or has the wrong parity to hit 5 exactly.
```

### Example 2

```text
Input: target = -4
Output: 3
Explanation: Reaching -4 takes exactly as many moves as reaching 4, since
reversing every chosen direction turns one path into the other. Three moves
can land on 4 via -1 + 2 + 3 = 4 (or, mirrored, +1 - 2 - 3 = -4), and no
shorter sequence reaches magnitude 4 at all.
```

### Constraints

- `-10⁹ <= target <= 10⁹`
- `target != 0`

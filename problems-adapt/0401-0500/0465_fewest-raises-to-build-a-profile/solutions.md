# Solutions — Fewest Raises to Build a Profile

## Greedy difference sum

Every move lays down one horizontal strip across a run of positions, so the
finished profile is a pile of strips and the answer is the smallest pile that
works. The leftmost position gives a first, unavoidable cost: `heights[0]`
strips must cover it, whatever their right ends turn out to be.

Read the profile left to right and pay only for the climbs. A strip sitting on
position `i - 1` may or may not continue onto `i` — continuing is free — but a
strip that was never laid to the left cannot appear at `i`. So whenever the
level steps up by `d = heights[i] - heights[i-1]`, exactly `d` new strips have
to begin at `i`. Steps down, and level stretches, add nothing: the taller work
to the left simply stops short of `i`. Summing the first element with every
positive difference therefore counts the strips, and laying them exactly that
way constructs the profile, so the count is tight.

For `heights = [2,5,3,5,2]`: the base `2` costs 2, the climb `2 -> 5` costs 3,
the later climb `3 -> 5` costs 2, and both drops are free, giving `2 + 3 + 2 = 7`.
A strictly falling profile such as `[5,4,3,2,1]` costs only its first level,
and a flat one such as `[3,3,3,3]` costs that single level once.

**Complexity:** `O(n)` time, `O(1)` space.

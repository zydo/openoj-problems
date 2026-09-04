# Solutions — Minimum Lifts to a Strictly Rising Array

Operations only ever increment, so the final array dominates the input
element-wise, and the bill for a final array is fixed: the sum of its
increases. Minimizing moves means finding the cheapest strictly
increasing array that sits above `nums`.

## Greedy lift to the running floor

The cheapest final array is built left to right. Strict increase forces
`nums[i]` to end at least at `prev + 1`, where `prev` is the final value of
the element to its left; lifting it any higher would only raise the floor
its right neighbor must clear and could never save work later, since
decrements are impossible. So the optimal target for each position is
exactly `max(prev + 1, nums[i])`, which is the hint's one-liner read
as an invariant.

The scan keeps `prev` as the final value of the previous position — `1`
before any lift has happened conceptually, seeded from `nums[0]`, which
never needs to move: nothing to its left constrains it. Each step adds
`target - nums[i]` to the move count and adopts `target` as the new
`prev`. The first example walks `[3,2,1,1]` to `[3,4,5,6]` for a cost of
`0 + 2 + 4 + 5 = 11`, exactly what this loop charges.

Every bound is tight in `i32`: final values stay below `10⁴ + 5000` and the
total move count below `5000 × 15000 = 7.5 × 10⁷`, far from overflow.

**Complexity:** `O(n)` time, `O(1)` space, where `n` is the length of
`nums`.

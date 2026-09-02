# Watering From Both Ends II

## Description

Alice and Bob tend a single row of `n` plants, labeled `0` to `n - 1`
from left to right, where plant `i` stands at position `i`. Plant `i`
needs `plants[i]` units of water. Each caretaker carries a watering can —
Alice's holds `capacityA` units and Bob's holds `capacityB` — and both
cans start full.

They work at the same time, one plant per time step:

- Alice moves left to right beginning at plant `0`, while Bob moves right
  to left beginning at plant `n - 1`.
- A caretaker who arrives with enough water in the can must water the
  plant in front of them; if the can falls short, they refill it to
  capacity first (instantly) and then water.
- Should both of them arrive at the same plant, whoever currently holds
  more water takes it; on an exact tie, Alice takes it.

Return the total number of refills needed to water every plant.

### Example 1

```text
Input: plants = [3,4,2,1,5], capacityA = 6, capacityB = 6
Output: 1
Explanation:
- Both start with 6 units. Alice waters plant 0 (3 left); Bob waters
  plant 4 (1 left).
- Alice cannot cover plant 1 with 3 units, so she refills and waters it
  (2 left). Bob waters plant 3 (0 left).
- They meet at plant 2. Alice holds 2 units to Bob's 0, so she waters it
  without refilling.
Exactly one refill was needed.
```

### Example 2

```text
Input: plants = [4,5,5,4], capacityA = 5, capacityB = 5
Output: 2
Explanation:
- Both start with 5 units and water their first plants (1 unit left
  each).
- Alice's next plant needs 5 and Bob's needs 5, so each refills once
  before watering.
Neither caretaker meets the other in the middle here, and the total is
2 refills.
```

### Example 3

```text
Input: plants = [7], capacityA = 5, capacityB = 6
Output: 1
Explanation:
- There is one plant, so both caretakers arrive at it at once. Bob holds
  more water (6 to Alice's 5), so Bob waters it — but 6 units fall short
  of 7, forcing one refill first.
```

### Constraints

- `n == plants.length`
- `1 <= n <= 10⁵`
- `1 <= plants[i] <= 10⁶`
- `max(plants[i]) <= capacityA, capacityB <= 10⁹`

## Hints

### Hint 1

Directly act out the watering with two pointers and two water counters.

### Hint 2

Every step costs the same, so the two caretakers advance one plant per
step and can only share a plant at the middle of the row.

### Hint 3

At a shared middle plant only the larger remaining amount matters, since
the better-stocked caretaker does the watering; a tie sends Alice.

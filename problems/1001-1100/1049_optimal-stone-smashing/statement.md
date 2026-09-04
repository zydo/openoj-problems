# Optimal Stone Smashing

## Description

`stones` records the weights of a pile of stones. A collision brings together
two stones of your choosing, of weights `a` and `b` with `a >= b`. Equal
weights annihilate: both stones leave the pile. Unequal weights leave a
fragment: the lighter stone is destroyed and the heavier one rejoins the pile
weighing `a - b`.

Since you name both participants every time, the outcome is yours to steer.
Collide until at most one stone remains, and return the smallest weight that
survivor can be made to carry — `0` when the pile can be emptied completely.

### Example 1

```text
Input: stones = [4,9,2,7]
Output: 0
Explanation: Send 9 against 7 and 4 against 2; the leftovers weigh 2 and 2,
and they cancel.
```

### Example 2

```text
Input: stones = [3,8,20]
Output: 9
Explanation: 3 and 8 together weigh 11 against the 20, and nothing splits the
pile more evenly than that, so 20 - 11 = 9 is unavoidable.
```

### Example 3

```text
Input: stones = [7]
Output: 7
Explanation: With no partner available, the stone survives at full weight.
```

### Constraints

- `stones` holds between 1 and 30 weights
- each weight is an integer from 1 through 100

### Follow-up

Let `S` stand for the combined weight of the pile — at most `30 * 100` here.
Can you finish in `O(n * S)` time using only `O(S)` extra memory?

## Hints

### Hint 1

Follow one stone through the whole process. It keeps its own weight and
subtracts the weights of everything smashed into it, so whatever remains at the
end is `stones[0]` and `stones[1]` and so on, each attached to a `+` or a `-`.
Every assignment of signs is also achievable. The question is therefore: which
signing has the smallest absolute total?

### Hint 2

Reading the `+` stones as one team and the `-` stones as the other, the
surviving weight is the gap between the two team totals. The combined weight is
fixed, so a team summing to `t` leaves a gap of `total - 2 * t`, and the gap
shrinks as `t` climbs toward half the total.

### Hint 3

So find the largest team total that does not exceed `total / 2`. Mark which
sums are attainable in a boolean array indexed by sum, adding one stone at a
time and sweeping the array from high index to low so a single stone is never
counted twice in the same sum.

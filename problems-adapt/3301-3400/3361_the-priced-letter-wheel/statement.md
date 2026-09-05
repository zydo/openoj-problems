# The Priced Letter Wheel

## Description

Picture the 26 lowercase letters laid out in a circle: after `z` the
circle continues with `a`, and before `a` the circle closes back to `z`.

You are given two strings `s` and `t` of equal length, plus two cost
arrays `nextCost` and `previousCost`, both of length 26.

In one operation you pick a position of `s` and rotate its letter one
step around the circle, choosing a direction:

- one step forward, where `z` wraps to `a`, paying `nextCost[j]` for the
  alphabetical index `j` of the letter being left (`a` is index 0);
- one step backward, where `a` wraps to `z`, paying `previousCost[j]`
  for that same index.

Each step's price depends only on the letter being left, never on the
position it occupies in the string, and the two directions may be priced
differently.

Return the smallest total cost of operations that changes `s` into `t`.

### Example 1

```text
Input: s = "yz", t = "ab",
       nextCost = [3,3,...,3] (26 threes),
       previousCost = [5,5,...,5] (26 fives)
Output: 12
Explanation: Advancing y twice — y to z to a — costs 3 + 3 = 6, and the
same two forward steps turn z into b for another 6. Walking backward
would take 24 paid steps each way, so 12 is the cheapest total.
```

### Example 2

```text
Input: s = "az", t = "za",
       nextCost = [1,1,...,1] (26 ones),
       previousCost = [10,10,...,10] (26 tens)
Output: 11
Explanation: Turning a into z is cheapest backward, one step for 10,
since the forward route needs 25 steps for 25. Turning z into a is
cheapest forward, a single step for 1. Together that is 11.
```

### Example 3

```text
Input: s = "wheel", t = "wheel",
       nextCost = [7,7,...,7] (26 sevens),
       previousCost = [2,2,...,2] (26 twos)
Output: 0
Explanation: The strings already match, so no operation is needed and
the total cost is 0.
```

### Constraints

- `1 <= s.length == t.length <= 10^5`
- `s` and `t` consist only of lowercase English letters.
- `nextCost.length == previousCost.length == 26`
- `0 <= nextCost[i], previousCost[i] <= 10^9`

## Hints

### Hint 1

For a single pair of letters at alphabet positions `i` and `j` there are
only two routes around the circle. One route's cost is a run of
consecutive `nextCost` entries starting at `nextCost[i]` and ending just
before `nextCost[j]`, wrapping past index 25 when needed; the other is
the mirrored run of `previousCost` entries walking the opposite way.

### Hint 2

Positions of the string never influence each other, so the answer is
just the sum over all positions of the cheaper route from `s[i]` to
`t[i]`. Prefix sums over each cost array make every route's cost a
constant-time range sum.

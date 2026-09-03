# Fare To Every Spot In Line

## Description

A line holds `n + 1` people, numbered `0` through `n`, and you stand at the
very back, position `n`. Everyone in front of you is willing to trade
places, but not for free: swapping with person `i` costs `cost[i]`. One
rule governs the line:

- Swapping with someone still ahead of you costs you their `cost[i]`.
- Swapping with someone behind you is free for both of you.

You may swap as often as you like. For every position `i` from `0` to
`n - 1`, work out the least total money that carries you from the back of
the line to position `i`, and return those minima in an array `answer` of
size `n`.

### Example 1

```text
Input: cost = [9,2,6,4,8]
Output: [9,2,2,2,2]
Explanation:
- i = 0. Person 0 is the only one ahead of you; pay 9.
- i = 1. Swap with person 1 for 2.
- i = 2, 3, 4. Pay 2 to swap with person 1 first — that leap puts
  everyone from position 2 onward behind you — then step forward to each
  spot for free.
```

### Example 2

```text
Input: cost = [4,4,2,7]
Output: [4,4,2,2]
Explanation:
- i = 0 and i = 1. The cheapest swap among people 0 and 1 is 4.
- i = 2 and i = 3. Swap with person 2 for 2; from position 2 the rest of
  the line is behind you and costs nothing.
```

### Example 3

```text
Input: cost = [10,1]
Output: [10,1]
Explanation: Position 0 costs 10. For position 1, swapping with person 1
for 1 is cheaper than passing person 0 first.
```

### Constraints

- `1 <= n == cost.length <= 100`
- `1 <= cost[i] <= 100`

## Hints

### Hint 1

Reaching position `i` never takes more than the cheapest swap offered by
people `0..i`: land on that cheap spot first, and every later position is
then behind you.

### Hint 2

That is exactly a prefix minimum — sweep `cost` once, carry the smallest
value seen so far, and write it down at each index.

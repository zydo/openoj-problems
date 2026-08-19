# Fewest Swaps For Rising Rows

## Description

Two integer arrays `top` and `bottom` of equal length sit one above the other,
forming a grid of two rows. A single move picks a column `i` and exchanges the
two entries stacked there, so `top[i]` and `bottom[i]` trade places.

Your goal is a grid where reading either row left to right gives strictly
larger values at every step. Return the least number of moves that reaches it.
Inputs are chosen so some sequence of moves always works.

### Example 1

```text
Input: top = [1,2,7,6,9], bottom = [2,4,4,8,10]
Output: 1
Explanation: Exchange the entries in column 2. The rows become
[1,2,4,6,9] and [2,4,7,8,10], both rising.
```

### Example 2

```text
Input: top = [3,4,8,9,12], bottom = [4,5,5,6,11]
Output: 2
Explanation: The bottom row stalls at the repeated 5, and no single exchange
repairs it. Exchanging columns 0 and 1 yields [4,5,8,9,12] over [3,4,5,6,11].
```

### Example 3

```text
Input: top = [1,4,6], bottom = [2,3,9]
Output: 0
Explanation: Both rows already rise, so nothing has to move.
```

### Constraints

- `top` holds at least `2` and at most `10^5` integers
- `bottom` holds exactly as many integers as `top`
- every entry of either row is between `0` and `2 * 10^5` inclusive

## Hints

### Hint 1

Column `i` has only two possible states — untouched, or exchanged — and the
cost of the whole plan is the number of columns in the exchanged state. Carry
the cheapest plan for each of those two states as you sweep left to right.

### Hint 2

Whether a state at column `i` may follow a state at column `i - 1` depends only
on the four numbers straddling that boundary. Test the two orderings: the
straight one (`top[i-1] < top[i]` together with `bottom[i-1] < bottom[i]`) and
the crossed one (`top[i-1] < bottom[i]` together with `bottom[i-1] < top[i]`).

### Hint 3

The straight ordering lets column `i` repeat whatever column `i - 1` chose; the
crossed ordering lets it do the opposite. Both may be available at once, so
take the cheaper. Start the sweep with cost `0` for leaving column 0 alone and
`1` for exchanging it, and finish by taking the smaller of the two costs.

# Most Containers Filled With Spare Units

## Description

There are `n` containers on a loading dock, numbered `0` through `n - 1`.
Container `i` holds at most `capacity[i]` units and currently holds
`contents[i]` units. You are also given an integer `spare` — a stock of
extra units you may distribute among the containers however you like.

Return the largest number of containers that can end up holding exactly
their capacity after you distribute the spare units.

### Example 1

```text
Input: capacity = [5,5,5], contents = [5,3,1], spare = 2
Output: 2
Explanation: Container 0 is already full. Sending 2 units to container 1
brings it to 5 of 5, exhausting the stock, while container 2 still needs 4.
Two containers end up full, and no distribution does better.
```

### Example 2

```text
Input: capacity = [3,1], contents = [0,0], spare = 1
Output: 1
Explanation: The single spare unit tops up the second container, which only
needs one unit; the first container would need all three. One full container
is the best possible.
```

### Example 3

```text
Input: capacity = [9], contents = [9], spare = 100
Output: 1
Explanation: The only container already sits at its capacity, so the answer
is 1 — no spare units are even needed.
```

### Constraints

- `n == capacity.length == contents.length`
- `1 <= n <= 5 * 10⁴`
- `1 <= capacity[i] <= 10⁹`
- `0 <= contents[i] <= capacity[i]`
- `1 <= spare <= 10⁹`

## Hints

### Hint 1

Container `i` is short by exactly `capacity[i] - contents[i]` units; filling
it costs precisely that much.

### Hint 2

Completing the containers with the smallest shortfalls first can never lose:
a budget that fills any set of containers can certainly fill the cheapest
same-sized set instead.

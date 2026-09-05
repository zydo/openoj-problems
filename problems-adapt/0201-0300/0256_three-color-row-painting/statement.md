# Three-Color Row Painting

## Description

A row of `n` houses stands in a line, and every house must be painted
either red, blue, or green. Painting house `i` a given color has its own
price, given by an `n x 3` matrix `costs`, where `costs[i][0]`,
`costs[i][1]`, and `costs[i][2]` are the prices of painting house `i`
red, blue, and green respectively. The only rule is that two houses
standing next to each other may not end up the same color.

Choose a color for every house so that no two neighbors match, and
return the smallest total price that achieves this.

### Example 1

```text
Input: costs = [[8,9,3],[4,7,6],[5,2,9]]
Output: 9
Explanation: Paint house 0 green, house 1 red, house 2 blue.
Total cost: 3 + 4 + 2 = 9.
```

### Example 2

```text
Input: costs = [[9,4,11]]
Output: 4
```

### Constraints

- `costs.length == n`
- `costs[i].length == 3`
- `1 <= n <= 100`
- `1 <= costs[i][j] <= 20`

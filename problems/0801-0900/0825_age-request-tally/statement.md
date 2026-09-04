# Age Request Tally

## Description

A site has one person for each value in `ages`. Person `x` may send a request
to a different person `y` unless at least one of these rules blocks it:

- `ages[y] <= 0.5 * ages[x] + 7`
- `ages[y] > ages[x]`
- `ages[y] > 100 && ages[x] < 100`

Requests are directional: an allowed request from `x` to `y` does not imply
that `y` may request `x`, and no one may request themself. Return the total
number of allowed requests.

### Example 1

```text
Input: ages = [15,16,16,17,18]
Output: 5
```

### Example 2

```text
Input: ages = [20,20,21,30]
Output: 4
```

### Constraints

- `n == ages.length`
- `1 <= n <= 2 * 10⁴`
- `1 <= ages[i] <= 120`

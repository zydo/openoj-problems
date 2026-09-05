# Lonely Ones Under A Budget

## Description

Two integers `n` and `k` are given.

For a binary string `s` of length `n`, its _cost_ is the total of all
0-based indices `i` at which `s[i]` is `1` — a `1` pays exactly its own
position. The string is _acceptable_ when no two `1` characters stand next
to each other anywhere in it, and its cost does not exceed `k`.

Collect every acceptable binary string of length `n` and return them in any
order.

### Example 1

```text
Input: n = 4, k = 3
Output: ["0000","0001","0010","0100","1000","1001","1010"]
Explanation:
    "0101" keeps its ones apart, but they sit at indices 1 and 3 for a
    cost of 4, past the budget of 3.
    "0110" is out immediately for its touching ones.
    The seven listed strings all keep their ones separated and pay at
    most 3, for instance "1010" pays 0 + 2 = 2.
```

### Example 2

```text
Input: n = 2, k = 1
Output: ["00","01","10"]
Explanation:
    "11" fails the separation rule, while the other three strings each
    cost at most 1.
```

### Example 3

```text
Input: n = 5, k = 0
Output: ["00000","10000"]
Explanation:
    A zero budget only tolerates ones at index 0, since that position is
    free; any later one would cost at least 1.
```

### Constraints

- `1 <= n <= 12`
- `0 <= k <= n * (n - 1) / 2`

### Hint 1

Grow the string one position at a time, deciding each character as you go.

### Hint 2

Position `i` may take a `1` only when the previous character is `0` and
adding `i` to the running cost still fits under `k`.

### Hint 3

A filled string of length `n` is acceptable by construction and can be
emitted as is.

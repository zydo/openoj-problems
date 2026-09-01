# Two-Power Sums

## Description

A value is a two-power sum of the bases `x` and `y` when it can be written
as `x^i + y^j` for some non-negative integers `i` and `j`. Since either
exponent may be `0` and any base to the `0` is `1`, every pair of bases can
form `1 + 1 = 2` — no value below `2` ever qualifies.

Given integers `x`, `y`, and `bound`, return every two-power sum whose
value is at most `bound`.

The judge compares result arrays exactly, so one form is pinned: return the
values in ascending order, each listed once even when several exponent
pairs produce it — the outputs below follow that form.

### Example 1

```text
Input: x = 2, y = 3, bound = 15
Output: [2,3,4,5,7,9,10,11,13]
Explanation: 2 = 2^0 + 3^0
3 = 2^1 + 3^0
4 = 2^0 + 3^1
5 = 2^1 + 3^1
7 = 2^2 + 3^1
9 = 2^3 + 3^0
10 = 2^0 + 3^2
11 = 2^1 + 3^2
13 = 2^2 + 3^2
```

### Example 2

```text
Input: x = 1, y = 4, bound = 50
Output: [2,5,17]
Explanation: A base of 1 contributes only its `1`, so the reachable values
are 1 + 4^j for j = 0, 1, 2.
```

### Example 3

```text
Input: x = 4, y = 1, bound = 65
Output: [2,5,17,65]
Explanation: Here it is the y-ladder that stays at 1, and 4^3 + 1 = 65
reaches the bound itself — the bound is an inclusive ceiling.
```

### Constraints

- `1 <= x, y <= 100`
- `0 <= bound <= 10⁶`

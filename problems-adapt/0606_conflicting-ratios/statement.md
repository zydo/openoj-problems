# Conflicting Ratios

## Description

Two arrays describe the constraints. The first, `pairs`, holds pairs of
names: `pairs[i] = [Xi, Yi]`. The second, `ratios`, holds the matching
positive reals, fixing `Xi / Yi = ratios[i]`.

Decide whether the constraints clash anywhere: return `true` if some
subset of them cannot hold at once, `false` if one assignment of values
to every name satisfies them all.

Note:

- Treat two numbers as equal when they differ by less than `10^-5` in
  absolute value.
- The data avoids precision traps: working in double precision is
  enough.

### Example 1

```text
Input: pairs = [["p","q"],["q","r"],["p","r"]], ratios = [4,0.5,2]
Output: false
Explanation: The constraints say p / q = 4, q / r = 0.5, p / r = 2.
They fit together: taking q = 1, r = 2 and p = 4 satisfies all three.
```

### Example 2

```text
Input: pairs = [["ab","cd"],["cd","ef"],["ef","ab"]], ratios = [2,3,0.5]
Output: true
Explanation: With ab / cd = 2 and cd / ef = 3, the first two
constraints force ef / ab = 1/6, which is far from the 0.5 the third
one demands.
```

### Example 3

```text
Input: pairs = [["w","w"]], ratios = [4.0]
Output: true
Explanation: Any name over itself is 1, and 4 is not within 10^-5 of 1.
```

### Constraints

- `1 <= pairs.length <= 100`
- `pairs[i].length == 2`
- `1 <= Xi.length, Yi.length <= 5`
- `Xi, Yi` consist of lowercase English letters.
- `pairs.length == ratios.length`
- `0.0 < ratios[i] <= 10.0`
- `ratios[i]` is written with at most two digits after the decimal point.

## Hints

### Hint 1

Think of each name as a vertex. What does one constraint add to the
picture?

### Hint 2

A constraint is a directed edge carrying a multiplicative weight: walk
it and the value gets multiplied.

### Hint 3

Maintain each name's ratio to its component's root (weighted union-find
or a DFS labelling). When a constraint joins two names already in the
same component, compare the ratio the structure implies with the one
given, allowing 10^-5.

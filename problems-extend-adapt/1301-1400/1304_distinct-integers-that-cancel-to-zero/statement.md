# Distinct Integers That Cancel to Zero

## Description

Hand back any array of exactly `n` integers, no two of them equal, whose
values add up to `0`. The order of the array does not matter, and every
collection that satisfies both demands is accepted.

### Example 1

```text
Input: n = 2
Output: [-1,1]
Explanation: -1 + 1 = 0 and the two values are distinct.
```

### Example 2

```text
Input: n = 4
Output: [-2,-1,1,2]
Explanation: The pairs -2/2 and -1/1 each cancel, and all four values
differ. Other collections are accepted too.
```

### Example 3

```text
Input: n = 7
Output: [-3,-2,-1,0,1,2,3]
Explanation: An odd count leaves one value unpaired, and 0 fills that
slot without repeating anything.
```

### Constraints

- `1 <= n <= 1000`

## Hints

### Hint 1

Values can be handed out in cancelling pairs `x` and `-x`; the pairs
already tally to zero by themselves.

### Hint 2

After pairing, an odd `n` still owes one value — `0` fills it without
colliding with any pair member.

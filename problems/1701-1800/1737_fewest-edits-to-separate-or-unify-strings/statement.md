# Fewest Edits to Separate or Unify Strings

## Description

Two lowercase strings `a` and `b` are given. A single edit rewrites any
one character of either string into any other lowercase letter.

You win as soon as the pair satisfies any one of these outcomes:

1. Every character of `a` sorts strictly before every character of `b`.
2. Every character of `b` sorts strictly before every character of `a`.
3. `a` and `b` are each made of a single repeated letter (not
   necessarily the same one).

Edit as few characters as possible so that at least one outcome holds,
and report that smallest count.

### Example 1

```text
Input: a = "bx", b = "caz"
Output: 2
Explanation: Lowering a to "bc" while raising b to "dz" makes every
letter of a strictly precede every letter of b after two edits; no
single edit achieves any of the three outcomes.
```

### Example 2

```text
Input: a = "zebra", b = "apple"
Output: 3
```

### Example 3

```text
Input: a = "oops", b = "tt"
Output: 0
Explanation: The largest letter of a is already strictly smaller than
the smallest letter of b, so the first outcome holds with no edits.
```

### Example 4

```text
Input: a = "gate", b = "hive"
Output: 2
```

### Constraints

- `1 <= a.length, b.length <= 10⁵`
- `a` and `b` contain only lowercase English letters.

## Hints

### Hint 1

Fix a candidate letter of the alphabet and price three plans around it:
that letter crowning `a` while sitting below everything in `b`, the
mirror image with the strings swapped, or both strings collapsing onto
that one letter.

### Hint 2

For the two ordering plans remember the alphabet has hard ends: nothing
can sit above `'z'`, so `'z'` cannot be the ceiling of the lower string,
and nothing sits below `'a'`.

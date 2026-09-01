# Minimum Toggles To Reach Zero

## Description

You start from an integer `n` and want to end at `0`. In one move you may
apply exactly one of these two toggles to `n`'s binary representation:

- Toggle the rightmost bit (bit `0`), unconditionally.
- Toggle bit `i` with `i > 0`, but only while bit `i - 1` is `1` and
  every bit below it — bits `i - 2` down to `0` — is `0`.

Some moves set a bit to `1` rather than clearing it; the rules alone
decide what is legal. Return the fewest moves that turn `n` into `0`.

### Example 1

```text
Input: n = 5
Output: 6
Explanation: The binary representation of 5 is "101".
"101" -> "111" with the second toggle, since the 0th bit is 1.
"111" -> "110" with the first toggle.
"110" -> "010" with the second toggle, since the 1st bit is 1 and the
0th bit is 0.
"010" -> "011" with the first toggle.
"011" -> "001" with the second toggle, since the 0th bit is 1.
"001" -> "000" with the first toggle.
```

### Example 2

```text
Input: n = 13
Output: 9
Explanation: The binary representation of 13 is "1101".
"1101" -> "1100" with the first toggle.
"1100" -> "0100" with the second toggle, since the 2nd bit is 1 and the
bits below it are 0.
"0100" -> "0101" -> "0111" -> "0110" -> "0010" -> "0011" -> "0001" ->
"0000", alternating the two toggles, each one legal in its turn.
```

### Constraints

- `n` is an integer with `0 <= n <= 10⁹`.

## Hints

### Hint 1

Experiment with pure powers of two first: discovering what it costs to
strip the single leading bit reveals a fixed pattern, and the rest of `n`
modifies it in a small, local way.

### Hint 2

The legal moves never allow choosing bits freely — the lowest set bit
always dictates the next forced run of moves. Chasing that structure
beats any search over states.

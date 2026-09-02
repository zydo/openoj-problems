# Balanced Rearrangement Counts

## Description

You are given a string `num` made up of digits. A digit string is called
balanced when the digits sitting at even indices add up to the same total
as the digits sitting at odd indices.

Count the distinct permutations of `num` — rearrangements that use all of
its characters — which come out balanced. That count can be enormous, so
report it modulo 10⁹ + 7.

### Example 1

```text
Input: num = "1212"
Output: 4
Explanation: The six distinct rearrangements are 1122, 1212, 1221,
2112, 2121, and 2211. Four of them — 1122, 1221, 2112, and 2211 — hold
equal sums on their even and odd positions.
```

### Example 2

```text
Input: num = "2468"
Output: 8
Explanation: The digits total 20, so both sides of a balanced
arrangement must hold 10. Exactly 8 of the 24 rearrangements split the
digits that way.
```

### Example 3

```text
Input: num = "303"
Output: 2
Explanation: The distinct rearrangements are 033, 303, and 330. Both
033 and 330 balance; 303 does not.
```

### Constraints

- `2 <= num.length <= 80`
- `num` consists of the digits `'0'` to `'9'`.

## Hints

### Hint 1

Start by tallying how many copies of each digit the string holds.

### Hint 2

Decide the digits one value at a time and let dynamic programming
combine the choices.

### Hint 3

Carry two quantities through the DP: how many even slots are already
filled and the digit sum they hold.

### Hint 4

The odd slots' sum is forced — it is the grand total minus what the even
slots hold — so it needs no state of its own.

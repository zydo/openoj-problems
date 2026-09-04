# Running Tally

## Description

A toy language keeps a single register `X`, which starts at `0`, and offers
exactly four instructions:

- `++X` and `X++` add 1 to the register.
- `--X` and `X--` subtract 1 from it.

A program is given as the string array `tokens`. Run its instructions from
first to last and report the value `X` holds once the program ends.

### Example 1

```text
Input: tokens = ["++X","X--","X++"]
Output: 1
Explanation: The register moves 0 → 1 → 0 → 1 as the instructions run, so it
finishes at 1.
```

### Example 2

```text
Input: tokens = ["X--","--X","X--"]
Output: -3
Explanation: All three instructions lower the register: 0 → -1 → -2 → -3.
```

### Example 3

```text
Input: tokens = ["++X","++X","X++","X--","--X","X++","++X","X++","X--","X++"]
Output: 4
Explanation: Seven instructions raise the register and three lower it, for a
final tally of 7 - 3 = 4.
```

### Constraints

- `1 <= tokens.length <= 100`
- Each element of `tokens` is one of `"++X"`, `"X++"`, `"--X"`, or `"X--"`.

## Hints

### Hint 1

Where the operator sits inside a token is decoration — only whether it is `+`
or `-` changes the register.

### Hint 2

One accumulator suffices: add `1` or `-1` for each instruction in turn, and
the accumulator ends holding the answer.

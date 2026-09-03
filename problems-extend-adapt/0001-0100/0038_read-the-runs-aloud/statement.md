# Read The Runs Aloud

## Description

Start from the string `"1"`. To get from one term of the chain to the
next, read the current term out loud, run by run: for every maximal block
of consecutive identical digits, say how long the block is and then which
digit it is. Writing those readings down in order — each as a count digit
pair followed by the digit itself — produces the next term.

Formally, the chain is defined by:

```text
term(1) = "1"
term(n) = the run-length reading of term(n - 1)
```

As a taste of the reading rule, the string `"55551223"` reads as four
`5`s, one `1`, two `2`s, and one `3`, which is written `"45112213"`.

Given a positive integer `n`, build the chain from `"1"` and return the
`n`th term.

### Example 1

```text
Input: n = 5
Output: "111221"
Explanation: "1" reads as one 1, giving "11"; "11" reads as two 1s,
giving "21"; "21" reads as one 2 then one 1, giving "1211"; "1211" reads
as one 1, one 2, two 1s, giving "111221".
```

### Example 2

```text
Input: n = 7
Output: "13112221"
Explanation: Continue one more step from Example 1: "111221" reads as
three 1s, two 2s, one 1, giving "312211", and "312211" reads as one 3,
one 1, two 2s, two 1s, giving "13112221".
```

### Constraints

- `1 <= n <= 30`

### Follow-up

Can you build the chain without recursion?

## Hints

### Hint 1

One pass over the current term is enough to produce the next one: scan
from the left, measure each maximal block of equal digits, and append the
block's length followed by its digit.

### Hint 2

Nothing forces recursion. Keep the current term in a string variable and
apply the reading step `n - 1` times; the variable then holds the answer.

### Hint 3

Each step grows the term by a roughly constant factor, yet even the 30th
term is only a few thousand characters — so materializing every
intermediate term is cheap at this scale.

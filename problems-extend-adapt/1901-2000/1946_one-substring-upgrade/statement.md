# One Substring Upgrade

## Description

The string `num` holds the decimal digits of a very large integer. A
0-indexed array `change` of length 10 describes a rewrite rule for digits:
the digit `d` may be rewritten as `change[d]`.

You get one shot at improving `num`: pick a single contiguous substring
(any stretch of consecutive positions, possibly empty) and rewrite every
digit inside it through the rule above. Positions outside the chosen
stretch are left alone.

Return the largest integer that this one rewrite can produce, as a string.

### Example 1

```text
Input: num = "4172", change = [9,8,5,0,3,6,4,2,6,8]
Output: "4872"
Explanation: the rule improves 1 to 8, so the rewrite starts there; the
next digit, 7, would shrink to 2, so the stretch ends just before it.
```

### Example 2

```text
Input: num = "9012", change = [1,9,4,6,3,8,2,5,7,0]
Output: "9196"
Explanation: the leading 9 would only shrink, so the rewrite covers the
rest: 0 → 1, 1 → 9, and 2 → 4.
```

### Example 3

```text
Input: num = "555", change = [1,4,7,5,3,2,5,6,9,4]
Output: "555"
Explanation: every digit maps to itself, so no rewrite can change
anything.
```

### Constraints

- `1 <= num.length <= 10⁵`
- `num` consists of only digits 0-9.
- `change.length == 10`
- `0 <= change[d] <= 9`

## Hints

### Hint 1

A rewrite helps at a digit only when `change[d]` is strictly greater than
`d`; when it is smaller, that digit must stay outside the chosen stretch.

### Hint 2

Positions nearer the front carry more weight, so the stretch should begin
at the leftmost digit the rule strictly improves.

### Hint 3

Because the rewritten positions must be contiguous, keep extending through
every digit the rule leaves equal or larger, and stop at the first digit it
would shrink.

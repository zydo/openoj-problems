# Greatest Binary String

## Description

You are given a string `binary` made only of the characters `'0'` and
`'1'`. Two rewriting rules are available, and either may be applied any
number of times, in any order:

- Rule A: an occurrence of `"00"` may be rewritten as `"10"` — for
  instance `"0011" -> "1011"`.
- Rule B: an occurrence of `"10"` may be rewritten as `"01"` — for
  instance `"0110" -> "0101"`.

Return the greatest string reachable by applying the rules. One string is
greater than another if the number it written in binary represents is
larger.

### Example 1

```text
Input: binary = "0110"
Output: "1011"
Explanation: The zero on the right slides left across ones, one seat at a
time: "0110" -> "0101" -> "0011". The adjacent pair of zeros then fuses:
"0011" -> "1011". No string greater than "1011" is reachable.
```

### Example 2

```text
Input: binary = "1101"
Output: "1101"
Explanation: A single zero can only slide left, and every such slide
lowers the string's value, so the string is already as large as it can
get.
```

### Example 3

```text
Input: binary = "0000"
Output: "1110"
Explanation: Pair after pair of leading zeros fuses into a one:
"0000" -> "1000" -> "1100" -> "1110". One zero must always survive, so
"1111" is out of reach.
```

### Constraints

- `1 <= binary.length <= 10⁵`
- `binary` consists only of the characters `'0'` and `'1'`.

## Hints

### Hint 1

Rule B lets a zero crawl leftward past ones; once two zeros sit next to
each other, rule A merges them into a single zero one seat to the right.

### Hint 2

Start from the leftmost zero and keep merging: the surviving zero travels
one seat right per merge, so counting the zeros tells you exactly where it
lands.

### Hint 3

When the string holds at most one zero, no rule improves it — rule B would
only pull that zero left — so the answer is the string itself.

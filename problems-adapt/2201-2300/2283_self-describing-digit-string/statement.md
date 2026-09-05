# Self-Describing Digit String

## Description

Some digit strings carry their own inventory. In a string `num` of length
`n`, the character at position `i` acts as a claim about the string: it
says the digit `i` appears exactly `num[i]` times in `num`. When every
position's claim is true, the string describes itself correctly.

Return `true` if `num` is self-describing in this sense, and `false`
otherwise.

### Example 1

```text
Input: num = "2020"
Output: true
Explanation:
Position 0 claims the digit 0 appears 2 times — it does, at the two
remaining positions. Position 1 claims the digit 1 appears 0 times, and
it never occurs. Position 2 claims the digit 2 appears 2 times, and it
sits at both ends. Position 3 claims the digit 3 appears 0 times, which
holds. All four claims check out, so the string is self-describing.
```

### Example 2

```text
Input: num = "3310"
Output: false
Explanation:
Position 0 claims the digit 0 appears 3 times, but it occurs only once.
Position 1 claims the digit 1 appears 3 times, but it occurs once, and
position 2 claims a count of 1 for the digit 2, which never appears at
all. The claims fail, so return false.
```

### Example 3

```text
Input: num = "414"
Output: false
Explanation:
Position 0 claims the digit 0 appears 4 times in a string of length 3,
which is impossible on its face.
```

### Constraints

- `1 <= num.length <= 10`
- `num` consists only of the digits `'0'` – `'9'`.

## Hints

### Hint 1

One pass over the string is enough to learn everything any position will
ask: tally how often each of the ten digits occurs.

### Hint 2

Then walk the positions again — position `i` is satisfied exactly when
the tally for digit `i` equals the digit written at `i`, and the first
mismatch settles the answer.

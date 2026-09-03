# The Voucher Lineup

## Description

Three parallel arrays of length `n` describe `n` vouchers. Voucher `i`
has:

- `code[i]`: its identifier string.
- `businessLine[i]`: the line of business it belongs to.
- `isActive[i]`: whether it can currently be redeemed.

A voucher makes the lineup only if it passes every check:

- `code[i]` is non-empty and uses only ASCII letters (`a-z`, `A-Z`),
  digits (`0-9`), and underscores (`_`).
- `businessLine[i]` is exactly one of the four known lines of business:
  `"electronics"`, `"grocery"`, `"pharmacy"`, or `"restaurant"`.
- `isActive[i]` is true.

Assemble the identifiers of all qualifying vouchers into one list,
ordered first by line of business in the fixed sequence
`"electronics"`, `"grocery"`, `"pharmacy"`, `"restaurant"`, and then by
identifier in ascending lexicographic order within each line of
business. Return that list.

### Example 1

```text
Input: code = ["BIKE10","SUSHI_2","m!lk"], businessLine = ["electronics","restaurant","grocery"], isActive = [true,true,true]
Output: ["BIKE10","SUSHI_2"]
Explanation: The third voucher's identifier contains `!`, which is not a
letter, digit, or underscore, so it is dropped. The other two pass every
check; electronics ranks ahead of restaurant, giving
["BIKE10", "SUSHI_2"].
```

### Example 2

```text
Input: code = ["zz","AA_1","aa_1"], businessLine = ["pharmacy","grocery","grocery"], isActive = [true,true,true]
Output: ["AA_1","aa_1","zz"]
Explanation: All three vouchers qualify. The two grocery vouchers come
first, and "AA_1" sorts before "aa_1" because uppercase letters precede
lowercase ones; pharmacy follows.
```

### Example 3

```text
Input: code = ["TOFU","CARDS","NOTHING"], businessLine = ["restaurant","toys","pharmacy"], isActive = [false,true,true]
Output: ["NOTHING"]
Explanation: The first voucher is inactive, and "toys" is not a known
line of business, so only NOTHING remains.
```

### Constraints

- `n == code.length == businessLine.length == isActive.length`
- `1 <= n <= 100`
- `0 <= code[i].length, businessLine[i].length <= 100`
- `code[i]` and `businessLine[i]` consist of printable ASCII characters.
- `isActive[i]` is either true or false.

## Hints

### Hint 1

One pass can apply all three gates: reject vouchers whose flag is false,
whose line of business is not among the four known spellings, or whose
identifier is empty or contains a character other than letters, digits,
and underscores.

### Hint 2

Keep each survivor as a pair of its line of business and its identifier.

### Hint 3

Give the four lines of business fixed ranks 0 through 3 in their required
sequence, then sort the pairs by rank first and identifier second.

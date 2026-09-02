# Canonical Letter Counts

## Description

A text's letter tally arrives in a compact run form: each run is one
lowercase letter immediately followed by how many times that letter occurs,
so `a3b1a1c2` stands for the text `"aaabacc"`. Nothing about the format
requires the runs to be grouped or ordered — the same letter is free to
appear in several runs, anywhere in the string.

Bring the tally into canonical form, defined by two rules:

- Each letter occupies exactly one run.
- The runs appear in alphabetical order.

Return the canonical form of `compressed`. Rearranging the runs is expected
and allowed; only the totals matter.

### Example 1

```text
Input: compressed = "b12a3b1"
Output: "a3b13"
Explanation: The letter "b" shows up in two runs worth 12 and 1, so its
combined count is 13; "a" occurs in a single run of 3.
```

### Example 2

```text
Input: compressed = "d1a1d1"
Output: "a1d2"
```

### Example 3

```text
Input: compressed = "z9y9z9"
Output: "y9z18"
```

### Constraints

- `1 <= compressed.length <= 6 * 10⁴`
- `compressed` contains only lowercase English letters and digits.
- The string is a well-formed run list: every letter is immediately followed
  by its frequency.
- Each frequency lies in `[1, 10⁴]` and carries no leading zeroes.

## Hints

### Hint 1

A single left-to-right pass can read off which letter owns each run and the
number that follows it.

### Hint 2

Runs for the same letter may be scattered through the input, so keep
accumulating each letter's total as you scan.

### Hint 3

Walking the finished totals from `a` to `z` and emitting each non-zero one
produces the required string directly.

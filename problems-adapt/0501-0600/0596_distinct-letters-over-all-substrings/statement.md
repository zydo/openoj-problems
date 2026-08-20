# Distinct Letters Over All Substrings

## Description

Call the **variety** of a string the number of different letters it contains —
`"sees"` has variety 2 (`s` and `e`), while `"taco"` has variety 4.

Given a string `s`, add up the variety of every one of its substrings and
return the total.

A substring is a non-empty run of consecutive characters inside `s`.

### Example 1

```text
Input: s = "sees"
Output: 15
Explanation: Grouping the substrings by length:
- Length 1: "s", "e", "e", "s" — variety 1 each, summing to 4.
- Length 2: "se", "ee", "es" — varieties 2, 1, 2, summing to 5.
- Length 3: "see", "ees" — variety 2 each, summing to 4.
- Length 4: "sees" — variety 2.
The total is 4 + 5 + 4 + 2 = 15.
```

### Example 2

```text
Input: s = "warp"
Output: 20
Explanation: No letter repeats, so every substring's variety equals its
length: 4·1 + 3·2 + 2·3 + 1·4 = 20.
```

### Example 3

```text
Input: s = "tote"
Output: 18
Explanation: By length: the four single letters give 4; "to", "ot", "te" give
2 + 2 + 2 = 6; "tot" has variety 2 and "ote" has variety 3, giving 5; "tote"
has variety 3. Altogether 4 + 6 + 5 + 3 = 18.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Fix a right endpoint `i` and look at the substrings that stop there. For each
letter, how many of those substrings contain it?

### Hint 2

A letter `c` appears in exactly those substrings ending at `i` that begin at
or after `c`'s previous occurrence — which is a count expressible with `i` and
that occurrence's index.

### Hint 3

The variety-sum of the substrings ending at `i` changes by a single term when
`i` moves — carry it forward instead of re-adding 26 counters.

### Hint 4

The answer is the running variety-sum accumulated over every `i`.

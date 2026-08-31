# Molecular Formula Tally

## Description

You're given a string `formula` that spells out a chemical formula. Report
how many atoms of each element it contains.

An element's name is one uppercase letter optionally followed by more
lowercase letters. A name may be immediately followed by digits giving
that element's multiplicity within the group it appears in; when no
digits follow, the multiplicity is 1 (and a multiplicity written as `1`
never appears explicitly — e.g. `"H2O"` and `"H2O2"` are valid, but
`"H1O2"` is not).

Placing element names and their counts back to back concatenates their
contributions into one larger formula (so `"H2O2He3Mg4"` is itself a
formula). Wrapping any stretch of the formula in parentheses, optionally
followed by digits, forms a group: every element's count inside the
parentheses gets multiplied by that trailing number (or by 1 if none is
given) before being folded into whatever surrounds it — so `"(H2O2)"`
and `"(H2O2)3"` are both valid formulas, and groups may nest.

Produce the tally as one string: element names in sorted order, each
immediately followed by its total count — but only when that count
exceeds 1, since a count of exactly 1 is never printed.

You may assume every count that appears anywhere in the computation fits
in a 32-bit integer.

### Example 1

```text
Input: formula = "C6H12O6"
Output: "C6H12O6"
Explanation: The formula already lists each element once, with counts
C: 6, H: 12, O: 6.
```

### Example 2

```text
Input: formula = "Ca(OH)2"
Output: "CaH2O2"
Explanation: The group (OH) contributes one O and one H, multiplied by 2
for a total of H: 2, O: 2, plus the standalone Ca: 1 (count omitted
since it's 1).
```

### Example 3

```text
Input: formula = "Na2(SO4(H2O)2)3"
Output: "H12Na2O18S3"
Explanation: The innermost group (H2O) contributes H: 2, O: 1, doubled to
H: 4, O: 2 by its trailing 2. Folding that into the surrounding group adds
one S and four more O, giving S: 1, O: 6 before the outer ×3 multiplies
everything inside the parentheses to S: 3, O: 18, H: 12. Adding the
standalone Na2 gives the final totals H: 12, Na: 2, O: 18, S: 3.
```

### Constraints

- `1 <= formula.length <= 1000`
- `formula` consists of English letters, digits, `'('`, and `')'`.
- `formula` is always a valid formula under the grammar above.

## Hints

### Hint 1

Process the formula left to right with an explicit stack of running
tallies. On `'('`, push a fresh empty tally. On an element name, add its
(implicit or explicit) count into the tally on top of the stack. On
`')'`, read the optional multiplier that follows, pop the top tally, and
fold each of its counts — scaled by that multiplier — into the tally now
exposed on top of the stack.

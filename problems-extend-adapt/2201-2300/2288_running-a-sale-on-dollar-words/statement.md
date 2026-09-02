# Running a Sale on Dollar Words

## Description

A sentence is a string of words separated by single spaces, where a word
may contain lowercase letters, digits, and the dollar sign `'$'`. A word
counts as a price tag only when it is a dollar sign followed by nothing
but digits — `"$$7"`-style mixes, bare signs, and trailing signs do not
qualify. So `"$12"` marks a price, while `"7$"`, `"$"`, and `"$3a"` do
not.

You are given the string `sentence` and an integer `discount`
representing a percentage. Rewrite every price-tag word as the price
after taking `discount` percent off, formatted with exactly two digits
after the decimal point. Every other word is left exactly as it was.

Return the rewritten sentence.

All prices are at most 10 digits long.

### Example 1

```text
Input: sentence = "our combo costs $8 today", discount = 25
Output: "our combo costs $6.00 today"
Explanation: "$8" is the only price tag. Taking 25% off leaves $6,
which is written "$6.00" with two decimal places.
```

### Example 2

```text
Input: sentence = "$7 chips $3", discount = 0
Output: "$7.00 chips $3.00"
Explanation: A 0% discount leaves both prices unchanged in value, but
they are still reformatted to carry two decimal places.
```

### Example 3

```text
Input: sentence = "buy $ now for 10$", discount = 50
Output: "buy $ now for 10$"
Explanation: Neither word is a price tag — one is a bare sign and the
other puts the sign last — so the sentence is returned untouched.
```

### Constraints

- `1 <= sentence.length <= 10^5`
- `sentence` contains only lowercase English letters, digits, `' '`, and
  `'$'`.
- `sentence` has no leading or trailing spaces, and its words are
  separated by single spaces.
- Every price is a positive number with no leading zeros and at most 10
  digits.
- `0 <= discount <= 100`

## Hints

### Hint 1

Walk the words one at a time; the only question for each is whether a
`'$'` at the front is followed by digits and nothing else.

### Hint 2

Whole-dollar inputs make this easier than it looks: multiplying the
dollar amount by `100 - discount` gives the discounted value in exact
cents, ready to be printed as two decimal places.

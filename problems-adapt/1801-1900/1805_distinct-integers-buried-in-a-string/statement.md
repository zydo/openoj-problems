# Distinct Integers Buried in a String

## Description

The string `word` contains only digits and lowercase English letters.

Imagine every letter is overwritten with a space. The surviving digit
groups, each separated by at least one space, are the integers buried in
the string — for instance, `"a123bc34d8ef34"` turns into
`" 123  34 8  34"`, exposing the integers `123`, `34`, `8`, and `34`.

Return how many distinct integers the string holds after this
replacement. Two integers count as the same when their decimal
representations without leading zeros are identical — `"01"` and `"1"`
are one integer, not two.

### Example 1

```text
Input: word = "x007y7z70"
Output: 2
Explanation: The letters carve the string into the digit runs "007", "7",
and "70". Stripping leading zeros leaves 7, 7, and 70, so two distinct
integers appear.
```

### Example 2

```text
Input: word = "123abc456def789"
Output: 3
Explanation: The three digit runs 123, 456, and 789 are all different.
```

### Example 3

```text
Input: word = "000"
Output: 1
Explanation: One run of zeros is a single integer, 0 — dropping leading
zeros never leaves an empty number.
```

### Example 4

```text
Input: word = "abc"
Output: 0
Explanation: With no digits anywhere, no integer survives.
```

### Constraints

- `1 <= word.length <= 1000`
- `word` consists of digits and lowercase English letters.

## Hints

### Hint 1

Scan for maximal runs of consecutive digits — each run is one candidate
integer, and the letters act purely as separators.

### Hint 2

A run may be hundreds of digits long, so never convert it to a number.
Trim its leading zeros (keeping at least one digit) and drop the
normalized string into a hash set; the answer is the set's size.

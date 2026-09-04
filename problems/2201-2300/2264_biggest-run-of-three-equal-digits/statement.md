# Biggest Run of Three Equal Digits

## Description

A digit string `num` stands for a very large integer. Call a substring of
`num` a uniform triple when it satisfies both of these:

- It spans exactly 3 consecutive characters of `num`.
- All three characters are the same digit.

Return the largest uniform triple as a string. If the string contains no
uniform triple, return the empty string `""`.

Notes:

- A substring is a contiguous block of characters taken from within the
  string.
- `num` may contain leading zeroes, and so may a uniform triple.

### Example 1

```
Input: num = "33372227"
Output: "333"
Explanation: Two distinct uniform triples occur, "333" and "222". The
larger of the two is "333".
```

### Example 2

```
Input: num = "1200007"
Output: "000"
Explanation: The run of zeros is the only triple of equal digits, so "000"
is the answer even though it carries leading zeroes.
```

### Example 3

```
Input: num = "881888"
Output: "888"
Explanation: Both runs of 8s qualify; either window evaluates to "888".
```

### Example 4

```
Input: num = "56249"
Output: ""
Explanation: No three consecutive characters are equal, so there is no
uniform triple at all.
```

### Constraints

- `3 <= num.length <= 1000`
- `num` consists only of digit characters.

## Hints

### Hint 1

Try the candidates from "999" down to "000" in decreasing order; the first
one that appears inside `num` is the answer.

### Hint 2

If none of those ten strings ever shows up, the answer is the empty string.

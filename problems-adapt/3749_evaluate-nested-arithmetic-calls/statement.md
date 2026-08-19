# Evaluate Nested Arithmetic Calls

## Description

You are given a string `expression` that encodes an arithmetic value. The
encoding is recursive — it is either:

- an integer literal, such as `158` or `-7`, or
- a call `op(a,b)`, where `op` is one of `add`, `sub`, `mul`, `div`, and `a`
  and `b` are themselves encodings.

The four names carry their usual meanings:

- `add(a,b) = a + b`
- `sub(a,b) = a - b`
- `mul(a,b) = a * b`
- `div(a,b) = a / b`

Return the value of the encoding once every call is carried out.

### Example 1

```text
Input: expression = "mul(6,7)"
Output: 42
Explanation: One call, no nesting: 6 * 7 is 42.
```

### Example 2

```text
Input: expression = "-77"
Output: -77
Explanation: A bare literal is its own value, sign included.
```

### Example 3

```text
Input: expression = "div(sub(mul(9,4),6),add(2,1))"
Output: 10
Explanation:
mul(9,4) is 36, so the left argument of the outer call becomes sub(36,6) = 30.
add(2,1) is 3, and 30 / 3 is 10.
```

### Constraints

- `1 <= expression.length <= 10^5`
- `expression` is a valid encoding, built from digits, commas, parentheses, the
  minus sign `-`, and the four lowercase names `add`, `sub`, `mul`, `div`.
- Every intermediate value fits in a signed 64-bit integer.
- Every division is exact.

## Hints

### Hint 1

The value of an encoding depends on the values of two smaller encodings and
one operator name. That self-similarity is an invitation to recurse.

### Hint 2

Scanning left to right, the character under the cursor names the case: a digit
or `-` opens a literal, anything else opens a three-letter operator.

### Hint 3

Have your parse routine report both the value and the position just past what
it consumed, so each caller resumes exactly where its argument ended and the
whole string is read once.

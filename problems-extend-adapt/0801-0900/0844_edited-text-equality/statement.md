# Edited Text Equality

## Description

Two strings describe characters typed into initially empty text fields. A
lowercase letter appends itself, while `#` erases the most recently retained
letter. Using `#` when a field is already empty has no effect.

Return `true` when the two finished text fields contain identical strings, or
`false` otherwise.

### Example 1

```text
Input: s = "xy##z", t = "z"
Output: true
Explanation: The two backspaces remove `y` and then `x`, leaving `z`.
```

### Example 2

```text
Input: s = "a##b", t = "##b"
Output: true
Explanation: Both fields finish as `"b"`; extra backspaces at an empty field
do nothing.
```

### Example 3

```text
Input: s = "abc###", t = "#"
Output: true
```

### Constraints

- Both `s` and `t` have lengths from `1` through `200`.
- Each string uses only lowercase English letters and `#`.

### Follow-up

Can you compare the completed fields in linear time while using constant extra
space?

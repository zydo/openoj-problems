# Greatest String Score

## Description

Every alphanumeric string carries a value: if it consists only of digits,
its value is that integer (leading zeros ignored); otherwise its value is
its length. Given `strs`, return the largest value among them.

### Example 1

```text
Input: strs = ["alic3","bob","3","4","00000"]
Output: 5
Explanation: "alic3" and "bob" are not purely numeric, so each is worth its
length — 5 and 3. The digit strings are worth 3, 4, and 0 respectively. The
maximum is 5.
```

### Example 2

```text
Input: strs = ["x7","42","abc","007"]
Output: 42
Explanation: "42" scores 42, far ahead of the lengths 2 and 3 and the 7 of
"007".
```

### Constraints

- `1 <= strs.length <= 100`
- `1 <= strs[i].length <= 9`
- `strs[i]` consists of only lowercase English letters and digits.

## Hints

### Hint 1

A string is purely numeric exactly when every character is a digit; parse it
as an integer in that case.

### Hint 2

Otherwise score it by length — no other parsing applies.

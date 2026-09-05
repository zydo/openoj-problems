# Matching Digit Sums

## Description

You are handed a string `num` made up entirely of digits. Split its digits
into two camps by position: the ones sitting at even indices and the ones
sitting at odd indices. The string is called balanced when both camps add
up to the same total.

Decide whether `num` is balanced — answer `true` if it is and `false`
otherwise.

### Example 1

```text
Input: num = "34182"
Output: false
Explanation: The even-index digits give 3 + 1 + 8 = 12 while the
odd-index digits give 4 + 2 = 6. The two totals differ, so the string is
not balanced.
```

### Example 2

```text
Input: num = "5115"
Output: true
Explanation: The even-index digits give 5 + 1 = 6 and the odd-index
digits give 1 + 5 = 6, so the totals match.
```

### Example 3

```text
Input: num = "12012"
Output: true
Explanation: The even-index digits give 1 + 0 + 2 = 3 and the odd-index
digits give 2 + 1 = 3.
```

### Constraints

- `2 <= num.length <= 100`
- `num` contains only the characters `'0'` through `'9'`.

# Serial Regrouping

## Description

A product serial arrives as a string `s` holding only letters, digits, and
dashes. Reformat it into groups of exactly `k` characters separated by
dashes, so that the letters are uppercased and all original dashes are
discarded.

Every group must hold exactly `k` characters except the first, which may be
shorter — but never empty. Return the regrouped serial.

### Example 1

```text
Input: s = "a-b-c-d-e-f", k = 2
Output: "AB-CD-EF"
Explanation: Stripping the dashes and uppercasing gives "ABCDEF"; six
characters split evenly into three pairs.
```

### Example 2

```text
Input: s = "abcdef", k = 3
Output: "ABC-DEF"
Explanation: The six characters form two groups of three.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` contains only English letters, digits, and dashes.
- `1 <= k <= 10⁴`
# Frequency-Ordered String

## Description

Given a string `s`, rebuild it so that its characters appear in decreasing
order of how often they occur. Characters sharing the same frequency must stay
together, but within a tie this judge pins the order to ascending character
order.

Return the rebuilt string.

### Example 1

```text
Input: s = "hello"
Output: "lleho"
Explanation: The `l` appears twice and must come first; `h`, `e`, and `o`
each appear once, in that ascending order.
```

### Example 2

```text
Input: s = "banana"
Output: "aaannb"
```

### Example 3

```text
Input: s = "google"
Output: "ggooel"
Explanation: `g` and `o` both appear twice, so the ascending-order tie
break places `g` before `o`.
```

### Constraints

- `1 <= s.length <= 5 * 10⁵`
- `s` consists of uppercase and lowercase English letters and digits.

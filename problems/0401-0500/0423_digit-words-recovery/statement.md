# Digit Words Recovery

## Description

The English words `"zero"` through `"nine"` have had their letters shuffled
together into one string `s`. The letters of every word are still present
and account for the whole string, but the words themselves are out of order.

Reconstruct the digits and return them in ascending order as a single string
of digits.

### Example 1

```text
Input: s = "zeroonetwo"
Output: "012"
```

### Example 2

```text
Input: s = "fourseven"
Output: "47"
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s[i]` is one of the letters `["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"]`.
- `s` is guaranteed to be valid.

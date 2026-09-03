# Chains of All the Words

## Description

You are given a string `s` and a list of words `words`. Every word in
`words` has the same length.

A chain is a string put together by gluing all the words of some
arrangement of `words` end to end.

For example, with `words = ["one","two"]`, both `"onetwo"` and
`"twoone"` are chains. `"onetw"` is not, and neither is `"onetwoo"`:
each falls short of being exactly one full arrangement glued
together.

Find every position in `s` where a chain begins, and return those
starting indices in ascending order.

### Example 1

```text
Input: s = "catdogdogcat", words = ["dog","cat"]
Output: [0,6]
Explanation: The substring starting at 0 is "catdog" — "cat" glued
to "dog". The substring starting at 6 is "dogcat" — the other
arrangement, "dog" glued to "cat". Both count.
```

### Example 2

```text
Input: s = "monotone", words = ["tone","tide"]
Output: []
Explanation: No window of 8 letters in "monotone" spells "tonetide"
or "tidetone", so no chain occurs.
```

### Example 3

```text
Input: s = "aaaaaa", words = ["aa","aa"]
Output: [0,1,2]
Explanation: The only word content is "aa", needed twice, so any
window of four `a`s is a chain and the first three positions qualify.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `1 <= words.length <= 5000`
- `1 <= words[i].length <= 30`
- `s` and `words[i]` consist of lowercase English letters.

# The Delta-Pattern Outlier

## Description

You are given an array `words` of strings that all have the same length.
Let that common length be `n`.

Every string can be reduced to a _delta array_ of length `n - 1`: the
differences between each pair of neighboring letters, where a letter is
identified by its position in the alphabet (`'a'` is `0`, `'b'` is `1`,
and so on up to `'z'` as `25`). Concretely, for a string `w` the delta
array holds `w[1] - w[0]`, `w[2] - w[1]`, and so on through `w[n-1] -
w[n-2]`.

For example, the delta array of `"acb"` is `[2 - 0, 1 - 2] = [2, -1]`.

All but one of the strings in `words` share the same delta array. Return
the single string whose delta array is different.

### Example 1

```text
Input: words = ["ace","bdf","caz"]
Output: "caz"
Explanation:
- "ace" has deltas [2, 2].
- "bdf" has deltas [2, 2].
- "caz" has deltas [-2, 25].
The shared pattern is [2, 2], so the outlier is "caz".
```

### Example 2

```text
Input: words = ["aa","bb","cc","cb"]
Output: "cb"
Explanation: "aa", "bb", and "cc" all have the single-difference pattern
[0], while "cb" has [-1], making it the odd one out.
```

### Example 3

```text
Input: words = ["bad","cae","dbf","ecg"]
Output: "bad"
Explanation:
- "bad" has deltas [-1, 3].
- "cae", "dbf", and "ecg" each have deltas [-2, 4].
The majority pattern is [-2, 4], so "bad" is the answer.
```

### Constraints

- `3 <= words.length <= 100`
- `n == words[i].length`
- `2 <= n <= 20`
- `words[i]` consists only of lowercase English letters.

## Hints

### Hint 1

Compute the delta array for every word, using each letter's alphabet
position.

### Hint 2

The outlier is the word whose delta array appears exactly once, so count
how many words share each pattern and pick the unique one.

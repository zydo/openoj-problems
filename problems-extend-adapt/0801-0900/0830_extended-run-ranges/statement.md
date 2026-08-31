# Extended Run Ranges

## Description

A string `s` contains only lowercase English letters. Consecutive equal
characters form a maximal run. For example, the runs in `"abbxxxxzyy"` are
`"a"`, `"bb"`, `"xxxx"`, `"z"`, and `"yy"`.

A run is extended when it has at least three characters. Return an array of
`[start, end]` pairs for every extended run, where both indices are
inclusive. List the pairs in increasing order of `start`.

### Example 1

```text
Input: s = "ppqrrrssssu"
Output: [[3,5],[6,9]]
Explanation: "rrr" spans indices 3 through 5 and "ssss" spans indices 6
through 9.
```

### Example 2

```text
Input: s = "zzzaabbcccc"
Output: [[0,2],[7,10]]
Explanation: The extended runs are "zzz" and "cccc".
```

### Example 3

```text
Input: s = "abcdef"
Output: []
Explanation: Every run has length one.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` contains only lowercase English letters.

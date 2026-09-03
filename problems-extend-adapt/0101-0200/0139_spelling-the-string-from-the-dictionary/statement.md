# Spelling The String From The Dictionary

## Description

You are given a string `s` and a list of words `dictionary`. Decide whether
`s` can be spelled by laying dictionary words side by side with nothing left
over: some sequence of dictionary words, concatenated in order, has to
rebuild `s` exactly.

A word may be used any number of times in the same spelling.

### Example 1

```text
Input: s = "tumbleweed", dictionary = ["tumble","weed"]
Output: true
Explanation: "tumbleweed" reads as "tumble" followed by "weed".
```

### Example 2

```text
Input: s = "hophophop", dictionary = ["hop","grasshopper"]
Output: true
Explanation: the spelling is "hop hop hop" — the same word three times,
which is allowed.
```

### Example 3

```text
Input: s = "railroadcar", dictionary = ["rail","road","railroad","carrot"]
Output: false
Explanation: every partial spelling stops somewhere inside the trailing
"car", and no dictionary word covers the rest.
```

### Constraints

- `1 <= s.length <= 300`
- `1 <= dictionary.length <= 1000`
- `1 <= dictionary[i].length <= 20`
- `s` and `dictionary[i]` contain only lowercase English letters.
- All the words in `dictionary` are distinct.

# Maximum Complete Substring Packing

## Description

You are given a string `s` of lowercase letters. Choose as many non-empty
substrings of `s` as you can while satisfying both rules:

- The chosen substrings never overlap: for any two of them, `s[i..j]` and
  `s[x..y]`, either `j < x` or `i > y` holds.
- Whenever a chosen substring contains a letter `c`, it contains every
  occurrence of `c` in `s`.

Several choices may tie for the maximum count. Among those, exactly one
has the smallest total length; return its substrings, in any order.

### Example 1

```text
Input: s = "aeceba"
Output: ["b","c"]
Explanation: The substrings obeying the containment rule are "aeceba",
"ece", "c", and "b". Two disjoint picks is the most anyone can reach:
both {"c","b"} and {"ece","b"} get there, but {"c","b"} wins the
tie-break — total length 2 against 4.
```

### Example 2

```text
Input: s = "abbacddc"
Output: ["bb","dd"]
Explanation: The valid substrings are "abba", "bb", "cddc", and "dd".
The best count is 2, and {"abba","cddc"} reaches it too — but at a total
length of 8, while {"bb","dd"} needs only 4.
```

### Example 3

```text
Input: s = "gagttggg"
Output: ["a","tt"]
Explanation: The letter g spans indexes 0 through 7, so any substring
containing a g must be the entire string, which excludes everything
else. Passing on g leaves "a" and "tt", two disjoint valid substrings
and therefore the maximum count.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters only.

## Hints

### Hint 1

Two valid substrings can never overlap partially: one is either fully
disjoint from the other or entirely contains it.

### Hint 2

Note down the first and the last index at which every letter occurs.

### Hint 3

Treat each letter's `[first, last]` span as a seed and widen it whenever
some letter inside reaches beyond it; repeat until the span stops
growing.

### Hint 4

Take the settled spans shortest-first, keeping each one that stays clear
of everything already kept.

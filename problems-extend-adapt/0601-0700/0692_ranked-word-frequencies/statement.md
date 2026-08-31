# Ranked Word Frequencies

## Description

You are given a list of strings `words` and an integer `k`. Return the `k`
words that occur most often in `words`.

Order the result by occurrence count from highest to lowest. When two
words tie on count, break the tie by putting the alphabetically earlier
word first.

### Example 1

```text
Input: words = ["bear","cat","bear","cat","ant","dog","ant"], k = 3
Output: ["ant","bear","cat"]
Explanation: "ant", "bear", and "cat" each occur twice, more often than
"dog", which occurs once. All three tie on count, so they are ordered
alphabetically: "ant" before "bear" before "cat".
```

### Example 2

```text
Input: words = ["moon","star","moon","sun","star","moon","comet"], k = 4
Output: ["moon","star","comet","sun"]
Explanation: "moon" occurs three times and "star" occurs twice, ahead of
everything else. "comet" and "sun" each occur once, and since "comet"
comes first alphabetically, it is listed ahead of "sun".
```

### Constraints

- `1 <= words.length <= 500`
- `1 <= words[i].length <= 10`
- `words[i]` consists of lowercase English letters.
- `k` is in the range `[1, the number of unique words[i]]`.

### Follow-up

Could you solve it in `O(n log k)` time and `O(n)` extra space?

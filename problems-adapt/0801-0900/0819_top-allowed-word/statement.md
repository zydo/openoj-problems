# Top Allowed Word

## Description

Given a text `paragraph` and a list `banned` of lowercase words, return the
most frequently occurring word that is not banned. Matching ignores case, and
the returned answer must be lowercase. At least one allowed word exists, and
the most frequent allowed word is unique.

A word is a maximal sequence of English letters. Spaces and punctuation split
words and are otherwise ignored.

### Example 1

```text
Input: paragraph = "Rain rain, sun! SUN? cloud, rain.", banned = ["sun"]
Output: "rain"
```

### Example 2

```text
Input: paragraph = "One, one; two? two two!", banned = []
Output: "two"
```

### Constraints

- `1 <= paragraph.length <= 1000`
- `paragraph` contains English letters, spaces, and only these punctuation
  marks: `!?',;.`.
- `0 <= banned.length <= 100`
- `1 <= banned[i].length <= 10`
- Each `banned[i]` contains only lowercase English letters.

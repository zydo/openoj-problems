# Words Within Words

## Description

Given an array of strings `words`, collect every string in `words` that
occurs as a contiguous substring of a _different_ string in the array.
No word counts because of an occurrence inside itself, and the answer
may be returned in any order.

### Example 1

```text
Input: words = ["book","notebook","pen","pencil"]
Output: ["book","pen"]
Explanation: "book" sits inside "notebook" and "pen" sits inside
"pencil". ["pen","book"] is equally valid.
```

### Example 2

```text
Input: words = ["car","card","scarf","bus"]
Output: ["car"]
Explanation: "car" is a substring of "card" (and of "scarf"); none of
the other words hides inside a different word.
```

### Example 3

```text
Input: words = ["sun","moon","sky"]
Output: []
Explanation: Nothing in `words` is contained in anything else.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 30`
- `words[i]` consists of lowercase English letters.
- All strings in `words` are distinct.

## Hints

### Hint 1

The limits are tiny — at most 100 words of length at most 30 — so
directly testing every ordered pair of words is fast enough.

### Hint 2

For each word, scan the others until one contains it; since all words
are distinct, only a strictly longer word can succeed.
